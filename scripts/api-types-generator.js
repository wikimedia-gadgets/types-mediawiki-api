// Paste this into the browser console
// and copy the console log output

/**
 * If an enum parameter contains any of the following value subsets, it is expected to be extensible by
 * a MediaWiki configuration or extension, and should be generalized back to a string.
 */
const GENERALIZE_ENUM_TYPE_CONTAINING = [
    // Codex icons
    ["cdxIconArticle"],
    // content formats
    ["application/json", "text/plain"],
    // content models
    ["GadgetDefinition", "JsonSchema"],
    // languages
    ["en", "zh"],
    // tags
    ["AWB", "WPCleaner"],
    // user groups
    ["founder", "steward"],
    // user rights
    ["abusefilter-view", "editsitecss"],
    // wikis
    ["enwiki", "zhwiki"],
].map((l) => new Set(l));

/**
 * JSdoc declaration, associated to something.
 */
class JSdoc {
    /**
     * JSdoc-compatible description.
     *
     * @type {string}
     */
    description = "";
    /**
     * True if the thing is private (and that can not be expressed with the TS type system),
     * false or undefined otherwise.
     *
     * @type {boolean}
     */
    private = false;
    /**
     * True or a JSdoc-compatible message if the thing is deprecated, false or undefined
     * otherwise.
     *
     * @type {string | boolean}
     */
    deprecated = false;
    /**
     * List of related links to include at the end of the JSdoc.
     *
     * @type {string[]}
     */
    seelinks = [];

    /**
     * Generate a TS code block from a JSdoc declaration.
     */
    toString() {
        /** @type {string[]} */
        const lines = [];

        if (typeof this.deprecated === "string") {
            lines.push(`@deprecated ${this.deprecated}`);
        } else if (this.deprecated) {
            lines.push("@deprecated");
        }

        if (this.private) {
            lines.push("@private");
        }

        if (this.seelinks.length) {
            lines.push(...this.seelinks.map((l) => `@see ${l}`));
        }

        if (this.description !== "") {
            if (lines.length > 0) {
                lines.unshift("");
            }
            lines.unshift(...this.description.split("\n"));
        }

        if (lines.length === 0) {
            return "";
        } else {
            return ["/**", ...lines.map((l) => ` * ${l}`), " */"].join("\n");
        }
    }
}

/**
 * Convert HTML syntax to JSdoc-friendly markdown.
 *
 * @param {string} text HTML text.
 */
const htmlToJSdoc = (text) => {
    // div, span --> nothing
    text = text.replace(/<\/?(div|span).*?>/g, "");

    // p --> paragraph
    text = text.replace(/<p.*?>/g, "").replace(/<\/p>\s*/g, "\n\n");

    // b, em, strong --> bold
    text = text.replace(/<\/?(b|em|strong).*?>/g, "**");

    // i --> italic
    text = text.replace(/<\/?i.*?>/g, "_");

    // code, kbd, samp, var --> code block
    text = text.replace(/<\/?(code|kbd|samp|var).*?>/g, "`");

    // a --> @link
    text = text.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/g, "{@link $1 $2}");

    // ol, ul --> list
    // dl     --> list (with bold term)
    text = text.replace(/<\/?(dd|dl|ol|ul).*?>/g, "");
    text = text.replace(/\n?<dt.*?>/g, "\n- **").replace(/<\/dt>\s*/g, "**: ");
    text = text.replace(/\n?<li.*?>/g, "\n- ").replace(/<\/li>/g, "");

    text = text.replace(/\n{3,}/g, "\n\n");

    // Resolve local links to www.mediawiki.org.
    // {@link /X Y} --> {@link https://www.mediawiki.org/X Y}
    text = text.replace(/\{@link \//g, "{@link https://www.mediawiki.org/");

    // Move code blocks out of links.
    // `{@link X Y}` --> {@link X `Y`}
    text = text.replace(/`\{@link (.*?) (.*?)\}`/g, "{@link $1 `$2`}");
    text = text.replace(/`\{@link (.*?)\}`/g, "{@link $1 `$1`}");

    // Timestamps: use a generic string description to prevent spurious changes when
    // re-generating the type declarations. We assume all timestamps refer to this exact time.
    text = text.replace(/`\d{4}(?:-\d{2}){2}T\d{2}(?::\d{2}){2}Z`/g, "the current timestamp");

    // Replace HTML entities.
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    text = textArea.value;

    return text.trim();
};

/**
 * Format a TS literal for JSdoc usage.
 *
 * @param {unknown} lit Literal.
 * @param {boolean} [multi] Whether multiple literals can be specified as a "|"-separated list.
 * @returns {string}
 */
const literalToJSdoc = (lit, multi) => {
    if (lit === undefined || lit === "") {
        return "";
    }

    if (Number.isInteger(lit)) {
        return `${lit}`;
    }

    if (!multi) {
        return `\`${lit}\``;
    }

    const litParts = `${lit}`.split("|").map((l) => literalToJSdoc(l));
    if (litParts.length === 1) {
        return litParts[0];
    } else if (litParts.length === 2) {
        return `${litParts[0]} and ${litParts[1]}`;
    } else {
        const lastPart = litParts.pop();
        return `${litParts.join(", ")}, and ${lastPart}`;
    }
};

function processParamInfo(prefix, param) {
    let type = param.type;

    // Convert the API type to a TypeScript type
    // Avoid being over-specific
    if (Array.isArray(type)) {
        const enumSet = new Set(type);
        if (GENERALIZE_ENUM_TYPE_CONTAINING.some((s) => s.isSubsetOf(enumSet))) {
            type = "string";
        }
    } else if (type === "text" || type === "title" || type === "user" || type === "raw") {
        type = "string";
    } else if (type === "integer") {
        type = "number";
    }

    if (Array.isArray(type)) {
        type = type.map((e) => `'${e}'`).join(" | ");
        if (param.multi) {
            type = `OneOrMore<${type}>`;
        }
    } else {
        if (param.multi) {
            type = `${type} | ${type}[]`;
        }
    }

    if (param.allspecifier !== undefined) {
        type = `${type} | '${param.allspecifier}'`;
    }

    let name = prefix + param.name;
    if (name.includes("-")) {
        name = `"${name}"`;
    }

    const jsdoc = new JSdoc();
    jsdoc.description = htmlToJSdoc(param.description || "");
    if (param.default !== undefined) {
        const jsdocLit = literalToJSdoc(param.default, param.multi) || "an empty string";
        jsdoc.description += `\n\nDefaults to ${jsdocLit}.`;
    }
    if (param.sensitive) {
        jsdoc.description += "\n\nSensitive parameter.";
    }
    if (param.deprecated) {
        jsdoc.deprecated = true;
    }

    return `${jsdoc.toString()}\n${name}?: ${type};`;
}

function getInterfaceName(module) {
    return module.classname
        .replace(/\\/g, "")
        .replace(/^(?:MediaWiki|Extensions?)+/, "")
        .replace(/ApiApi/g, "Api");
}

function processModuleInfo(parent, module) {
    const jsdoc = new JSdoc();
    jsdoc.description = htmlToJSdoc(module.description);
    jsdoc.seelinks = module.helpurls;
    if (module.internal) {
        jsdoc.private = true;
    }
    if (module.deprecated) {
        jsdoc.deprecated = true;
    }
    return [
        jsdoc.toString(),
        `export interface ${getInterfaceName(module)}Params extends ${parent}Params {`,
        ...module.parameters.map((param) =>
            processParamInfo(module.prefix, param).replace(/^/gm, "\t"),
        ),
        "}",
    ].join("\n");
}

const actionData = await new mw.Api().get({
    action: "paraminfo",
    format: "json",
    uselang: "en",
    helpformat: "html",
    modules: "*",
    formatversion: "2",
});

const queryData = await new mw.Api().get({
    action: "paraminfo",
    format: "json",
    uselang: "en",
    helpformat: "html",
    modules: "query+*",
    formatversion: "2",
});

const actionTypes = actionData.paraminfo.modules.map((module) => processModuleInfo("Api", module));

const queryTypes = queryData.paraminfo.modules.map((module) =>
    processModuleInfo("ApiQuery", module),
);

console.log([...actionTypes, ...queryTypes].join("\n\n"));
