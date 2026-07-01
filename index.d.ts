// tslint:disable:no-empty-interface

type timestamp = string;
type expiry = string;
type namespace = number;
type limit = number | "max";
type password = string;
type upload = File; // XXX
type OneOrMore<T> = T | T[];

export type ApiAssert = "anon" | "bot" | "user";

export type ApiTokenType =
    | "createaccount"
    | "csrf"
    | "deleteglobalaccount"
    | "login"
    | "patrol"
    | "rollback"
    | "setglobalaccountstatus"
    | "userrights"
    | "watch";

export type ApiLegacyTokenType =
    | "block"
    | "delete"
    | "edit"
    | "email"
    | "import"
    | "move"
    | "options"
    | "protect"
    | "unblock";

export type UnknownApiParams = Record<
    string,
    string | number | boolean | File | string[] | number[] | undefined
>;

export interface ApiParams extends UnknownApiParams {
    action?: string;
    format?: "json" | "jsonfm" | "xml" | "xmlfm" | "php" | "none";
    maxlag?: number;
    smaxage?: number;
    maxage?: number;
    assert?: "user" | "bot" | "anon";
    assertuser?: string;
    requestid?: string;
    servedby?: boolean;
    curtimestamp?: boolean;
    responselanginfo?: boolean;
    origin?: string;
    uselang?: string;
    errorformat?: "bc" | "html" | "none" | "plaintext" | "raw" | "wikitext";
    errorlang?: string;
    errorsuselocal?: boolean;
    centralauthtoken?: string;

    // format=json
    callback?: string;
    utf8?: boolean;
    ascii?: boolean;
    formatversion?: "1" | "2" | "latest";
}

export {};

// AUTOMATICALLY GENERATED FROM HERE:

/**
 * Check to see if an AbuseFilter matches a set of variables, an edit, or a logged AbuseFilter event.
 *
 * vars, rcid or logid is required however only one may be used.
 */
export interface AbuseFilterApiCheckMatchParams extends ApiParams {
    /**
     * The full filter text to check for a match.
     */
    filter?: string;
    /**
     * JSON encoded array of variables to test against.
     */
    vars?: string;
    /**
     * Recent change ID to check against.
     */
    rcid?: number;
    /**
     * Edit filter log ID to check against.
     */
    logid?: number;
}

/**
 * Check syntax of an AbuseFilter filter.
 */
export interface AbuseFilterApiCheckSyntaxParams extends ApiParams {
    /**
     * The full filter text to check syntax on.
     */
    filter?: string;
}

/**
 * Evaluates an AbuseFilter expression.
 */
export interface AbuseFilterApiEvalExpressionParams extends ApiParams {
    /**
     * The expression to evaluate.
     */
    expression?: string;
    /**
     * Whether the result should be pretty-printed.
     */
    prettyprint?: boolean;
}

/**
 * Unblocks a user from receiving autopromotions due to an abusefilter consequence.
 */
export interface AbuseFilterApiUnblockAutopromoteParams extends ApiParams {
    /**
     * Username of the user you want to unblock.
     */
    user?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * View private details of an AbuseLog entry.
 */
export interface AbuseFilterApiAbuseLogPrivateDetailsParams extends ApiParams {
    /**
     * The ID of the AbuseLog entry to be checked.
     */
    logid?: number;
    /**
     * A valid reason for performing the check.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Acquire a temporary user username and stash it in the current session, if temp account creation is enabled and the current user is logged out. If a name has already been stashed, returns the same name.
 *
 * If the user later performs an action that results in temp account creation, the stashed username will be used for their account. It may also be used in previews. However, the account is not created yet, and the name is not visible to other users.
 */
export interface ApiAcquireTempUserNameParams extends ApiParams {}

/**
 * Check a username against AntiSpoof's normalisation checks.
 */
export interface AntiSpoofApiAntiSpoofParams extends ApiParams {
    /**
     * The username to check against AntiSpoof.
     */
    username?: string;
}

/**
 * Block a user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Block
 */
export interface ApiBlockParams extends ApiParams {
    /**
     * ID of the block to modify (obtained through `list=blocks`). Cannot be used together with `user`, `reblock`, or `newblock`.
     */
    id?: number;
    /**
     * User to block. Cannot be used together with `id`.
     */
    user?: string;
    /**
     * Specify `user=#`ID`` instead.
     *
     * @deprecated
     */
    userid?: number;
    /**
     * Expiry time. May be relative (e.g. `5 months` or `2 weeks`) or absolute (e.g. the current timestamp). If set to `infinite`, `indefinite`, or `never`, the block will never expire.
     *
     * Defaults to `never`.
     */
    expiry?: string;
    /**
     * Reason for block.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Block anonymous users only (i.e. disable anonymous edits for this IP address, including temporary account edits).
     */
    anononly?: boolean;
    /**
     * Prevent account creation.
     */
    nocreate?: boolean;
    /**
     * Automatically block the last used IP address, and any subsequent IP addresses they try to login from.
     */
    autoblock?: boolean;
    /**
     * Prevent user from sending email through the wiki. (Requires the `blockemail` right).
     */
    noemail?: boolean;
    /**
     * Hide the username from the block log. (Requires the `hideuser` right).
     */
    hidename?: boolean;
    /**
     * Allow the user to edit their own talk page (depends on {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgBlockAllowsUTEdit `$wgBlockAllowsUTEdit`}).
     */
    allowusertalk?: boolean;
    /**
     * If the user is already blocked by a single block, overwrite the existing block. If the user is blocked more than once, this will fail—use the `id` parameter instead to specify which block to overwrite. Cannot be used together with `id` or `newblock`.
     */
    reblock?: boolean;
    /**
     * Add another block even if the user is already blocked. Cannot be used together with `id` or `reblock`.
     */
    newblock?: boolean;
    /**
     * Watch the user's or IP address's user and talk pages.
     */
    watchuser?: boolean;
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * Change tags to apply to the entry in the block log.
     */
    tags?: string | string[];
    /**
     * Block user from specific pages or namespaces rather than the entire site.
     */
    partial?: boolean;
    /**
     * List of titles to block the user from editing. Only applies when `partial` is set to true.
     */
    pagerestrictions?: string | string[];
    /**
     * List of namespace IDs to block the user from editing. Only applies when `partial` is set to true.
     */
    namespacerestrictions?: namespace | namespace[] | "*";
    /**
     * List of actions to block the user from performing. Only applies when `partial` is set to true.
     */
    actionrestrictions?: OneOrMore<"create" | "move" | "thanks" | "upload">;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Receive a bounce email and process it to handle the failing recipient.
 *
 * @private
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:BounceHandler#API
 */
export interface BounceHandlerApiBounceHandlerParams extends ApiParams {
    /**
     * The bounced email.
     */
    email?: string;
}

/**
 * Internal module for the CategoryTree extension.
 *
 * @private
 */
export interface CategoryTreeApiCategoryTreeParams extends ApiParams {
    /**
     * Title in the category namespace, prefix will be ignored if given.
     */
    category?: string;
    /**
     * Options for the CategoryTree constructor as a JSON object. The `depth` option defaults to `1`.
     */
    options?: string;
}

/**
 * Fetch a centralauthtoken for making an authenticated request to an attached wiki.
 *
 * Returns a token that can be use to authenticate API requests on other wikis. For action API requests, put it in the `centralauthtoken` GET parameter. For REST API requests, add an `Authorization: CentralAuthToken {token}` header. In MediaWiki frontend logic, you can use the `mediawiki.ForeignApi` ResourceLoader module.
 *
 * This wiki is configured to return a JSON Web Token from this API.
 */
export interface CentralAuthApiCentralAuthTokenParams extends ApiParams {}

/**
 * Request the purge of banner content stored in the CDN (front-end) cache for anonymous users, for the requested banner and language
 */
export interface ApiCentralNoticeCdnCacheUpdateBannerParams extends ApiParams {
    /**
     * Name of the banner whose content should be purged
     */
    banner?: string;
    /**
     * Language of the banner content to purge
     */
    language?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Get data needed to choose a banner for a given project and language
 */
export interface ApiCentralNoticeChoiceDataParams extends ApiParams {
    /**
     * The project to get banner choice data for.
     */
    project?: string;
    /**
     * The language to get banner choice data for.
     */
    language?: string;
}

/**
 * Get all configuration settings for a campaign.
 */
export interface ApiCentralNoticeQueryCampaignParams extends ApiParams {
    /**
     * Campaign name. Separate multiple values with a "|" (vertical bar).
     */
    campaign?: string;
}

/**
 * Change authentication data for the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data
 */
export interface ApiChangeAuthenticationDataParams extends ApiParams {
    /**
     * Use this authentication request, by the `id` returned from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=change`.
     */
    changeauthrequest?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    changeauthtoken?: string;
}

/**
 * Change the content model of a page
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Help:ChangeContentModel
 */
export interface ApiChangeContentModelParams extends ApiParams {
    /**
     * Title of the page to change the contentmodel of. Cannot be used together with `pageid`.
     */
    title?: string;
    /**
     * Page ID of the page to change the contentmodel of. Cannot be used together with `title`.
     */
    pageid?: number;
    /**
     * Edit summary and log entry reason
     */
    summary?: string;
    /**
     * Change tags to apply to the log entry and edit.
     */
    tags?: string | string[];
    /**
     * Content model of the new content.
     */
    model?: string;
    /**
     * Mark the content model change with a bot flag.
     */
    bot?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Retrieve current count of how many unique Chart page usages there are. Multiple uses of the same chart on the same page are considered a single use.
 *
 * @private
 */
export interface ChartApiChartInfoParams extends ApiParams {
    /**
     * Set to true to include all connected wikis instead of the local wiki only.
     */
    global?: boolean;
}

/**
 * Check the validity of a token from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens `action=query&meta=tokens`}.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Checktoken
 */
export interface ApiCheckTokenParams extends ApiParams {
    /**
     * Type of token being tested.
     */
    type?:
        | "createaccount"
        | "csrf"
        | "deleteglobalaccount"
        | "login"
        | "patrol"
        | "rollback"
        | "setglobalaccountstatus"
        | "userrights"
        | "watch";
    /**
     * Token to test.
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * Maximum allowed age of the token, in seconds.
     */
    maxtokenage?: number;
}

/**
 * Reports on the correctness of a range of page ids in the search index
 *
 * @private
 */
export interface CirrusSearchApiCheckSanityParams extends ApiParams {
    /**
     * The search cluster to check indices in
     */
    cluster?: "cloudelastic" | "codfw" | "eqiad";
    /**
     * Page id to start checking at
     */
    from?: number;
    /**
     * The number of page ids to check
     *
     * Defaults to 100.
     */
    limit?: limit;
    /**
     * The number of times this set of page ids has been checked
     */
    sequenceid?: number;
    /**
     * Number of checks after which a page should be rerendered. Based off the provided sequenceid.
     *
     * Defaults to 16.
     */
    rerenderfrequency?: number;
}

/**
 * Dump of CirrusSearch configuration.
 *
 * @private
 */
export interface CirrusSearchApiConfigDumpParams extends ApiParams {
    /**
     * Type of configuration variables to dump
     *
     * Defaults to `globals`, `namespacemap`, `profiles`, and `replicagroup`.
     */
    prop?: OneOrMore<
        "expectedindices" | "globals" | "namespacemap" | "profiles" | "replicagroup" | "usertesting"
    >;
}

/**
 * Dump of CirrusSearch profiles for this wiki.
 *
 * @private
 */
export interface CirrusSearchApiProfilesDumpParams extends ApiParams {
    /**
     * Dump the profiles content
     */
    verbose?: boolean;
}

/**
 * Dump of CirrusSearch schema (settings and mappings) for this wiki.
 *
 * @private
 */
export interface CirrusSearchApiSchemaDumpParams extends ApiParams {
    /**
     * Whether to build the schema from code (true) or fetch from live cluster (false).
     */
    build?: boolean;
    /**
     * List of OpenSearch/Elasticsearch plugins available on the target cluster. Only used when build=true. If not provided, plugins will be detected from the connected cluster.
     */
    plugins?: string | string[];
}

/**
 * Clears the `hasmsg` flag for the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:ClearHasMsg
 */
export interface ApiClearHasMsgParams extends ApiParams {}

/**
 * Log in to the wiki using the interactive flow.
 *
 * The general procedure to use this module is:
 *
 * - Fetch the fields available from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=login`, and a `login` token from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens `action=query&meta=tokens`}.
 * - Present the fields to the user, and obtain their submission.
 * - Post to this module, supplying `loginreturnurl` and any relevant fields.
 * - Check the `status` in the response.
 * - If you received `PASS` or `FAIL`, you're done. The operation either succeeded or it didn't.
 * - If you received `UI`, present the new fields to the user and obtain their submission. Then post to this module with `logincontinue` and the relevant fields set, and repeat step 4.
 * - If you received `REDIRECT`, direct the user to the `redirecttarget` and wait for the return to `loginreturnurl`. Then post to this module with `logincontinue` and any fields passed to the return URL, and repeat step 4.
 * - If you received `RESTART`, that means the authentication worked but we don't have a linked user account. You might treat this as `UI` or as `FAIL`.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Login
 */
export interface ApiClientLoginParams extends ApiParams {
    /**
     * Only use these authentication requests, by the `id` returned from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=login` or from a previous response from this module.
     */
    loginrequests?: string | string[];
    /**
     * Format to use for returning messages.
     *
     * Defaults to `wikitext`.
     */
    loginmessageformat?: "html" | "none" | "raw" | "wikitext";
    /**
     * Merge field information for all authentication requests into one array.
     */
    loginmergerequestfields?: boolean;
    /**
     * Preserve state from a previous failed login attempt, if possible.
     */
    loginpreservestate?: boolean;
    /**
     * Return URL for third-party authentication flows, must be absolute. Either this or `logincontinue` is required.
     *
     * Upon receiving a `REDIRECT` response, you will typically open a browser or web view to the specified `redirecttarget` URL for a third-party authentication flow. When that completes, the third party will send the browser or web view to this URL. You should extract any query or POST parameters from the URL and pass them as a `logincontinue` request to this API module.
     */
    loginreturnurl?: string;
    /**
     * This request is a continuation after an earlier `UI` or `REDIRECT` response. Either this or `loginreturnurl` is required.
     */
    logincontinue?: boolean;
    /**
     * Instead of logging in, reauthenticate for getting temporary access to a security-sensitive operation. This must be done when already logged in, using the fields suplied by `action=query&meta=authmanagerinfo` when called with the `amireauthenticate` parameter. The value of the parameter should be the same as that of `amireauthenticate`.
     */
    loginreauthenticate?: string;
    /**
     * A "login" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    logintoken?: string;
}

/**
 * Check for validation errors in the given content
 *
 * @private
 */
export interface CodeMirrorApiCodeMirrorValidateParams extends ApiParams {
    /**
     * The text content to validate
     */
    content?: string;
    /**
     * Content model
     */
    contentmodel?: "Scribunto" | "javascript" | "sanitized-css";
    /**
     * Title of page the content belongs to.
     */
    title?: string;
}

/**
 * API module for performing various operations on a wiki user's collection.
 *
 * @private
 */
export interface CollectionApiCollectionParams extends ApiParams {
    /**
     * Submodule for performing various operations on a wiki user's collection.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Baddarticle addarticle}**: API module for adding a page to the collection
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Baddcategory addcategory}**: API module for adding pages from a given category to a user's collection.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Baddchapter addchapter}**: API module for adding a chapter to the collection
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bclearcollection clearcollection}**: API module for clearing the collection and the suggestions
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bgetbookcreatorboxcontent getbookcreatorboxcontent}**: API submodule for grabbing the box content of the user's book creator box special page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bgetcollection getcollection}**: API module for listing the current pages in a collection
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bgetpopupdata getpopupdata}**: API module to get data and HTML to construct a popup
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bpostcollection postcollection}**: API module for posting pages to a user's collection
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bremovearticle removearticle}**: API module for removing a page from the collection
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bremoveitem removeitem}**: API module for removing an item from the collection index-wise via the Special:Book page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Brenamechapter renamechapter}**: API module for renaming a chapter in the user's collection
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bsetsorting setsorting}**: API module for reordering items in a collection
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bsettitles settitles}**: API module for setting the collection's title, subtitle, and settings
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bsortitems sortitems}**: API module to sort pages in a collection alphabetically. Pages within chapters are grouped and sorted together.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bsuggestarticleaction suggestarticleaction}**: API module to interact with suggestions
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/collection%2Bsuggestundoarticleaction suggestundoarticleaction}**: API module to undo actions done from suggestarticleaction
     */
    submodule?:
        | "addarticle"
        | "addcategory"
        | "addchapter"
        | "clearcollection"
        | "getbookcreatorboxcontent"
        | "getcollection"
        | "getpopupdata"
        | "postcollection"
        | "removearticle"
        | "removeitem"
        | "renamechapter"
        | "setsorting"
        | "settitles"
        | "sortitems"
        | "suggestarticleaction"
        | "suggestundoarticleaction";
}

/**
 * Change the content of a configuration provider in Community configuration
 */
export interface CommunityConfigurationApiEditParams extends ApiParams {
    /**
     * Provider key
     */
    provider?:
        | "Babel"
        | "BlockedDomain"
        | "CampaignEvents"
        | "CommunityUpdates"
        | "ContentTranslation"
        | "GrowthHomepage"
        | "GrowthMentorList"
        | "GrowthSuggestedEdits"
        | "HelpPanel"
        | "Mentorship"
        | "ReportIncident"
        | "TemplateData-FeaturedTemplates";
    /**
     * The current content of the provider will be replaced with this one. Use JSON to serialize the new content.
     */
    content?: string;
    /**
     * Edit summary
     *
     * Defaults to an empty string.
     */
    summary?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Get the difference between two pages.
 *
 * A revision number, a page title, a page ID, text, or a relative reference for both "from" and "to" must be passed.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Compare
 */
export interface ApiComparePagesParams extends ApiParams {
    /**
     * First title to compare.
     */
    fromtitle?: string;
    /**
     * First page ID to compare.
     */
    fromid?: number;
    /**
     * First revision to compare.
     */
    fromrev?: number;
    /**
     * Override content of the revision specified by `fromtitle`, `fromid` or `fromrev`.
     *
     * This parameter specifies the slots that are to be modified. Use `fromtext-{slot}`, `fromcontentmodel-{slot}`, and `fromcontentformat-{slot}` to specify content for each slot.
     */
    fromslots?: OneOrMore<"main">;
    /**
     * Do a pre-save transform on `fromtext-{slot}`.
     */
    frompst?: boolean;
    /**
     * Specify `fromslots=main` and use `fromtext-main` instead.
     *
     * @deprecated
     */
    fromtext?: string;
    /**
     * Specify `fromslots=main` and use `fromcontentformat-main` instead.
     *
     * @deprecated
     */
    fromcontentformat?: string;
    /**
     * Specify `fromslots=main` and use `fromcontentmodel-main` instead.
     *
     * @deprecated
     */
    fromcontentmodel?: string;
    /**
     * Only use the specified section of the specified 'from' content.
     *
     * @deprecated
     */
    fromsection?: string;
    /**
     * Second title to compare.
     */
    totitle?: string;
    /**
     * Second page ID to compare.
     */
    toid?: number;
    /**
     * Second revision to compare.
     */
    torev?: number;
    /**
     * Use a revision relative to the revision determined from `fromtitle`, `fromid` or `fromrev`. All of the other 'to' options will be ignored.
     */
    torelative?: "cur" | "next" | "prev";
    /**
     * Override content of the revision specified by `totitle`, `toid` or `torev`.
     *
     * This parameter specifies the slots that are to be modified. Use `totext-{slot}`, `tocontentmodel-{slot}`, and `tocontentformat-{slot}` to specify content for each slot.
     */
    toslots?: OneOrMore<"main">;
    /**
     * Do a pre-save transform on `totext`.
     */
    topst?: boolean;
    /**
     * Specify `toslots=main` and use `totext-main` instead.
     *
     * @deprecated
     */
    totext?: string;
    /**
     * Specify `toslots=main` and use `tocontentformat-main` instead.
     *
     * @deprecated
     */
    tocontentformat?: string;
    /**
     * Specify `toslots=main` and use `tocontentmodel-main` instead.
     *
     * @deprecated
     */
    tocontentmodel?: string;
    /**
     * Only use the specified section of the specified 'to' content.
     *
     * @deprecated
     */
    tosection?: string;
    /**
     * Which pieces of information to get.
     *
     * - **diff**: The diff HTML.
     * - **diffsize**: The size of the diff HTML, in bytes.
     * - **rel**: The revision IDs of the revision previous to 'from' and after 'to', if any.
     * - **ids**: The page and revision IDs of the 'from' and 'to' revisions.
     * - **title**: The page titles of the 'from' and 'to' revisions.
     * - **user**: The username and ID of the 'from' and 'to' revisions. If the user has been revision deleted, a `fromuserhidden` or `touserhidden` property will be returned.
     * - **comment**: The comment on the 'from' and 'to' revisions. If the comment has been revision deleted, a `fromcommenthidden` or `tocommenthidden` property will be returned.
     * - **parsedcomment**: The parsed comment on the 'from' and 'to' revisions. If the comment has been revision deleted, a `fromcommenthidden` or `tocommenthidden` property will be returned.
     * - **size**: The size of the 'from' and 'to' revisions.
     * - **timestamp**: The timestamp of the 'from' and 'to' revisions.
     *
     * Defaults to `diff`, `ids`, and `title`.
     */
    prop?: OneOrMore<
        | "comment"
        | "diff"
        | "diffsize"
        | "ids"
        | "parsedcomment"
        | "rel"
        | "size"
        | "timestamp"
        | "title"
        | "user"
    >;
    /**
     * Return individual diffs for these slots, rather than one combined diff for all slots.
     */
    slots?: OneOrMore<"main"> | "*";
    /**
     * Return the comparison formatted as inline HTML.
     *
     * Defaults to `table`.
     */
    difftype?: "inline" | "table" | "unified";
}

/**
 * Create a new user account.
 *
 * The general procedure to use this module is:
 *
 * - Fetch the fields available from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=create`, and a `createaccount` token from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens `action=query&meta=tokens`}.
 * - Present the fields to the user, and obtain their submission.
 * - Post to this module, supplying `createreturnurl` and any relevant fields.
 * - Check the `status` in the response.
 * - If you received `PASS` or `FAIL`, you're done. The operation either succeeded or it didn't.
 * - If you received `UI`, present the new fields to the user and obtain their submission. Then post to this module with `createcontinue` and the relevant fields set, and repeat step 4.
 * - If you received `REDIRECT`, direct the user to the `redirecttarget` and wait for the return to `createreturnurl`. Then post to this module with `createcontinue` and any fields passed to the return URL, and repeat step 4.
 * - If you received `RESTART`, that means the authentication worked but we don't have a linked user account. You might treat this as `UI` or as `FAIL`.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Account_creation
 */
export interface ApiAMCreateAccountParams extends ApiParams {
    /**
     * Only use these authentication requests, by the `id` returned from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=create` or from a previous response from this module.
     */
    createrequests?: string | string[];
    /**
     * Format to use for returning messages.
     *
     * Defaults to `wikitext`.
     */
    createmessageformat?: "html" | "none" | "raw" | "wikitext";
    /**
     * Merge field information for all authentication requests into one array.
     */
    createmergerequestfields?: boolean;
    /**
     * Preserve state from a previous failed login attempt, if possible.
     *
     * If {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} returned true for `hasprimarypreservedstate`, requests marked as `primary-required` should be omitted. If it returned a non-empty value for `preservedusername`, that username must be used for the `username` parameter.
     */
    createpreservestate?: boolean;
    /**
     * Return URL for third-party authentication flows, must be absolute. Either this or `createcontinue` is required.
     *
     * Upon receiving a `REDIRECT` response, you will typically open a browser or web view to the specified `redirecttarget` URL for a third-party authentication flow. When that completes, the third party will send the browser or web view to this URL. You should extract any query or POST parameters from the URL and pass them as a `createcontinue` request to this API module.
     */
    createreturnurl?: string;
    /**
     * This request is a continuation after an earlier `UI` or `REDIRECT` response. Either this or `createreturnurl` is required.
     */
    createcontinue?: boolean;
    /**
     * A "createaccount" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    createtoken?: string;
}

/**
 * Forcibly create a local account. The central account must exist.
 */
export interface CentralAuthApiCreateLocalAccountParams extends ApiParams {
    /**
     * User to create the local account for.
     */
    username?: string;
    /**
     * Reason for creating the local account.
     */
    reason?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Used by browsers to report violations of the Content Security Policy. This module should never be used, except when used automatically by a CSP compliant web browser.
 *
 * @private
 */
export interface ApiCSPReportParams extends ApiParams {
    /**
     * Mark as being a report from a monitoring policy, not an enforced policy
     */
    reportonly?: boolean;
    /**
     * What generated the CSP header that triggered this report
     *
     * Defaults to `internal`.
     */
    source?: string;
}

/**
 * Check if any fast, unreviewed translation has been published recently for the current user.
 *
 * @private
 */
export interface ContentTranslationActionApiContentTranslationUnreviewedCheckParams
    extends ApiParams {}

/**
 * Delete a draft translation created using the Content Translation extension.
 */
export interface ContentTranslationActionApiContentTranslationDeleteParams extends ApiParams {
    /**
     * The source language code.
     */
    from?: string;
    /**
     * The target language code.
     */
    to?: string;
    /**
     * The title of the source page.
     */
    sourcetitle?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Add or remove a favorite suggestion to the current user's list.
 *
 * @private
 */
export interface ContentTranslationActionApiContentTranslationFavoriteSuggestionsParams
    extends ApiParams {
    /**
     * Action to be performed on the given favorite suggestion title. Available options: 'add' and 'remove'
     */
    listaction?: "add" | "remove";
    /**
     * The title of the favorite suggestion on which the action should be performed
     */
    title?: string;
    /**
     * The source language of the favorite suggestion on which the action should be performed
     */
    from?: string;
    /**
     * The target language of the favorite suggestion on which the action should be performed
     */
    to?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Save a page created using the Content Translation extension.
 *
 * @private
 */
export interface ContentTranslationActionApiContentTranslationPublishParams extends ApiParams {
    /**
     * The title of the page to perform actions on.
     */
    title?: string;
    /**
     * The content to save.
     */
    html?: string;
    /**
     * The source language code.
     */
    from?: string;
    /**
     * The target language code.
     */
    to?: string;
    /**
     * The title of the source page.
     */
    sourcetitle?: string;
    /**
     * The categories to put the published page in.
     */
    categories?: string;
    /**
     * The edit tags to add to the published page.
     */
    publishtags?: string | string[];
    /**
     * Captcha ID (when saving with a captcha response).
     */
    wpCaptchaId?: string;
    /**
     * Answer to the captcha (when saving with a captcha response).
     */
    wpCaptchaWord?: string;
    /**
     * Version of the editor used to publish the translation.
     */
    cxversion?: number;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Save a section created using the Content Translation extension's section translation feature.
 *
 * @private
 */
export interface ContentTranslationActionApiSectionTranslationPublishParams extends ApiParams {
    /**
     * The title of the page to perform actions on.
     */
    title?: string;
    /**
     * The content to save.
     */
    html?: string;
    /**
     * The source language code.
     */
    sourcelanguage?: string;
    /**
     * The target language code.
     */
    targetlanguage?: string;
    /**
     * The title of the source page.
     */
    sourcetitle?: string;
    /**
     * The source page revision id.
     */
    sourcerevid?: string;
    /**
     * The title of the source section.
     */
    sourcesectiontitle?: string;
    /**
     * The title of the target section.
     */
    targetsectiontitle?: string;
    /**
     * The section translation id associated with the draft section translation.
     */
    sectiontranslationid?: number;
    /**
     * The publishing target of the section translation. Possible values: 'SANDBOX', 'NEW_SECTION', 'EXPAND' and 'REPLACE'.
     */
    publishtarget?: "EXPAND" | "NEW_SECTION" | "REPLACE" | "SANDBOX";
    /**
     * The title of the existing section that is going to be expanded.
     */
    existingsectiontitle?: string;
    /**
     * Captcha ID (when saving with a captcha response).
     */
    captchaid?: string;
    /**
     * Answer to the captcha (when saving with a captcha response).
     */
    captchaword?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * This module allows to save draft translations by section to save bandwidth and to collect parallel corpora.
 *
 * @private
 */
export interface ContentTranslationActionApiContentTranslationSaveParams extends ApiParams {
    /**
     * The source language code.
     */
    from?: string;
    /**
     * The target language code.
     */
    to?: string;
    /**
     * The title of the source page.
     */
    sourcetitle?: string;
    /**
     * The title of the page to perform actions on.
     */
    title?: string;
    /**
     * JSON-encoded section data. Each section is an object and has the following keys: content, sectionId, sequenceId, sequenceId, origin
     */
    content?: string;
    /**
     * The revision of the source page.
     */
    sourcerevision?: number;
    /**
     * Information about translation completion (progress). JSON with the keys `any`, `human`, `mt` and `mtSectionsCount`. The keys' values are percentages.
     */
    progress?: string;
    /**
     * Version of the editor used to create the draft translation.
     */
    cxversion?: number;
    /**
     * JSON encoded array of source categories to be saved with draft translation.
     */
    sourcecategories?: string;
    /**
     * JSON encoded array of target categories to be saved with draft translation.
     */
    targetcategories?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Create and save a section translation to database, for every translated section of the given article translation
 *
 * @private
 */
export interface ContentTranslationActionApiContentTranslationSplitParams extends ApiParams {
    /**
     * The id of the translation, for which the section translations will be created.
     */
    translationid?: number;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Get JWT tokens to authenticate with cxserver.
 */
export interface ContentTranslationActionApiContentTranslationTokenParams extends ApiParams {
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Delete a page.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Delete
 */
export interface ApiDeleteParams extends ApiParams {
    /**
     * Title of the page to delete. Cannot be used together with `pageid`.
     */
    title?: string;
    /**
     * Page ID of the page to delete. Cannot be used together with `title`.
     */
    pageid?: number;
    /**
     * Reason for the deletion. If not set, an automatically generated reason will be used.
     */
    reason?: string;
    /**
     * Change tags to apply to the entry in the deletion log.
     */
    tags?: string | string[];
    /**
     * Delete the talk page, if it exists.
     */
    deletetalk?: boolean;
    /**
     * Add the page to the current user's watchlist.
     *
     * @deprecated
     */
    watch?: boolean;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     *
     * Defaults to `preferences`.
     */
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * Remove the page from the current user's watchlist.
     *
     * @deprecated
     */
    unwatch?: boolean;
    /**
     * The name of the old image to delete as provided by {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageinfo action=query&prop=imageinfo&iiprop=archivename}.
     */
    oldimage?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Delete a global user.
 */
export interface CentralAuthApiDeleteGlobalAccountParams extends ApiParams {
    /**
     * User to delete.
     */
    user?: string;
    /**
     * Reason for deleting the user.
     */
    reason?: string;
    /**
     * A "deleteglobalaccount" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Get information about comment changes between two page revisions.
 *
 * @private
 */
export interface DiscussionToolsApiDiscussionToolsCompareParams extends ApiParams {
    /**
     * First title to compare.
     */
    fromtitle?: string;
    /**
     * First revision to compare.
     */
    fromrev?: number;
    /**
     * Second title to compare.
     */
    totitle?: string;
    /**
     * Second revision to compare.
     */
    torev?: number;
}

/**
 * Post a message on a discussion page.
 */
export interface DiscussionToolsApiDiscussionToolsEditParams extends ApiParams {
    /**
     * Action to perform.
     *
     * - **addcomment**: Add a new comment as a reply to an existing comment.
     * - **addtopic**: Add a new discussion section and the first comment in it.
     */
    paction?: "addcomment" | "addtopic";
    /**
     * The page to perform actions on.
     */
    page?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * An optional unique ID generated in the client to prevent double-posting.
     */
    formtoken?: string;
    /**
     * Name of the comment to reply to. Only used when `paction` is `addcomment`.
     */
    commentname?: string;
    /**
     * ID of the comment to reply to. Only used when `paction` is `addcomment`. Overrides `commentname`.
     */
    commentid?: string;
    /**
     * Content to post, as wikitext. Cannot be used together with `html`.
     */
    wikitext?: string;
    /**
     * Content to post, as HTML. Cannot be used together with `wikitext`.
     */
    html?: string;
    /**
     * Edit summary.
     */
    summary?: string;
    /**
     * The title for a new section when using `$1section=new`. Only used when `paction` is `addtopic`.
     */
    sectiontitle?: string;
    /**
     * Allow posting a new section without a title.
     */
    allownosectiontitle?: boolean;
    /**
     * Apply the selected skin to the parser output. May affect the following properties: `text`, `langlinks`, `headitems`, `modules`, `jsconfigvars`, `indicators`.
     */
    useskin?:
        | "apioutput"
        | "authentication-popup"
        | "cologneblue"
        | "contenttranslation"
        | "fallback"
        | "json"
        | "minerva"
        | "modern"
        | "monobook"
        | "timeless"
        | "vector"
        | "vector-2022";
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     */
    watchlist?: string;
    /**
     * Captcha ID (when saving with a captcha response).
     */
    captchaid?: string;
    /**
     * Answer to the captcha (when saving with a captcha response).
     */
    captchaword?: string;
    /**
     * Omit the HTML content of the new revision in the response.
     */
    nocontent?: string;
    /**
     * Change tags to apply to the edit.
     */
    tags?: string | string[];
    /**
     * Page title. If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to the given page, instead of the page that was edited.
     */
    returnto?: string;
    /**
     * URL query parameters (with leading `?`). If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to a page with the given query parameters.
     *
     * Defaults to an empty string.
     */
    returntoquery?: string;
    /**
     * URL fragment (with leading `#`). If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to a page with the given fragment.
     *
     * Defaults to an empty string.
     */
    returntoanchor?: string;
    /**
     * Return parse output in a format suitable for mobile devices.
     */
    mobileformat?: boolean;
}

/**
 * Find a comment by its ID or name.
 */
export interface DiscussionToolsApiDiscussionToolsFindCommentParams extends ApiParams {
    /**
     * Comment ID or name
     */
    idorname?: string;
    /**
     * Heading hash fragment
     */
    heading?: string;
    /**
     * Page that the heading hash fragment once existed on
     */
    page?: string;
}

/**
 * Get the subscription statuses of given topics.
 */
export interface DiscussionToolsApiDiscussionToolsGetSubscriptionsParams extends ApiParams {
    /**
     * Names of the topics to check
     */
    commentname?: string | string[];
}

/**
 * Returns metadata required to initialize the discussion tools.
 *
 * @private
 */
export interface DiscussionToolsApiDiscussionToolsPageInfoParams extends ApiParams {
    /**
     * The page to perform actions on.
     */
    page?: string;
    /**
     * The revision number to use (defaults to latest revision).
     */
    oldid?: number;
    /**
     * Which properties to get:
     *
     * - **transcludedfrom**: Which other pages comments have been transcluded from
     * - **threaditemshtml**: Representation of the comment threads parsed from the page
     *
     * Defaults to `transcludedfrom`.
     */
    prop?: OneOrMore<"threaditemshtml" | "transcludedfrom">;
    /**
     * Flags to alter the output when using `prop=threaditemshtml`.
     *
     * - **noreplies**: Don't include the full reply tree, just provide the top-level headings (when using `prop=threaditemshtml`).
     * - **activity**: Include extra activity data about the oldest and latest replies (when using `prop=threaditemshtml`).
     * - **excludesignatures**: Exclude user signatures from the comments (when using `prop=threaditemshtml`).
     */
    threaditemsflags?: OneOrMore<"activity" | "excludesignatures" | "noreplies">;
    /**
     * Exclude user signatures from the comments (when using `prop=threaditemshtml`).
     *
     * @deprecated
     */
    excludesignatures?: string;
}

/**
 * Preview a message on a discussion page.
 *
 * @private
 */
export interface DiscussionToolsApiDiscussionToolsPreviewParams extends ApiParams {
    /**
     * Type of message to preview
     *
     * - **reply**: Add a new comment as a reply to an existing comment.
     * - **topic**: Add a new discussion section and the first comment in it.
     */
    type?: "reply" | "topic";
    /**
     * The page to perform actions on.
     */
    page?: string;
    /**
     * Content to preview, as wikitext.
     */
    wikitext?: string;
    /**
     * The title for a new section when using `section=new`.
     */
    sectiontitle?: string;
    /**
     * Apply the selected skin to the parser output. May affect the following properties: `text`, `langlinks`, `headitems`, `modules`, `jsconfigvars`, `indicators`.
     */
    useskin?:
        | "apioutput"
        | "authentication-popup"
        | "cologneblue"
        | "contenttranslation"
        | "fallback"
        | "json"
        | "minerva"
        | "modern"
        | "monobook"
        | "timeless"
        | "vector"
        | "vector-2022";
    /**
     * Return parse output in a format suitable for mobile devices.
     */
    mobileformat?: boolean;
}

/**
 * Subscribe (or unsubscribe) to receive notifications about a topic.
 */
export interface DiscussionToolsApiDiscussionToolsSubscribeParams extends ApiParams {
    /**
     * A page on which the topic appears
     */
    page?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * Name of the topic to subscribe to (or unsubscribe from)
     */
    commentname?: string;
    /**
     * True to subscribe, false to unsubscribe
     */
    subscribe?: boolean;
}

/**
 * Send a public thank-you notification for a comment.
 */
export interface DiscussionToolsApiDiscussionToolsThankParams extends ApiParams {
    /**
     * The page to perform actions on.
     */
    page?: string;
    /**
     * ID of the comment to thank.
     */
    commentid?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Manually trigger a notification to a user
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
 */
export interface NotificationsApiEchoCreateEventParams extends ApiParams {
    /**
     * User to send the notification to
     */
    user?: string;
    /**
     * Header content of the notification
     */
    header?: string;
    /**
     * Body content of the notification
     */
    content?: string;
    /**
     * Page to link to in the notification
     */
    page?: string;
    /**
     * Section where notification would be delivered
     *
     * Defaults to `notice`.
     */
    section?: "alert" | "notice";
    /**
     * Whether to send an email as well
     */
    email?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Mark notifications as read for the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
 */
export interface NotificationsApiEchoMarkReadParams extends ApiParams {
    /**
     * List of wikis to mark notification as read (defaults to only current wiki).
     *
     * Defaults to `enwiki`.
     */
    wikis?: string | string[];
    /**
     * A list of notification IDs to mark as read.
     */
    list?: string | string[];
    /**
     * A list of notification IDs to mark as unread.
     */
    unreadlist?: string | string[];
    /**
     * If set, marks all of a user's notifications as read.
     */
    all?: boolean;
    /**
     * A list of sections to mark as read.
     */
    sections?: OneOrMore<"alert" | "message">;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Mark notifications as seen for the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
 */
export interface NotificationsApiEchoMarkSeenParams extends ApiParams {
    /**
     * Type of notifications to mark as seen: 'alert', 'message' or 'all'.
     */
    type?: "alert" | "all" | "message";
    /**
     * Timestamp format to use for output, 'ISO_8601' or 'MW'. 'MW' is deprecated here, so all clients should switch to 'ISO_8601'. This parameter will be removed, and 'ISO_8601' will become the only output format.
     *
     * Defaults to `MW`.
     */
    timestampFormat?: "ISO_8601" | "MW";
}

/**
 * Mute or unmute notifications from certain users or pages.
 */
export interface NotificationsApiEchoMuteParams extends ApiParams {
    /**
     * Which mute list to add to or remove from
     */
    type?: "page-linked-title" | "user";
    /**
     * Pages or users to add to the mute list
     */
    mute?: string | string[];
    /**
     * Pages or users to remove from the mute list
     */
    unmute?: string | string[];
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Manage push subscriptions for the current user.
 *
 * @private
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:Echo#API
 */
export interface NotificationsPushApiEchoPushSubscriptionsParams extends ApiParams {
    /**
     * Action to perform.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/echopushsubscriptions%2Bcreate create}**: Internal. Register push subscriptions for the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/echopushsubscriptions%2Bdelete delete}**: Internal. Unregister push subscriptions for the current user or another specified user.
     */
    command?: "create" | "delete";
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Create and edit pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Edit
 */
export interface ApiEditPageParams extends ApiParams {
    /**
     * Title of the page to edit. Cannot be used together with `pageid`.
     */
    title?: string;
    /**
     * Page ID of the page to edit. Cannot be used together with `title`.
     */
    pageid?: number;
    /**
     * Section identifier. `0` for the top section, `new` for a new section. Often a positive integer, but can also be non-numeric.
     */
    section?: string;
    /**
     * The title for a new section when using `section=new`.
     */
    sectiontitle?: string;
    /**
     * Page content.
     */
    text?: string;
    /**
     * Edit summary.
     *
     * When this parameter is not provided or empty, {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Autosummary an edit summary may be generated automatically}.
     *
     * When using `section=new` and `sectiontitle` is not provided, the value of this parameter is used for the section title instead, and an edit summary is generated automatically.
     */
    summary?: string;
    /**
     * Change tags to apply to the revision.
     */
    tags?: string | string[];
    /**
     * Mark this edit as a minor edit.
     */
    minor?: boolean;
    /**
     * Do not mark this edit as a minor edit even if the "Mark all edits minor by default" user preference is set.
     */
    notminor?: boolean;
    /**
     * Mark this edit as a bot edit.
     */
    bot?: boolean;
    /**
     * ID of the base revision, used to detect edit conflicts. May be obtained through {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brevisions action=query&prop=revisions}. Self-conflicts cause the edit to fail unless basetimestamp is set.
     */
    baserevid?: number;
    /**
     * Timestamp of the base revision, used to detect edit conflicts. May be obtained through {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brevisions action=query&prop=revisions&rvprop=timestamp}. Self-conflicts are ignored.
     */
    basetimestamp?: timestamp;
    /**
     * Timestamp when the editing process began, used to detect edit conflicts. An appropriate value may be obtained using {@link https://www.mediawiki.org/wiki/Special:ApiHelp/main `curtimestamp`} when beginning the edit process (e.g. when loading the page content to edit).
     */
    starttimestamp?: timestamp;
    /**
     * Override any errors about the page having been deleted in the meantime.
     */
    recreate?: boolean;
    /**
     * Don't edit the page if it already exists.
     */
    createonly?: boolean;
    /**
     * Throw an error if the page doesn't exist.
     */
    nocreate?: boolean;
    /**
     * Add the page to the current user's watchlist.
     *
     * @deprecated
     */
    watch?: boolean;
    /**
     * Remove the page from the current user's watchlist.
     *
     * @deprecated
     */
    unwatch?: boolean;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     *
     * Defaults to `preferences`.
     */
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * The MD5 hash of the text parameter, or the prependtext and appendtext parameters concatenated. If set, the edit won't be done unless the hash is correct.
     */
    md5?: string;
    /**
     * Add this text to the beginning of the page or section. Overrides text.
     */
    prependtext?: string;
    /**
     * Add this text to the end of the page or section. Overrides text.
     *
     * Use section=new to append a new section, rather than this parameter.
     */
    appendtext?: string;
    /**
     * Undo this revision. Overrides text, prependtext and appendtext.
     */
    undo?: number;
    /**
     * Undo all revisions from undo to this one. If not set, just undo one revision.
     */
    undoafter?: number;
    /**
     * Automatically resolve redirects.
     */
    redirect?: boolean;
    /**
     * Content serialization format used for the input text.
     */
    contentformat?: string;
    /**
     * Content model of the new content.
     */
    contentmodel?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * The token should always be sent as the last parameter, or at least after the text parameter.
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * Page title. If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to the given page, instead of the page that was edited.
     */
    returnto?: string;
    /**
     * URL query parameters (with leading `?`). If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to a page with the given query parameters.
     *
     * Defaults to an empty string.
     */
    returntoquery?: string;
    /**
     * URL fragment (with leading `#`). If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to a page with the given fragment.
     *
     * Defaults to an empty string.
     */
    returntoanchor?: string;
    /**
     * Answer to the CAPTCHA
     */
    captchaword?: string;
    /**
     * CAPTCHA ID from previous request
     */
    captchaid?: string;
    /**
     * Whether the shown hCaptcha CAPTCHA was force shown, such as by an AbuseFilter extension consequence (and so used a more restrictive sitekey). Set this if the JS configuration variable with the same name is true or if the first attempt to use this API returned a 'forcecaptcha' error with a specified sitekey.
     */
    wgConfirmEditForceShowCaptcha?: boolean;
    /**
     * Name of the editor interface used (such as MobileFrontend-SourceEditor)
     */
    editorinterface?: string;
    /**
     * Automatically subscribe the user to any new talk page threads created by the edit. Use 'yes' or 'no' to override a user's preference (the default).
     *
     * Defaults to `preferences`.
     */
    discussiontoolsautosubscribe?: "no" | "preferences" | "yes";
}

/**
 * Check the status of a URL for use as a reference.
 *
 * @private
 */
export interface VisualEditorEditCheckApiEditCheckReferenceUrlParams extends ApiParams {
    /**
     * URL to check.
     */
    url?: string;
}

/**
 * Edit a mass message delivery list.
 *
 * @see https://www.mediawiki.org/wiki/Extension:MassMessage/API
 */
export interface MassMessageApiEditMassMessageListParams extends ApiParams {
    /**
     * Title of the delivery list to update.
     */
    spamlist?: string;
    /**
     * New description for the delivery list.
     */
    description?: string;
    /**
     * Titles to add to the list.
     */
    add?: string | string[];
    /**
     * Titles to remove from the list.
     */
    remove?: string | string[];
    /**
     * Whether the edit should be marked as minor in the history of the list.
     */
    minor?: boolean;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     *
     * Defaults to `preferences`.
     */
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Email a user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Email
 */
export interface ApiEmailUserParams extends ApiParams {
    /**
     * User to send the email to.
     */
    target?: string;
    /**
     * Subject header.
     */
    subject?: string;
    /**
     * Email body.
     */
    text?: string;
    /**
     * Send a copy of this mail to me.
     */
    ccme?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Expands all templates within wikitext.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Expandtemplates
 */
export interface ApiExpandTemplatesParams extends ApiParams {
    /**
     * Title of the page.
     */
    title?: string;
    /**
     * Wikitext to convert.
     */
    text?: string;
    /**
     * Revision ID, for `{{REVISIONID}}` and similar variables.
     */
    revid?: number;
    /**
     * Which pieces of information to get.
     *
     * Note that if no values are selected, the result will contain the wikitext, but the output will be in a deprecated format.
     *
     * - **wikitext**: The expanded wikitext.
     * - **categories**: Any categories present in the input that are not represented in the wikitext output.
     * - **properties**: Page properties defined by expanded magic words in the wikitext.
     * - **volatile**: Whether the output is volatile and should not be reused elsewhere within the page.
     * - **ttl**: The maximum time after which caches of the result should be invalidated.
     * - **modules**: Any ResourceLoader modules that parser functions have requested be added to the output. Either `jsconfigvars` or `encodedjsconfigvars` must be requested jointly with `modules`.
     * - **jsconfigvars**: Gives the JavaScript configuration variables specific to the page.
     * - **encodedjsconfigvars**: Gives the JavaScript configuration variables specific to the page as a JSON string.
     * - **parsetree**: The XML parse tree of the input.
     */
    prop?: OneOrMore<
        | "categories"
        | "encodedjsconfigvars"
        | "jsconfigvars"
        | "modules"
        | "parsetree"
        | "properties"
        | "ttl"
        | "volatile"
        | "wikitext"
    >;
    /**
     * Whether to include HTML comments in the output.
     */
    includecomments?: boolean;
    /**
     * Whether to include internal merge strategy information in jsconfigvars.
     */
    showstrategykeys?: boolean;
    /**
     * Generate XML parse tree (replaced by prop=parsetree).
     *
     * @deprecated
     */
    generatexml?: boolean;
    /**
     * Template sandbox prefix, as with {@link https://www.mediawiki.org/wiki/Special:TemplateSandbox Special:TemplateSandbox}.
     */
    templatesandboxprefix?: string | string[];
    /**
     * Parse the page using `templatesandboxtext` in place of the contents of the page named here.
     */
    templatesandboxtitle?: string;
    /**
     * Parse the page using this page content in place of the page named by `templatesandboxtitle`.
     */
    templatesandboxtext?: string;
    /**
     * Content model of `templatesandboxtext`.
     */
    templatesandboxcontentmodel?: string;
    /**
     * Content format of `templatesandboxtext`.
     */
    templatesandboxcontentformat?: string;
}

/**
 * Get a new FancyCaptcha.
 *
 * @private
 */
export interface ConfirmEditFancyCaptchaApiFancyCaptchaReloadParams extends ApiParams {}

/**
 * Returns a featured content feed.
 */
export interface FeaturedFeedsApiFeaturedFeedsParams extends ApiParams {
    /**
     * The format of the feed.
     *
     * Defaults to `rss`.
     */
    feedformat?: "atom" | "rss";
    /**
     * Feed name.
     */
    feed?: "featured" | "onthisday" | "potd";
    /**
     * Feed language code. Ignored by some feeds.
     */
    language?: string;
}

/**
 * Returns a user's contributions feed.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Feedcontributions
 */
export interface ApiFeedContributionsParams extends ApiParams {
    /**
     * The format of the feed.
     *
     * Defaults to `rss`.
     */
    feedformat?: "atom" | "rss";
    /**
     * What users to get the contributions for.
     */
    user?: string;
    /**
     * Which namespace to filter the contributions by.
     */
    namespace?: namespace;
    /**
     * From year (and earlier).
     */
    year?: number;
    /**
     * From month (and earlier).
     */
    month?: number;
    /**
     * Filter contributions that have these tags.
     *
     * Defaults to an empty string.
     */
    tagfilter?: string | string[];
    /**
     * Show only deleted contributions.
     */
    deletedonly?: boolean;
    /**
     * Only show edits that are the latest revisions.
     */
    toponly?: boolean;
    /**
     * Only show edits that are page creations.
     */
    newonly?: boolean;
    /**
     * Hide minor edits.
     */
    hideminor?: boolean;
    /**
     * Disabled due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}.
     */
    showsizediff?: boolean;
}

/**
 * Returns a recent changes feed.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Feedrecentchanges
 */
export interface ApiFeedRecentChangesParams extends ApiParams {
    /**
     * The format of the feed.
     *
     * Defaults to `rss`.
     */
    feedformat?: "atom" | "rss";
    /**
     * Namespace to limit the results to.
     */
    namespace?: namespace;
    /**
     * All namespaces but the selected one.
     */
    invert?: boolean;
    /**
     * Include associated (talk or main) namespace.
     */
    associated?: boolean;
    /**
     * Days to limit the results to.
     *
     * Defaults to 7.
     */
    days?: number;
    /**
     * Maximum number of results to return.
     *
     * Defaults to 50.
     */
    limit?: number;
    /**
     * Show changes since then.
     */
    from?: timestamp;
    /**
     * Hide minor changes.
     */
    hideminor?: boolean;
    /**
     * Hide changes made by bots.
     */
    hidebots?: boolean;
    /**
     * Hide changes made by anonymous users and temporary accounts.
     */
    hideanons?: boolean;
    /**
     * Hide changes made by registered users.
     */
    hideliu?: boolean;
    /**
     * Hide patrolled changes.
     */
    hidepatrolled?: boolean;
    /**
     * Hide changes made by the current user.
     */
    hidemyself?: boolean;
    /**
     * Hide category membership changes.
     */
    hidecategorization?: boolean;
    /**
     * Filter by tag.
     */
    tagfilter?: string;
    /**
     * All edits except ones tagged with the selected ones.
     */
    inverttags?: boolean;
    /**
     * Show only changes on pages linked from this page.
     */
    target?: string;
    /**
     * Show changes on pages linked to the selected page instead.
     */
    showlinkedto?: boolean;
}

/**
 * Returns a watchlist feed.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist_feed
 */
export interface ApiFeedWatchlistParams extends ApiParams {
    /**
     * The format of the feed.
     *
     * Defaults to `rss`.
     */
    feedformat?: "atom" | "rss";
    /**
     * List pages modified within this many hours from now.
     *
     * Defaults to 24.
     */
    hours?: number;
    /**
     * Link directly to changed sections if possible.
     */
    linktosections?: boolean;
    /**
     * Include multiple revisions of the same page within given timeframe.
     */
    allrev?: boolean;
    /**
     * Used along with token to access a different user's watchlist.
     */
    wlowner?: string;
    /**
     * A security token (available in the user's {@link https://www.mediawiki.org/wiki/Special:Preferences#mw-prefsection-watchlist preferences}) to allow access to another user's watchlist.
     *
     * Sensitive parameter.
     */
    wltoken?: string;
    /**
     * Show only items that meet these criteria. For example, to see only minor edits done by logged-in users, set show=minor|!anon.
     */
    wlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "patrolled"
        | "unread"
    >;
    /**
     * Which types of changes to show:
     *
     * - **edit**: Regular page edits.
     * - **new**: Page creations.
     * - **log**: Log entries.
     * - **external**: External changes.
     * - **categorize**: Category membership changes.
     *
     * Defaults to `edit`, `new`, `log`, and `categorize`.
     */
    wltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    /**
     * Don't list changes by this user.
     */
    wlexcludeuser?: string;
}

/**
 * Revert a file to an old version.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filerevert
 */
export interface ApiFileRevertParams extends ApiParams {
    /**
     * Target filename, without the File: prefix.
     */
    filename?: string;
    /**
     * Upload comment.
     *
     * Defaults to an empty string.
     */
    comment?: string;
    /**
     * Archive name of the revision to revert to.
     */
    archivename?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Get basic information about review flag configuration for this site.
 *
 * The following parameters are returned for each tag:
 *
 * - **name**: The key name of this tag.
 * - **levels**: Number of levels the tag has (above "not tagged").
 * Flagged revisions have an assigned level for each tag. The highest tier that all the tags meet is the review tier of the entire revision.
 */
export interface ApiFlagConfigParams extends ApiParams {}

/**
 * Globally block or unblock a user.
 */
export interface GlobalBlockingApiGlobalBlockParams extends ApiParams {
    /**
     * ID of the global block to modify or unblock (obtained through `list=globalblocks`). Cannot be used together with `target`.
     */
    "id"?: number;
    /**
     * The target IP address or username. Cannot be used together with `id`.
     */
    "target"?: string;
    /**
     * If specified, will block or reblock the user. Determines how long the block will last for, e.g. "5 months" or "2 weeks". If set to "infinite" or "indefinite" the block will never expire.
     */
    "expiry"?: expiry;
    /**
     * If specified, will unblock the user.
     */
    "unblock"?: boolean;
    /**
     * The reason for blocking/unblocking.
     */
    "reason"?: string;
    /**
     * Specify this if the block should only affect logged-out users globally.
     */
    "anononly"?: boolean;
    /**
     * Specify this if the global block should not prevent account creation.
     */
    "allow-account-creation"?: boolean;
    /**
     * Specify this if the global block should trigger global autoblocks.
     */
    "enable-autoblock"?: boolean;
    /**
     * Specify this if the global block should prevent the user from sending email.
     */
    "block-email"?: boolean;
    /**
     * Specify this if the existing block on the target should be modified
     */
    "modify"?: boolean;
    /**
     * Block the user locally as well. Cannot be used together with `id`.
     */
    "alsolocal"?: boolean;
    /**
     * Revoke talk page access locally. Cannot be used together with `id`.
     */
    "localblockstalk"?: boolean;
    /**
     * Revoke email access locally. Cannot be used together with `id`.
     */
    "localblocksemail"?: boolean;
    /**
     * Specify this if the block should only affect logged-out users locally. Cannot be used together with `id`.
     */
    "localanononly"?: boolean;
    /**
     * Specify this if the local block should not prevent account creation. Cannot be used together with `id`.
     */
    "local-allow-account-creation"?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    "token"?: string;
}

/**
 * Change local overrides for global preferences for the current user.
 *
 * Global values for affected preferences will be ignored.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GlobalPreferences/API
 */
export interface GlobalPreferencesApiGlobalPreferenceOverridesParams extends ApiParams {
    /**
     * Reset local overrides. Removes all, or, depending on the value of the `resetkinds` parameter, some types of local overrides and makes them global again.
     */
    reset?: boolean;
    /**
     * List of types of overrides to reset when the `reset` option is set.
     *
     * Defaults to `all`.
     */
    resetkinds?: OneOrMore<
        | "all"
        | "local-exception"
        | "registered"
        | "registered-checkmatrix"
        | "registered-multiselect"
        | "special"
        | "unused"
        | "userjs"
    >;
    /**
     * List of changes, formatted name=value (e.g. skin=vector). If no value is given (not even an equals sign), e.g., preferencename|otherpreference|..., the override will be removed. If any value passed contains the pipe character (`|`), use the {@link https://www.mediawiki.org/wiki/Special:ApiHelp/main#main/datatypes alternative multiple-value separator} for correct operation.
     */
    change?: string | string[];
    /**
     * The name of the override that should be set to the value given by `optionvalue`.
     */
    optionname?: string;
    /**
     * The value for the override specified by `optionname`.
     */
    optionvalue?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Change global preferences of the current user.
 *
 * Only preferences registered for the current wiki can be changed locally.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Globalpreferences
 */
export interface GlobalPreferencesApiGlobalPreferencesParams extends ApiParams {
    /**
     * Reset global preferences. Removes all, or, depending on the value of the `resetkinds` parameter, some types of global preferences and make them not global anymore.
     */
    reset?: boolean;
    /**
     * List of types of preferences to reset when the `reset` option is set.
     *
     * Defaults to `all`.
     */
    resetkinds?: OneOrMore<
        | "all"
        | "local-exception"
        | "registered"
        | "registered-checkmatrix"
        | "registered-multiselect"
        | "special"
        | "unused"
        | "userjs"
    >;
    /**
     * List of changes, formatted name=value (e.g. skin=vector). If no value is given (not even an equals sign), e.g., preferencename|otherpreference|..., the preference will be made non-global. If any value passed contains the pipe character (`|`), use the {@link https://www.mediawiki.org/wiki/Special:ApiHelp/main#main/datatypes alternative multiple-value separator} for correct operation.
     */
    change?: string | string[];
    /**
     * The name of the preference that should be set to the value given by `optionvalue`.
     */
    optionname?: string;
    /**
     * The value for the preference specified by `optionname`.
     */
    optionvalue?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Add/remove a user to/from global groups.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:User_group_membership
 */
export interface CentralAuthApiGlobalUserRightsParams extends ApiParams {
    /**
     * Global username.
     */
    user?: string;
    /**
     * Global user ID.
     *
     * @deprecated
     */
    userid?: number;
    /**
     * Add the user to these global groups.
     */
    add?: string | string[];
    /**
     * Expiry timestamps. May be relative (e.g. `5 months` or `2 weeks`) or absolute (e.g. the current timestamp). If only one timestamp is set, it will be used for all groups passed to the `add` parameter. Use `infinite`, `indefinite`, `infinity`, or `never` for a never-expiring user group.
     *
     * Defaults to `infinite`.
     */
    expiry?: string | string[];
    /**
     * Remove the user from these global groups.
     */
    remove?: string | string[];
    /**
     * Reason for the change.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * A "userrights" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * For compatibility, the token used in the web UI is also accepted.
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * This parameter is currently unused.
     */
    tags?: string | string[];
}

/**
 * Invalidate an image recommendation.
 *
 * Calling this API will:
 *
 * - Reset the {@link https://www.mediawiki.org/wiki/wikitech:Add_Image "hasrecommendation:image" weighted tag} for the article, so the article is no longer returned in search results for image suggestions.
 * - Add the article to a short-lived cache, which the {@link https://www.mediawiki.org/wiki/Extension:GrowthExperiments GrowthExperiments} extension's ImageRecommendationFilter consults to decide if the article should be excluded from the user's suggested edits queue when accessed on {@link https://www.mediawiki.org/wiki/Special:Homepage Special:Homepage} or via the {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthtasks action=query&list=growthtasks} API.
 * - Generate and send an event to EventGate to the {@link https://schema.wikimedia.org/#!/secondary/jsonschema/mediawiki/page/image-suggestions-feedback image-suggestion-feedback stream}. This allows improvements in the image suggestion pipeline, as the code in the pipeline can account for user feedback when generating recommendations.
 * Further reading: {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Growth/Personalized_first_day/Structured_tasks/Add_an_image mediawiki.org}
 *
 * @private
 */
export interface GrowthExperimentsApiInvalidateImageRecommendationParams extends ApiParams {
    /**
     * Task type (top-level or section-level)
     *
     * Defaults to `image-recommendation`.
     */
    tasktype?: "image-recommendation" | "section-image-recommendation";
    /**
     * Title of the article the image recommendation task is for
     */
    title?: string;
    /**
     * The unprefixed filename for the image recommendation, e.g. `Foo.jpg`
     */
    filename?: string;
    /**
     * The title of the section the image recommendation is for, e.g. `History`
     */
    sectiontitle?: string;
    /**
     * The 1-based index of the section the image recommendation is for, e.g. `3`
     */
    sectionnumber?: number;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Invalidates a suggestion of a praiseworthy mentee in the Personalized praise module on the Mentor dashboard
 *
 * @private
 */
export interface GrowthExperimentsApiInvalidatePersonalizedPraiseSuggestionParams
    extends ApiParams {
    /**
     * Mentee to invalidate
     */
    mentee?: string;
    /**
     * Reason to invalidate the suggestion
     */
    reason?: "praised" | "skipped";
    /**
     * Skip reason to invalidate the suggestion
     */
    skipreason?: "already-praised" | "not-now" | "not-praiseworthy" | "other";
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Drop a 'Revise Tone' recommendation for a given page.
 *
 * @private
 */
export interface GrowthExperimentsApiInvalidateReviseToneRecommendationParams extends ApiParams {
    /**
     * Title of the page for which to drop the recommendation, without namespace.
     */
    title?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Manage information in the structured mentor list (usually stored in {@link https://www.mediawiki.org/wiki/MediaWiki:GrowthMentors.json MediaWiki:GrowthMentors.json}). This module can be used by both current and future mentors (to add themselves or change their details) and administrators (for all users).
 */
export interface GrowthExperimentsApiManageMentorListParams extends ApiParams {
    /**
     * Action
     */
    geaction?: "add" | "change" | "remove";
    /**
     * Introduction message (use an empty string for the default mentor message)
     */
    message?: string;
    /**
     * Weight
     */
    weight?: "0" | "1" | "2" | "4";
    /**
     * Is the mentor currently away? Has to be set (defaults to false).
     */
    isaway?: boolean;
    /**
     * Until when is the mentor away? Maximum is 1 year from today. Ignored unless isaway is true.
     */
    awaytimestamp?: timestamp;
    /**
     * Reason for the change
     *
     * Defaults to an empty string.
     */
    summary?: string;
    /**
     * Username of the mentor affected by the change. If not provided, currently logged in user will be used. Can be only used by privileged users.
     */
    username?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Schedule an extraordinary update of the mentee overview module in the mentor dashboard. You can only schedule one update per two hours for performance reasons.
 */
export interface GrowthExperimentsApiMentorDashboardUpdateDataParams extends ApiParams {
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Set mentee's status (allows mentees to enable/disable mentorship module, or to opt-out entirely, which deletes the mentee/mentor relationship)
 */
export interface GrowthExperimentsApiSetMenteeStatusParams extends ApiParams {
    /**
     * New status of the mentee (warning: setting this to optout will permanently deletes mentee/mentor relationship)
     *
     * - **enabled**: Mentorship module is enabled
     * - **disabled**: Mentorship module is fully disabled. This is normally set by the software and used for A/B testing.
     * - **optout**: Mentee opted out from mentorship; mentee/mentor relationship will be deleted, mentorship module will be replaced with a possibility to opt back in
     */
    state?: "disabled" | "enabled" | "optout";
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Set user's mentor. Change will be publicly logged.
 */
export interface GrowthExperimentsApiSetMentorParams extends ApiParams {
    /**
     * Mentee's username
     */
    mentee?: string;
    /**
     * Mentor's username
     */
    mentor?: string;
    /**
     * Reason for the change
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Mark or unmark a mentee as starred by current user (stored privately and not logged)
 */
export interface GrowthExperimentsApiStarMenteeParams extends ApiParams {
    /**
     * Action to take (`star` or `unstar`)
     */
    gesaction?: "star" | "unstar";
    /**
     * Mentee to (un)star
     */
    gesmentee?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Display help for the specified modules.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:FAQ
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Quick_start_guide
 */
export interface ApiHelpParams extends ApiParams {
    /**
     * Modules to display help for (values of the `action` and `format` parameters, or `main`). Can specify submodules with a `+`.
     *
     * Defaults to `main`.
     */
    modules?: string | string[];
    /**
     * Include help for submodules of the named module.
     */
    submodules?: boolean;
    /**
     * Include help for submodules recursively.
     */
    recursivesubmodules?: boolean;
    /**
     * Wrap the output in a standard API response structure.
     */
    wrap?: boolean;
    /**
     * Include a table of contents in the HTML output.
     */
    toc?: boolean;
}

/**
 * Handle questions posted via the help panel for the current user.
 *
 * @private
 */
export interface GrowthExperimentsApiHelpPanelPostQuestionParams extends ApiParams {
    /**
     * The text of the question provided by the user.
     */
    body?: string;
    /**
     * The method by which the question was posted.
     *
     * - **helpdesk**: The "Ask the help desk" panel
     * - **mentor-homepage**: The "Ask your mentor" panel on the newcomer homepage
     * - **mentor-helppanel**: The "Ask your mentor" screen on the help panel
     * - **helppanel**: The "Ask the help desk" panel (old name)
     * - **homepage-mentorship**: The "Ask your mentor" panel on the newcomer homepage (old name)
     *
     * Defaults to `helpdesk`.
     */
    source?:
        | "helpdesk"
        | "helppanel"
        | "homepage-mentorship"
        | "mentor-helppanel"
        | "mentor-homepage";
    /**
     * The relevant title, if selected, to include with the question.
     */
    relevanttitle?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Obtain formatted questions posted via homepage modules
 */
export interface GrowthExperimentsApiQuestionStoreParams extends ApiParams {
    /**
     * The storage location of the questions.
     */
    storage?: "growthexperiments-helppanel-questions" | "growthexperiments-mentor-questions";
}

/**
 * This module has been disabled.
 */
export interface ApiDisabledParams extends ApiParams {}

/**
 * Import a page from another wiki, or from an XML file.
 *
 * Note that the HTTP POST must be done as a file upload (i.e. using multipart/form-data) when sending a file for the `xml` parameter.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Import
 */
export interface ApiImportParams extends ApiParams {
    /**
     * Log entry import summary.
     */
    summary?: string;
    /**
     * Uploaded XML file.
     */
    xml?: upload;
    /**
     * For uploaded imports: interwiki prefix to apply to unknown usernames (and known users if `assignknownusers` is set).
     */
    interwikiprefix?: string;
    /**
     * For interwiki imports: wiki to import from.
     */
    interwikisource?:
        | "commons"
        | "de"
        | "es"
        | "fr"
        | "it"
        | "meta"
        | "nost"
        | "outreachwiki"
        | "pl"
        | "test2wiki";
    /**
     * For interwiki imports: page to import.
     */
    interwikipage?: string;
    /**
     * For interwiki imports: import the full history, not just the current version.
     */
    fullhistory?: boolean;
    /**
     * For interwiki imports: import all included templates as well.
     */
    templates?: boolean;
    /**
     * Import to this namespace. Cannot be used together with `rootpage`.
     */
    namespace?: namespace;
    /**
     * Assign edits to local users where the named user exists locally.
     */
    assignknownusers?: boolean;
    /**
     * Import as subpage of this page. Cannot be used together with `namespace`.
     */
    rootpage?: string;
    /**
     * Change tags to apply to the entry in the import log and to the dummy revision on the imported pages.
     */
    tags?: string | string[];
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Output data in JSON format.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
 */
export interface ApiFormatJsonParams extends ApiParams {
    /**
     * If specified, wraps the output into a given function call. For safety, all user-specific data will be restricted.
     */
    callback?: string;
    /**
     * If specified, encodes most (but not all) non-ASCII characters as UTF-8 instead of replacing them with hexadecimal escape sequences. Default when `formatversion` is not `1`.
     */
    utf8?: boolean;
    /**
     * If specified, encodes all non-ASCII using hexadecimal escape sequences. Default when `formatversion` is `1`.
     */
    ascii?: boolean;
    /**
     * Output formatting
     *
     * - **1**: Backwards-compatible format (XML-style booleans, `*` keys for content nodes, etc.).
     * - **2**: Modern format.
     * - **latest**: Use the latest format (currently `2`), may change without warning.
     *
     * Defaults to `1`.
     */
    formatversion?: "1" | "2" | "latest";
}

/**
 * Allows direct access to JsonConfig subsystem.
 */
export interface JsonConfigJCApiParams extends ApiParams {
    /**
     * Which sub-action to perform on JsonConfig:
     *
     * - **status**: Shows JsonConfig configuration.
     * - **reset**: Clears configurations from cache. Requires title parameter and jsonconfig-flush right.
     * - **reload**: Reloads and caches configurations from config store. Requires title parameter and jsonconfig-reset right.
     *
     * Defaults to `status`.
     */
    command?: "reload" | "reset" | "status";
    /**
     * Namespace number of the title to process.
     */
    namespace?: number;
    /**
     * Title to process without namespace prefix.
     *
     * Defaults to an empty string.
     */
    title?: string;
}

/**
 * Retrieve localized JSON data.
 *
 * @private
 */
export interface JsonConfigJCDataApiParams extends ApiParams {
    /**
     * Title to get. By default assumes namespace to be "Data:"
     */
    title?: string;
}

/**
 * Output data in JSON format (pretty-print in HTML).
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
 */
export interface ApiFormatJsonParams extends ApiParams {
    /**
     * Return the pretty-printed HTML and associated ResourceLoader modules as a JSON object.
     */
    wrappedhtml?: boolean;
    /**
     * If specified, wraps the output into a given function call. For safety, all user-specific data will be restricted.
     */
    callback?: string;
    /**
     * If specified, encodes most (but not all) non-ASCII characters as UTF-8 instead of replacing them with hexadecimal escape sequences. Default when `formatversion` is not `1`.
     */
    utf8?: boolean;
    /**
     * If specified, encodes all non-ASCII using hexadecimal escape sequences. Default when `formatversion` is `1`.
     */
    ascii?: boolean;
    /**
     * Output formatting
     *
     * - **1**: Backwards-compatible format (XML-style booleans, `*` keys for content nodes, etc.).
     * - **2**: Modern format.
     * - **latest**: Use the latest format (currently `2`), may change without warning.
     *
     * Defaults to `1`.
     */
    formatversion?: "1" | "2" | "latest";
}

/**
 * Retrieve JSON data transformed by a Lua function.
 *
 * @private
 */
export interface JsonConfigJCTransformApiParams extends ApiParams {
    /**
     * Title to process without namespace prefix.
     */
    title?: string;
    /**
     * Name of Lua module to load transform code from. Defaults to Module: namespace.
     */
    jtmodule?: string;
    /**
     * Name of Lua function to run
     */
    jtfunction?: string;
    /**
     * Sequence of strings to pass as arguments to the Lua transform function
     */
    jtargs?: string | string[];
}

/**
 * Search for language names in any script.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Languagesearch
 */
export interface ApiLanguageSearchParams extends ApiParams {
    /**
     * Search string.
     */
    search?: string;
    /**
     * Number of spelling mistakes allowed in the search string.
     *
     * Defaults to 1.
     */
    typos?: number;
}

/**
 * Link an account from a third-party provider to the current user.
 *
 * The general procedure to use this module is:
 *
 * - Fetch the fields available from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=link`, and a `csrf` token from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens `action=query&meta=tokens`}.
 * - Present the fields to the user, and obtain their submission.
 * - Post to this module, supplying `linkreturnurl` and any relevant fields.
 * - Check the `status` in the response.
 * - If you received `PASS` or `FAIL`, you're done. The operation either succeeded or it didn't.
 * - If you received `UI`, present the new fields to the user and obtain their submission. Then post to this module with `linkcontinue` and the relevant fields set, and repeat step 4.
 * - If you received `REDIRECT`, direct the user to the `redirecttarget` and wait for the return to `linkreturnurl`. Then post to this module with `linkcontinue` and any fields passed to the return URL, and repeat step 4.
 * - If you received `RESTART`, that means the authentication worked but we don't have a linked user account. You might treat this as `UI` or as `FAIL`.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkaccount
 */
export interface ApiLinkAccountParams extends ApiParams {
    /**
     * Only use these authentication requests, by the `id` returned from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=link` or from a previous response from this module.
     */
    linkrequests?: string | string[];
    /**
     * Format to use for returning messages.
     *
     * Defaults to `wikitext`.
     */
    linkmessageformat?: "html" | "none" | "raw" | "wikitext";
    /**
     * Merge field information for all authentication requests into one array.
     */
    linkmergerequestfields?: boolean;
    /**
     * Return URL for third-party authentication flows, must be absolute. Either this or `linkcontinue` is required.
     *
     * Upon receiving a `REDIRECT` response, you will typically open a browser or web view to the specified `redirecttarget` URL for a third-party authentication flow. When that completes, the third party will send the browser or web view to this URL. You should extract any query or POST parameters from the URL and pass them as a `linkcontinue` request to this API module.
     */
    linkreturnurl?: string;
    /**
     * This request is a continuation after an earlier `UI` or `REDIRECT` response. Either this or `linkreturnurl` is required.
     */
    linkcontinue?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    linktoken?: string;
}

/**
 * Log in and get authentication cookies.
 *
 * This action should only be used in combination with {@link https://www.mediawiki.org/wiki/Special:BotPasswords Special:BotPasswords}; use for main-account login is deprecated and may fail without warning. To safely log in to the main account, use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/clientlogin `action=clientlogin`}.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Login
 */
export interface ApiLoginParams extends ApiParams {
    /**
     * Username.
     */
    lgname?: string;
    /**
     * Password.
     *
     * Sensitive parameter.
     */
    lgpassword?: password;
    /**
     * Domain (optional).
     */
    lgdomain?: string;
    /**
     * A "login" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    lgtoken?: string;
}

/**
 * Log out and clear session data.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Logout
 */
export interface ApiLogoutParams extends ApiParams {
    /**
     * Log the user out from all their devices (rather than their current device only).
     */
    global?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * Client hints data supplied alongside requests to ApiLogout. For internal use only.
     *
     * Sensitive parameter.
     */
    checkuserclienthints?: string;
}

/**
 * Perform management tasks relating to change tags.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tag_management
 */
export interface ApiManageTagsParams extends ApiParams {
    /**
     * Which operation to perform:
     *
     * - **create**: Create a new change tag for manual use.
     * - **delete**: Remove a change tag from the database, including removing the tag from all revisions, recent change entries and log entries on which it is used.
     * - **activate**: Activate a change tag, allowing users to apply it manually.
     * - **deactivate**: Deactivate a change tag, preventing users from applying it manually.
     */
    operation?: "activate" | "create" | "deactivate" | "delete";
    /**
     * Tag to create, delete, activate or deactivate. For tag creation, the tag must not exist. For tag deletion, the tag must exist. For tag activation, the tag must exist and not be in use by an extension. For tag deactivation, the tag must be currently active and manually defined.
     */
    tag?: string;
    /**
     * An optional reason for creating, deleting, activating or deactivating the tag.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Whether to ignore any warnings that are issued during the operation.
     */
    ignorewarnings?: boolean;
    /**
     * Change tags to apply to the entry in the tag management log.
     */
    tags?: string | string[];
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Send a message to a list of pages.
 *
 * @see https://www.mediawiki.org/wiki/Extension:MassMessage/API
 */
export interface MassMessageApiMassMessageParams extends ApiParams {
    /**
     * Page containing list of pages to leave a message on.
     */
    "spamlist"?: string;
    /**
     * Subject line of the message.
     */
    "subject"?: string;
    /**
     * Message body text.
     */
    "message"?: string;
    /**
     * Page to be sent along with the message body.
     */
    "page-message"?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    "token"?: string;
}

/**
 * Merge page histories.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Mergehistory
 */
export interface ApiMergeHistoryParams extends ApiParams {
    /**
     * Title of the page from which history will be merged. Cannot be used together with `fromid`.
     */
    from?: string;
    /**
     * Page ID of the page from which history will be merged. Cannot be used together with `from`.
     */
    fromid?: number;
    /**
     * Title of the page to which history will be merged. Cannot be used together with `toid`.
     */
    to?: string;
    /**
     * Page ID of the page to which history will be merged. Cannot be used together with `to`.
     */
    toid?: number;
    /**
     * Timestamp up to which revisions will be moved from the source page's history to the destination page's history. If omitted, the entire page history of the source page will be merged into the destination page. May specify "timestamp|revid" to split two revisions with the same timestamp.
     */
    timestamp?: string;
    /**
     * Reason for the history merge.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Timestamp from which revisions will be moved from the source page's history to the destination page's history. If omitted, all revisions before the timestamp parameter (or the entire history if neither are specified) will be merged into the destination page. May specify "timestamp|revid" to split two revisions with the same timestamp.
     */
    starttimestamp?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Move a page.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Move
 */
export interface ApiMoveParams extends ApiParams {
    /**
     * Title of the page to rename. Cannot be used together with `fromid`.
     */
    from?: string;
    /**
     * Page ID of the page to rename. Cannot be used together with `from`.
     */
    fromid?: number;
    /**
     * Title to rename the page to.
     */
    to?: string;
    /**
     * Reason for the rename.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Rename the talk page, if it exists.
     */
    movetalk?: boolean;
    /**
     * Rename subpages, if applicable.
     */
    movesubpages?: boolean;
    /**
     * Don't create a redirect.
     */
    noredirect?: boolean;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     *
     * Defaults to `preferences`.
     */
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * Ignore any warnings.
     */
    ignorewarnings?: boolean;
    /**
     * Change tags to apply to the entry in the move log and to the dummy revision on the destination page.
     */
    tags?: string | string[];
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Output nothing.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
 */
export interface ApiFormatNoneParams extends ApiParams {}

/**
 * Search the wiki using the OpenSearch protocol.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Opensearch
 */
export interface ApiOpenSearchParams extends ApiParams {
    /**
     * Search string.
     */
    search?: string;
    /**
     * Namespaces to search. Ignored if `search` begins with a valid namespace prefix.
     *
     * Defaults to 0.
     */
    namespace?: namespace | namespace[] | "*";
    /**
     * Maximum number of results to return.
     *
     * Defaults to 10.
     */
    limit?: limit;
    /**
     * Search profile to use.
     *
     * - **strict**: Strict profile with few punctuation characters removed but diacritics and stress marks are kept.
     * - **normal**: Few punctuation characters, some diacritics and stopwords removed.
     * - **fuzzy**: Similar to normal with typo correction (two typos supported).
     * - **fast-fuzzy**: Experimental fuzzy profile (may be removed at any time)
     * - **classic**: Classic prefix, few punctuation characters and some diacritics removed.
     * - **engine_autoselect**: Let the search engine decide on the best profile to use.
     *
     * Defaults to `engine_autoselect`.
     */
    profile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
    /**
     * No longer used.
     *
     * @deprecated
     */
    suggest?: boolean;
    /**
     * How to handle redirects:
     *
     * - **return**: Return the redirect itself.
     * - **resolve**: Return the target page. May return fewer than limit results.
     * For historical reasons, the default is "return" for format=json and "resolve" for other formats.
     */
    redirects?: "resolve" | "return";
    /**
     * The format of the output.
     *
     * Defaults to `json`.
     */
    format?: "json" | "jsonfm" | "xml" | "xmlfm";
    /**
     * If warnings are raised with `format=json`, return an API error instead of ignoring them.
     */
    warningsaserror?: boolean;
}

/**
 * Change preferences of the current user.
 *
 * Only options which are registered in core or in one of installed extensions, or options with keys prefixed with `userjs-` (intended to be used by user scripts), can be set.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Options
 */
export interface ApiOptionsParams extends ApiParams {
    /**
     * Resets preferences to the site defaults.
     */
    reset?: boolean;
    /**
     * List of types of options to reset when the `reset` option is set.
     *
     * Defaults to `all`.
     */
    resetkinds?: OneOrMore<
        | "all"
        | "local-exception"
        | "registered"
        | "registered-checkmatrix"
        | "registered-multiselect"
        | "special"
        | "unused"
        | "userjs"
    >;
    /**
     * List of changes, formatted name=value (e.g. skin=vector). If no value is given (not even an equals sign), e.g., optionname|otheroption|..., the option will be reset to its default value. If any value passed contains the pipe character (`|`), use the {@link https://www.mediawiki.org/wiki/Special:ApiHelp/main#main/datatypes alternative multiple-value separator} for correct operation.
     */
    change?: string | string[];
    /**
     * The name of the option that should be set to the value given by `optionvalue`.
     */
    optionname?: string;
    /**
     * The value for the option specified by `optionname`. When `optionname` is set but `optionvalue` is omitted, the option will be reset to its default value.
     */
    optionvalue?: string;
    /**
     * What to do if the option was set globally using the GlobalPreferences extension.
     *
     * - `ignore`: Do nothing. The option remains with its previous value.
     * - `override`: Add a local override.
     * - `update`: Update the option globally.
     * - `create`: Set the option globally, overriding any local value.
     *
     * Defaults to `ignore`.
     */
    global?: "create" | "ignore" | "override" | "update";
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Mark an article as reviewed or unreviewed.
 */
export interface PageTriageApiPageTriageActionParams extends ApiParams {
    /**
     * ID for the page that the action is performed on.
     */
    pageid?: number;
    /**
     * Whether the page should be marked as reviewed
     */
    reviewed?: "0" | "1";
    /**
     * Whether the page should be added to PageTriage queue.
     */
    enqueue?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * Personal note to page creators from reviewers.
     */
    note?: string;
    /**
     * Whether to skip notification.
     */
    skipnotif?: boolean;
    /**
     * Change tags to apply to the log entries generated for this action.
     */
    tags?: string | string[];
}

/**
 * Get a list of page IDs for building a PageTriage queue.
 */
export interface PageTriageApiPageTriageListParams extends ApiParams {
    /**
     * Whether to include predicted class stub
     */
    show_predicted_class_stub?: boolean;
    /**
     * Whether to include predicted class start
     */
    show_predicted_class_start?: boolean;
    /**
     * Whether to include predicted class C
     */
    show_predicted_class_c?: boolean;
    /**
     * Whether to include predicted class B
     */
    show_predicted_class_b?: boolean;
    /**
     * Whether to include predicted class good
     */
    show_predicted_class_good?: boolean;
    /**
     * Whether to included predicted class featured
     */
    show_predicted_class_featured?: boolean;
    /**
     * Whether to include potential issues of vandalism
     */
    show_predicted_issues_vandalism?: boolean;
    /**
     * Whether to include potential issues of spam
     */
    show_predicted_issues_spam?: boolean;
    /**
     * Whether to include potential issues of attack
     */
    show_predicted_issues_attack?: boolean;
    /**
     * Whether to include no potential issues
     */
    show_predicted_issues_none?: boolean;
    /**
     * Whether to include potential issues of copyvio
     */
    show_predicted_issues_copyvio?: boolean;
    /**
     * Whether to show only bot edits.
     */
    showbots?: boolean;
    /**
     * Whether to show only edits by users with the autopatrol user right.
     */
    showautopatrolled?: boolean;
    /**
     * Whether to include redirects.
     */
    showredirs?: boolean;
    /**
     * Whether to include pages that are not redirects nor nominated for deletion.
     */
    showothers?: boolean;
    /**
     * Whether to include reviewed.
     */
    showreviewed?: boolean;
    /**
     * Whether to include unreviewed.
     */
    showunreviewed?: boolean;
    /**
     * Whether to include "proposed for deletion".
     */
    showdeleted?: boolean;
    /**
     * What namespace to pull pages from.
     */
    namespace?: number;
    /**
     * Which Articles-for-Creation state to show.
     */
    afc_state?: number;
    /**
     * Whether to show only pages with no category.
     */
    no_category?: boolean;
    /**
     * Whether to show only pages without any references.
     */
    unreferenced?: boolean;
    /**
     * Whether to show only pages with no inbound links.
     */
    no_inbound_links?: boolean;
    /**
     * Whether to show only pages that were previously deleted.
     */
    recreated?: boolean;
    /**
     * Whether to show only pages created by non autoconfirmed users.
     */
    non_autoconfirmed_users?: boolean;
    /**
     * Whether to show only pages created by newly autoconfirmed users.
     */
    learners?: boolean;
    /**
     * Whether to show only pages created by blocked users.
     */
    blocked_users?: boolean;
    /**
     * Show only pages created by username.
     */
    username?: string;
    /**
     * Show only pages with this keyword in the snippet.
     */
    keyword?: string;
    /**
     * Show only pages created on this date and after.
     */
    date_range_from?: timestamp;
    /**
     * Show only pages created on this date and before.
     */
    date_range_to?: timestamp;
    /**
     * Return data for the specified page IDs, ignoring other parameters.
     */
    page_id?: number;
    /**
     * The maximum number of results to return.
     *
     * Defaults to 20.
     */
    limit?: number;
    /**
     * Timestamp to start from.
     */
    offset?: number;
    /**
     * Page ID to start from (requires offset param to be passed as well).
     */
    pageoffset?: number;
    /**
     * The direction the list should be sorted in - oldestfirst, newestfirst, oldestreview or newestreview.
     */
    dir?: "newestfirst" | "newestreview" | "oldestfirst" | "oldestreview";
}

/**
 * Get the stats for page triage.
 */
export interface PageTriageApiPageTriageStatsParams extends ApiParams {
    /**
     * Whether to include predicted class stub
     */
    show_predicted_class_stub?: boolean;
    /**
     * Whether to include predicted class start
     */
    show_predicted_class_start?: boolean;
    /**
     * Whether to include predicted class C
     */
    show_predicted_class_c?: boolean;
    /**
     * Whether to include predicted class B
     */
    show_predicted_class_b?: boolean;
    /**
     * Whether to include predicted class good
     */
    show_predicted_class_good?: boolean;
    /**
     * Whether to included predicted class featured
     */
    show_predicted_class_featured?: boolean;
    /**
     * Whether to include potential issues of vandalism
     */
    show_predicted_issues_vandalism?: boolean;
    /**
     * Whether to include potential issues of spam
     */
    show_predicted_issues_spam?: boolean;
    /**
     * Whether to include potential issues of attack
     */
    show_predicted_issues_attack?: boolean;
    /**
     * Whether to include no potential issues
     */
    show_predicted_issues_none?: boolean;
    /**
     * Whether to include potential issues of copyvio
     */
    show_predicted_issues_copyvio?: boolean;
    /**
     * Whether to include only pages created by bots.
     */
    showbots?: boolean;
    /**
     * Whether to show only edits by users with the autopatrol user right.
     */
    showautopatrolled?: boolean;
    /**
     * Whether to include redirects.
     */
    showredirs?: boolean;
    /**
     * Whether to include normal pages that are not redirects nor nominated for deletion.
     */
    showothers?: boolean;
    /**
     * Whether to include reviewed.
     */
    showreviewed?: boolean;
    /**
     * Whether to include unreviewed.
     */
    showunreviewed?: boolean;
    /**
     * Whether to include "proposed for deletion".
     */
    showdeleted?: boolean;
    /**
     * What namespace to pull stats from.
     */
    namespace?: number;
    /**
     * Which Articles-for-Creation state to get stats for.
     */
    afc_state?: number;
    /**
     * Whether to include only pages with no category.
     */
    no_category?: boolean;
    /**
     * Whether to include only pages with no references.
     */
    unreferenced?: boolean;
    /**
     * Whether to include only pages with no inbound links.
     */
    no_inbound_links?: boolean;
    /**
     * Whether to include only pages that were previously deleted.
     */
    recreated?: boolean;
    /**
     * Whether to include only pages created by non-autoconfirmed users.
     */
    non_autoconfirmed_users?: boolean;
    /**
     * Whether to include only pages created by newly autoconfirmed users.
     */
    learners?: boolean;
    /**
     * Whether to include only pages created by blocked users.
     */
    blocked_users?: boolean;
    /**
     * Include only pages created by username.
     */
    username?: string;
    /**
     * Include only pages with this keyword in the snippet.
     */
    keyword?: string;
    /**
     * Include only pages created on this date and after.
     */
    date_range_from?: timestamp;
    /**
     * Include only pages created on this date and before.
     */
    date_range_to?: timestamp;
}

/**
 * Tag a revision as a likely copyright violation.
 *
 * The revision is shown on Special:NewPagesFeed. Requires the pagetriage-copyvio right.
 */
export interface PageTriageApiPageTriageTagCopyvioParams extends ApiParams {
    /**
     * Revision ID to tag as a likely copyright violation
     */
    revid?: number;
    /**
     * Remove the copyright violation tag
     */
    untag?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Add tags to an article.
 */
export interface PageTriageApiPageTriageTaggingParams extends ApiParams {
    /**
     * The article for which to be tagged.
     */
    pageid?: number;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * The wikitext containing the tag added to the article.
     */
    wikitext?: string;
    /**
     * Whether or not the tagging is for a deletion nomination.
     */
    deletion?: boolean;
    /**
     * Personal note to page creators from reviewers.
     *
     * Defaults to an empty string.
     */
    note?: string;
    /**
     * Pipe-separated list of tags.
     */
    taglist?: string | string[];
}

/**
 * Obtain information about API modules.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Parameter_information
 */
export interface ApiParamInfoParams extends ApiParams {
    /**
     * List of module names (values of the `action` and `format` parameters, or `main`). Can specify submodules with a `+`, or all submodules with `+*`, or all submodules recursively with `+**`.
     */
    modules?: string | string[];
    /**
     * Format of help strings.
     *
     * Defaults to `none`.
     */
    helpformat?: "html" | "none" | "raw" | "wikitext";
    /**
     * List of query module names (value of `prop`, `meta` or `list` parameter). Use `modules=query+foo` instead of `querymodules=foo`.
     *
     * @deprecated
     */
    querymodules?: OneOrMore<
        | "abusefilters"
        | "abuselog"
        | "allcategories"
        | "alldeletedrevisions"
        | "allfileusages"
        | "allimages"
        | "alllinks"
        | "allmessages"
        | "allpages"
        | "allredirects"
        | "allrevisions"
        | "alltransclusions"
        | "allusers"
        | "authmanagerinfo"
        | "automatictranslationdenselanguages"
        | "babel"
        | "backlinks"
        | "betafeatures"
        | "blocks"
        | "categories"
        | "categoryinfo"
        | "categorymembers"
        | "centralnoticeactivecampaigns"
        | "centralnoticelogs"
        | "checkuser"
        | "checkuserformattedblockinfo"
        | "checkuserlog"
        | "cirrusbuilddoc"
        | "cirruscompsuggestbuilddoc"
        | "cirrusdoc"
        | "codexicons"
        | "communityconfiguration"
        | "contenttranslation"
        | "contenttranslationcorpora"
        | "contenttranslationfavoritesuggestions"
        | "contributors"
        | "coordinates"
        | "cxconfig"
        | "cxdeletedtranslations"
        | "cxpublishedtranslations"
        | "cxtranslatorstats"
        | "deletedrevisions"
        | "deletedrevs"
        | "description"
        | "duplicatefiles"
        | "embeddedin"
        | "extlinks"
        | "extracts"
        | "exturlusage"
        | "featureusage"
        | "filearchive"
        | "filerepoinfo"
        | "fileusage"
        | "flagged"
        | "gadgetcategories"
        | "gadgets"
        | "geosearch"
        | "globalallusers"
        | "globalblocks"
        | "globalgroups"
        | "globalpreferences"
        | "globalrenamestatus"
        | "globalusage"
        | "globaluserinfo"
        | "globalusers"
        | "growthimagesuggestiondata"
        | "growthmenteestatus"
        | "growthmentorlist"
        | "growthmentormentee"
        | "growthmentorstatus"
        | "growthnextsuggestedtasktype"
        | "growthstarredmentees"
        | "growthtasks"
        | "imageinfo"
        | "images"
        | "imageusage"
        | "info"
        | "isreviewed"
        | "iwbacklinks"
        | "iwlinks"
        | "langbacklinks"
        | "langlinks"
        | "langlinkscount"
        | "languageinfo"
        | "links"
        | "linkshere"
        | "linterrors"
        | "linterstats"
        | "logevents"
        | "mapdata"
        | "mmcontent"
        | "mostviewed"
        | "mystashedfiles"
        | "notifications"
        | "oldreviewedpages"
        | "ores"
        | "pageassessments"
        | "pagecollectionsmetadata"
        | "pageimages"
        | "pagepropnames"
        | "pageprops"
        | "pageswithprop"
        | "pageterms"
        | "pageviews"
        | "prefixsearch"
        | "projectpages"
        | "projects"
        | "protectedtitles"
        | "querypage"
        | "random"
        | "readinglistentries"
        | "readinglists"
        | "recentchanges"
        | "redirects"
        | "revisions"
        | "search"
        | "siteinfo"
        | "siteviews"
        | "stashimageinfo"
        | "tags"
        | "templates"
        | "tokens"
        | "trackingcategories"
        | "transcludedin"
        | "transcodestatus"
        | "unreadnotificationpages"
        | "usercontribs"
        | "userinfo"
        | "users"
        | "videoinfo"
        | "watchlist"
        | "watchlistraw"
        | "wbentityusage"
        | "wblistentityusage"
        | "wikibase"
        | "wikisets"
    >;
    /**
     * Get information about the main (top-level) module as well. Use `modules=main` instead.
     *
     * @deprecated
     */
    mainmodule?: string;
    /**
     * Get information about the pageset module (providing titles= and friends) as well.
     *
     * @deprecated
     */
    pagesetmodule?: string;
    /**
     * List of format module names (value of `format` parameter). Use `modules` instead.
     *
     * @deprecated
     */
    formatmodules?: OneOrMore<"json" | "jsonfm" | "none" | "rawfm" | "xml" | "xmlfm">;
}

/**
 * Parses content and returns parser output.
 *
 * See the various prop-modules of {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query `action=query`} to get information from the current version of a page.
 *
 * There are several ways to specify the text to parse:
 *
 * - Specify a page or revision, using `page`, `pageid`, or `oldid`.
 * - Specify content explicitly, using `text`, `title`, `revid`, and `contentmodel`.
 * - Specify only a summary to parse. `prop` should be given an empty value.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Parsing_wikitext
 */
export interface ApiParseParams extends ApiParams {
    /**
     * Title of page the text belongs to. If omitted, `contentmodel` must be specified, and {@link https://www.mediawiki.org/wiki/API API} will be used as the title.
     */
    title?: string;
    /**
     * Text to parse. Use `title` or `contentmodel` to control the content model.
     */
    text?: string;
    /**
     * Revision ID, for `{{REVISIONID}}` and similar variables.
     */
    revid?: number;
    /**
     * Summary to parse.
     */
    summary?: string;
    /**
     * Parse the content of this page. Cannot be used together with `text` and `title`.
     */
    page?: string;
    /**
     * Parse the content of this page. Overrides `page`.
     */
    pageid?: number;
    /**
     * If `page` or `pageid` is set to a redirect, resolve it.
     */
    redirects?: boolean;
    /**
     * Parse the content of this revision. Overrides `page` and `pageid`.
     */
    oldid?: number;
    /**
     * Which pieces of information to get:
     *
     * - **text**: Gives the parsed text of the wikitext.
     * - **langlinks**: Gives the language links in the parsed wikitext.
     * - **categories**: Gives the categories in the parsed wikitext.
     * - **categorieshtml**: Gives the HTML version of the categories.
     * - **links**: Gives the internal links in the parsed wikitext.
     * - **templates**: Gives the templates in the parsed wikitext.
     * - **images**: Gives the images in the parsed wikitext.
     * - **externallinks**: Gives the external links in the parsed wikitext.
     * - **sections**: Deprecated. `prop=sections` has been deprecated. Please use `prop=tocdata` instead. Gives the sections in the parsed wikitext.
     * - **tocdata**: Gives the table of contents information in the parsed wikitext. See {@link https://www.mediawiki.org/wiki/API:Parsing_wikitext/TOCData mw:API:Parsing_wikitext/TOCData} for schema.
     * - **revid**: Adds the revision ID of the parsed page.
     * - **displaytitle**: Adds the title of the parsed wikitext.
     * - **subtitle**: Adds the page subtitle for the parsed page.
     * - **headhtml**: Gives parsed doctype, opening `<html>`, `<head>` element and opening `<body>` of the page.
     * - **modules**: Gives the ResourceLoader modules used on the page. To load, use `mw.loader.using()`. Either `jsconfigvars` or `encodedjsconfigvars` must be requested jointly with `modules`.
     * - **jsconfigvars**: Gives the JavaScript configuration variables specific to the page. To apply, use `mw.config.set()`.
     * - **encodedjsconfigvars**: Gives the JavaScript configuration variables specific to the page as a JSON string.
     * - **indicators**: Gives the HTML of page status indicators used on the page.
     * - **iwlinks**: Gives interwiki links in the parsed wikitext.
     * - **wikitext**: Gives the original wikitext that was parsed.
     * - **properties**: Gives various properties defined in the parsed wikitext.
     * - **limitreportdata**: Gives the limit report in a structured way. Gives no data, when `disablelimitreport` is set.
     * - **limitreporthtml**: Gives the HTML version of the limit report. Gives no data, when `disablelimitreport` is set.
     * - **parseroutput**: Internal. Gives the JSON-serialized `ParserOutput` object for the parsed content. The format of this property may change at any time; {@link https://www.mediawiki.org/wiki/Manual:Parser_cache/Serialization_compatibility mw:Manual:Parser cache/Serialization compatibility} does not provide any guarantee of API stability.
     * - **parsetree**: The XML parse tree of revision content (requires content model `wikitext`)
     * - **parsewarnings**: Gives the warnings that occurred while parsing content (as wikitext).
     * - **parsewarningshtml**: Gives the warnings that occurred while parsing content (as HTML).
     * - **headitems**: Deprecated. `prop=headitems` is deprecated since MediaWiki 1.28. Use `prop=headhtml` when creating new HTML documents, or `prop=modules|jsconfigvars` when updating a document client-side. Gives items to put in the `<head>` of the page.
     *
     * Defaults to `text`, `langlinks`, `categories`, `links`, `templates`, `images`, `externallinks`, `sections`, `tocdata`, `revid`, `displaytitle`, `iwlinks`, `properties`, and `parsewarnings`.
     */
    prop?: OneOrMore<
        | "categories"
        | "categorieshtml"
        | "displaytitle"
        | "encodedjsconfigvars"
        | "externallinks"
        | "headhtml"
        | "images"
        | "indicators"
        | "iwlinks"
        | "jsconfigvars"
        | "langlinks"
        | "limitreportdata"
        | "limitreporthtml"
        | "links"
        | "modules"
        | "parseroutput"
        | "parsetree"
        | "parsewarnings"
        | "parsewarningshtml"
        | "properties"
        | "revid"
        | "subtitle"
        | "templates"
        | "text"
        | "tocdata"
        | "wikitext"
        | "headitems"
        | "sections"
    >;
    /**
     * CSS class to use to wrap the parser output.
     *
     * Defaults to `mw-parser-output`.
     */
    wrapoutputclass?: string;
    /**
     * Use the ArticleParserOptions hook to ensure the options used match those used for article page views
     */
    usearticle?: boolean;
    /**
     * Generate HTML conforming to the {@link https://www.mediawiki.org/wiki/Specs/HTML MediaWiki DOM spec} using {@link https://www.mediawiki.org/wiki/Parsoid Parsoid}. Replaced by `parser=parsoid`.
     *
     * @deprecated
     */
    parsoid?: boolean;
    /**
     * Which wikitext parser to use:
     *
     * - **parsoid**: Generate HTML conforming to the {@link https://www.mediawiki.org/wiki/Specs/HTML MediaWiki DOM spec} using {@link https://www.mediawiki.org/wiki/Parsoid Parsoid}.
     * - **default**: Generate HTML using this wiki's default parser.
     * - **legacy**: Generate HTML using the legacy parser.
     *
     * Defaults to `default`.
     */
    parser?: "default" | "legacy" | "parsoid";
    /**
     * Do a pre-save transform on the input before parsing it. Only valid when used with text.
     */
    pst?: boolean;
    /**
     * Do a pre-save transform (PST) on the input, but don't parse it. Returns the same wikitext, after a PST has been applied. Only valid when used with `text`.
     */
    onlypst?: boolean;
    /**
     * Includes language links supplied by extensions (for use with `prop=langlinks`).
     *
     * @deprecated
     */
    effectivelanglinks?: boolean;
    /**
     * Only parse the content of the section with this identifier.
     *
     * When `new`, parse `text` and `sectiontitle` as if adding a new section to the page.
     *
     * `new` is allowed only when specifying `text`.
     */
    section?: string;
    /**
     * New section title when `section` is `new`.
     *
     * Unlike page editing, this does not fall back to `summary` when omitted or empty.
     */
    sectiontitle?: string;
    /**
     * Use `disablelimitreport` instead.
     *
     * @deprecated
     */
    disablepp?: boolean;
    /**
     * Omit the limit report ("NewPP limit report") from the parser output.
     */
    disablelimitreport?: boolean;
    /**
     * Omit edit section links from the parser output.
     */
    disableeditsection?: boolean;
    /**
     * Do not deduplicate inline stylesheets in the parser output.
     */
    disablestylededuplication?: boolean;
    /**
     * Whether to include internal merge strategy information in jsconfigvars.
     */
    showstrategykeys?: boolean;
    /**
     * Generate XML parse tree (requires content model `wikitext`; replaced by `prop=parsetree`).
     *
     * @deprecated
     */
    generatexml?: boolean;
    /**
     * Parse in preview mode.
     */
    preview?: boolean;
    /**
     * Parse in section preview mode (enables preview mode too).
     */
    sectionpreview?: boolean;
    /**
     * Omit table of contents in output.
     */
    disabletoc?: boolean;
    /**
     * Apply the selected skin to the parser output. May affect the following properties: `text`, `langlinks`, `headitems`, `modules`, `jsconfigvars`, `indicators`.
     */
    useskin?:
        | "apioutput"
        | "authentication-popup"
        | "cologneblue"
        | "contenttranslation"
        | "fallback"
        | "json"
        | "minerva"
        | "modern"
        | "monobook"
        | "timeless"
        | "vector"
        | "vector-2022";
    /**
     * Content serialization format used for the input text. Only valid when used with text.
     */
    contentformat?: string;
    /**
     * Content model of the input text. If omitted, title must be specified, and default will be the model of the specified title. Only valid when used with text.
     */
    contentmodel?: string;
    /**
     * Return parse output in a format suitable for mobile devices.
     */
    mobileformat?: boolean;
    /**
     * Template sandbox prefix, as with {@link https://www.mediawiki.org/wiki/Special:TemplateSandbox Special:TemplateSandbox}.
     */
    templatesandboxprefix?: string | string[];
    /**
     * Parse the page using `templatesandboxtext` in place of the contents of the page named here.
     */
    templatesandboxtitle?: string;
    /**
     * Parse the page using this page content in place of the page named by `templatesandboxtitle`.
     */
    templatesandboxtext?: string;
    /**
     * Content model of `templatesandboxtext`.
     */
    templatesandboxcontentmodel?: string;
    /**
     * Content format of `templatesandboxtext`.
     */
    templatesandboxcontentformat?: string;
}

/**
 * Parse a page with two different parser configurations.
 *
 * @private
 */
export interface ParserMigrationApiParserMigrationParams extends ApiParams {
    /**
     * The title of the page to load and parse.
     */
    title?: string;
    /**
     * The parser configuration to use. May be "old", "new" or "old|new".
     *
     * - **old**: Parses the page using the "old" configuration; MediaWiki's legacy parser
     * - **new**: Parses the page using the "new" configuration; Parsoid
     *
     * Defaults to `old` and `new`.
     */
    config?: OneOrMore<"new" | "old">;
    /**
     * Redirects are followed by default. Use "no" to not follow redirects.
     */
    redirect?: string;
}

/**
 * Patrol a page or revision.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Patrol
 */
export interface ApiPatrolParams extends ApiParams {
    /**
     * Recentchanges ID to patrol.
     */
    rcid?: number;
    /**
     * Revision ID to patrol.
     */
    revid?: number;
    /**
     * Change tags to apply to the entry in the patrol log.
     */
    tags?: string | string[];
    /**
     * A "patrol" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Change the protection level of a page.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protect
 */
export interface ApiProtectParams extends ApiParams {
    /**
     * Title of the page to (un)protect. Cannot be used together with pageid.
     */
    title?: string;
    /**
     * ID of the page to (un)protect. Cannot be used together with title.
     */
    pageid?: number;
    /**
     * List of protection levels, formatted `action=level` (e.g. `edit=sysop`). A level of `all` means everyone is allowed to take the action, i.e. no restriction.
     *
     * **Note:** Any actions not listed will have restrictions removed.
     */
    protections?: string | string[];
    /**
     * Expiry timestamps. If only one timestamp is set, it'll be used for all protections. Use `infinite`, `indefinite`, `infinity`, or `never`, for a never-expiring protection.
     *
     * Defaults to `infinite`.
     */
    expiry?: string | string[];
    /**
     * Reason for (un)protecting.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Change tags to apply to the entry in the protection log.
     */
    tags?: string | string[];
    /**
     * Enable cascading protection (i.e. protect transcluded templates and images used in this page). Ignored if none of the given protection levels support cascading.
     */
    cascade?: boolean;
    /**
     * If set, add the page being (un)protected to the current user's watchlist.
     *
     * @deprecated
     */
    watch?: boolean;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     *
     * Defaults to `preferences`.
     */
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Purge the cache for the given titles.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Purge
 */
export interface ApiPurgeParams extends ApiParams {
    /**
     * Update the links tables and do other secondary data updates.
     */
    forcelinkupdate?: boolean;
    /**
     * Same as `forcelinkupdate`, and update the links tables for any page that uses this page as a template.
     */
    forcerecursivelinkupdate?: boolean;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    continue?: string;
    /**
     * A list of titles to work on.
     */
    titles?: string | string[];
    /**
     * A list of page IDs to work on.
     */
    pageids?: number | number[];
    /**
     * A list of revision IDs to work on. Note that almost all query modules will convert revision IDs to the corresponding page ID and work on the latest revision instead. Only `prop=revisions` uses exact revisions for its response.
     */
    revids?: number | number[];
    /**
     * Get the list of pages to work on by executing the specified query module.
     *
     * **Note:** Generator parameter names must be prefixed with a "g", see examples.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballcategories allcategories}**: Enumerate all categories.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balldeletedrevisions alldeletedrevisions}**: List all deleted revisions by a user or in a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballfileusages allfileusages}**: List all file usages, including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballimages allimages}**: Enumerate all images sequentially.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balllinks alllinks}**: Enumerate all links that point to a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballpages allpages}**: Enumerate all pages sequentially in a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballredirects allredirects}**: List all redirects to a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballrevisions allrevisions}**: List all revisions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balltransclusions alltransclusions}**: List all transclusions (pages embedded using {{x}}), including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bbacklinks backlinks}**: Find all pages that link to the given page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategories categories}**: List all categories the pages belong to.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategorymembers categorymembers}**: List all pages in a given category.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdeletedrevisions deletedrevisions}**: Get deleted revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bduplicatefiles duplicatefiles}**: List all files that are duplicates of the given files based on hash values.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bembeddedin embeddedin}**: Find all pages that embed (transclude) the given title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bexturlusage exturlusage}**: Enumerate pages that contain a given URL.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfileusage fileusage}**: Find all pages that use the given files.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgeosearch geosearch}**: Returns pages having coordinates that are located in a certain area.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimages images}**: Returns all files contained on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageusage imageusage}**: Find all pages that use the given image title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Biwbacklinks iwbacklinks}**: Find all pages that link to the given interwiki link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blangbacklinks langbacklinks}**: Find all pages that link to the given language link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinks links}**: Returns all links from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinkshere linkshere}**: Find all pages that link to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmostviewed mostviewed}**: Lists the most viewed pages (based on last day's pageview count).
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Boldreviewedpages oldreviewedpages}**: Enumerates pages that have changes pending review.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageswithprop pageswithprop}**: List all pages using a given page property.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprefixsearch prefixsearch}**: Perform a prefix search for page titles.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprojectpages projectpages}**: List all pages associated with one or more projects.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprotectedtitles protectedtitles}**: List all titles protected from creation.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bquerypage querypage}**: Get a list provided by a QueryPage-based special page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brandom random}**: Get a set of random pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brecentchanges recentchanges}**: Enumerate recent changes.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bredirects redirects}**: Returns all redirects to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brevisions revisions}**: Get revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsearch search}**: Perform a full text search.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btemplates templates}**: Returns all pages transcluded on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btrackingcategories trackingcategories}**: Enumerate all existing tracking categories defined in {@link https://www.mediawiki.org/wiki/Special:TrackingCategories Special:TrackingCategories}. A tracking category exists if it contains pages or if its category page exists.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btranscludedin transcludedin}**: Find all pages that transclude the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlist watchlist}**: Get recent changes to pages in the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlistraw watchlistraw}**: Get all pages on the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwblistentityusage wblistentityusage}**: Returns all pages that use the given entity IDs.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthtasks growthtasks}**: Internal. Get task recommendations suitable for newcomers.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Breadinglistentries readinglistentries}**: Internal. List the pages of a certain list.
     */
    generator?:
        | "allcategories"
        | "alldeletedrevisions"
        | "allfileusages"
        | "allimages"
        | "alllinks"
        | "allpages"
        | "allredirects"
        | "allrevisions"
        | "alltransclusions"
        | "backlinks"
        | "categories"
        | "categorymembers"
        | "deletedrevisions"
        | "duplicatefiles"
        | "embeddedin"
        | "exturlusage"
        | "fileusage"
        | "geosearch"
        | "images"
        | "imageusage"
        | "iwbacklinks"
        | "langbacklinks"
        | "links"
        | "linkshere"
        | "mostviewed"
        | "oldreviewedpages"
        | "pageswithprop"
        | "prefixsearch"
        | "projectpages"
        | "protectedtitles"
        | "querypage"
        | "random"
        | "recentchanges"
        | "redirects"
        | "revisions"
        | "search"
        | "templates"
        | "trackingcategories"
        | "transcludedin"
        | "watchlist"
        | "watchlistraw"
        | "wblistentityusage"
        | "growthtasks"
        | "readinglistentries";
    /**
     * Automatically resolve redirects in `titles`, `pageids`, and `revids`, and in pages returned by `generator`.
     */
    redirects?: boolean;
    /**
     * Convert titles to other variants if necessary. Only works if the wiki's content language supports variant conversion. Languages that support variant conversion include ban, crh, en, gan, iu, ku, mni, sh, shi, sr, tg, tly, uz, wuu, zgh and zh.
     */
    converttitles?: boolean;
}

/**
 * Fetch data from and about MediaWiki.
 *
 * All data modifications will first have to use query to acquire a token to prevent abuse from malicious sites.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Query
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Meta
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Properties
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Lists
 */
export interface ApiQueryParams extends ApiParams {
    /**
     * Which properties to get for the queried pages.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategories categories}**: List all categories the pages belong to.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategoryinfo categoryinfo}**: Returns information about the given categories.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcontributors contributors}**: Get the list of registered contributors (including temporary users) and the count of anonymous contributors to a page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcoordinates coordinates}**: Returns coordinates of the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdeletedrevisions deletedrevisions}**: Get deleted revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bduplicatefiles duplicatefiles}**: List all files that are duplicates of the given files based on hash values.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bextlinks extlinks}**: Returns all external URLs (not interwikis) from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bextracts extracts}**: Returns plain-text or limited HTML extracts of the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfileusage fileusage}**: Find all pages that use the given files.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bflagged flagged}**: Get information about the flagging status of the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bglobalusage globalusage}**: Returns global image usage for a certain image.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthimagesuggestiondata growthimagesuggestiondata}**: Fetch associated {@link https://www.mediawiki.org/wiki/wikitech:Add_Image image suggestion data}, if available
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageinfo imageinfo}**: Returns file information and upload history.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimages images}**: Returns all files contained on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Binfo info}**: Get basic page information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bisreviewed isreviewed}**: Determine if a page is marked as reviewed.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Biwlinks iwlinks}**: Returns all interwiki links from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blanglinks langlinks}**: Returns all interlanguage links from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blanglinkscount langlinkscount}**: Get the number of other language versions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinks links}**: Returns all links from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinkshere linkshere}**: Find all pages that link to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmmcontent mmcontent}**: Get the description and targets of a spamlist
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageassessments pageassessments}**: Return associated projects and assessments for the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageimages pageimages}**: Returns information about images on the page, such as thumbnail and presence of photos.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageprops pageprops}**: Get various page properties defined in the page content.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageterms pageterms}**: Get the Wikidata terms (typically labels, descriptions and aliases) associated with a page via a sitelink.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageviews pageviews}**: Shows per-page pageview data (the number of daily pageviews for each of the last `pvipdays` days).
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bredirects redirects}**: Returns all redirects to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brevisions revisions}**: Get revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bstashimageinfo stashimageinfo}**: Returns file information for stashed files.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btemplates templates}**: Returns all pages transcluded on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btranscludedin transcludedin}**: Find all pages that transclude the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btranscodestatus transcodestatus}**: Get transcode status for a given file page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bvideoinfo videoinfo}**: Extends imageinfo to include video source (derivatives) information
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwbentityusage wbentityusage}**: Returns all entity IDs used in the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcirrusbuilddoc cirrusbuilddoc}**: Internal. Dump of a CirrusSearch article document from the database servers
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcirruscompsuggestbuilddoc cirruscompsuggestbuilddoc}**: Internal. Dump of the document used by the completion suggester
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcirrusdoc cirrusdoc}**: Internal. Dump of a CirrusSearch article document from the search servers
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdescription description}**: Internal. Get a short description a.k.a. subtitle explaining what the target page is about.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmapdata mapdata}**: Internal. Request all Kartographer map data for the given pages
     */
    prop?: OneOrMore<
        | "categories"
        | "categoryinfo"
        | "contributors"
        | "coordinates"
        | "deletedrevisions"
        | "duplicatefiles"
        | "extlinks"
        | "extracts"
        | "fileusage"
        | "flagged"
        | "globalusage"
        | "growthimagesuggestiondata"
        | "imageinfo"
        | "images"
        | "info"
        | "isreviewed"
        | "iwlinks"
        | "langlinks"
        | "langlinkscount"
        | "links"
        | "linkshere"
        | "mmcontent"
        | "pageassessments"
        | "pageimages"
        | "pageprops"
        | "pageterms"
        | "pageviews"
        | "redirects"
        | "revisions"
        | "stashimageinfo"
        | "templates"
        | "transcludedin"
        | "transcodestatus"
        | "videoinfo"
        | "wbentityusage"
        | "cirrusbuilddoc"
        | "cirruscompsuggestbuilddoc"
        | "cirrusdoc"
        | "description"
        | "mapdata"
    >;
    /**
     * Which lists to get.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Babusefilters abusefilters}**: Show details of the edit filters.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Babuselog abuselog}**: Show events that were caught by one of the edit filters.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballcategories allcategories}**: Enumerate all categories.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balldeletedrevisions alldeletedrevisions}**: List all deleted revisions by a user or in a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballfileusages allfileusages}**: List all file usages, including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballimages allimages}**: Enumerate all images sequentially.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balllinks alllinks}**: Enumerate all links that point to a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballpages allpages}**: Enumerate all pages sequentially in a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballredirects allredirects}**: List all redirects to a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballrevisions allrevisions}**: List all revisions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balltransclusions alltransclusions}**: List all transclusions (pages embedded using {{x}}), including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballusers allusers}**: Enumerate all registered users.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bautomatictranslationdenselanguages automatictranslationdenselanguages}**: Fetch the list of sitelinks for the article that corresponds to a given Wikidata ID, ordered by article size.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bbacklinks backlinks}**: Find all pages that link to the given page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bbetafeatures betafeatures}**: List all BetaFeatures
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bblocks blocks}**: List all blocked users and IP addresses.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategorymembers categorymembers}**: List all pages in a given category.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcentralnoticeactivecampaigns centralnoticeactivecampaigns}**: Get a list of currently active campaigns with start and end dates and associated banners.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcentralnoticelogs centralnoticelogs}**: Get a log of campaign configuration changes.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcheckuserlog checkuserlog}**: Get entries from the CheckUser log.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcodexicons codexicons}**: Get Codex icons
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcontenttranslation contenttranslation}**: Query Content Translation database for translations.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcontenttranslationcorpora contenttranslationcorpora}**: Get the section-aligned parallel text for a given translation. See also `list=cxpublishedtranslations`. Dumps are provided in different formats for high volume access.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcontenttranslationfavoritesuggestions contenttranslationfavoritesuggestions}**: Get user's favorite suggestions for Content Translation.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcxpublishedtranslations cxpublishedtranslations}**: Fetch all published translations information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcxtranslatorstats cxtranslatorstats}**: Fetch the translation statistics for the given user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bembeddedin embeddedin}**: Find all pages that embed (transclude) the given title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bexturlusage exturlusage}**: Enumerate pages that contain a given URL.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfilearchive filearchive}**: Enumerate all deleted files sequentially.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgadgetcategories gadgetcategories}**: Returns a list of gadget sections.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgadgets gadgets}**: Returns a list of gadgets used on this wiki.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgeosearch geosearch}**: Returns pages having coordinates that are located in a certain area.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bglobalallusers globalallusers}**: Enumerate all global users.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bglobalblocks globalblocks}**: List all globally blocked IP addresses.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bglobalgroups globalgroups}**: Enumerate all global groups.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bglobalusers globalusers}**: Get information about a list of global users.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthmentorlist growthmentorlist}**: List all the mentors
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthmentormentee growthmentormentee}**: Get all mentees assigned to a given mentor
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthstarredmentees growthstarredmentees}**: Get list of mentees starred by the currently logged in mentor
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageusage imageusage}**: Find all pages that use the given image title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Biwbacklinks iwbacklinks}**: Find all pages that link to the given interwiki link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blangbacklinks langbacklinks}**: Find all pages that link to the given language link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinterrors linterrors}**: Get a list of lint errors
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blogevents logevents}**: Get events from logs.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmostviewed mostviewed}**: Lists the most viewed pages (based on last day's pageview count).
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmystashedfiles mystashedfiles}**: Get a list of files in the current user's upload stash.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Boldreviewedpages oldreviewedpages}**: Enumerates pages that have changes pending review.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpagecollectionsmetadata pagecollectionsmetadata}**: Fetch page collection information for the given title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpagepropnames pagepropnames}**: List all page property names in use on the wiki.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageswithprop pageswithprop}**: List all pages using a given page property.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprefixsearch prefixsearch}**: Perform a prefix search for page titles.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprojectpages projectpages}**: List all pages associated with one or more projects.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprojects projects}**: List all the projects.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprotectedtitles protectedtitles}**: List all titles protected from creation.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bquerypage querypage}**: Get a list provided by a QueryPage-based special page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brandom random}**: Get a set of random pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brecentchanges recentchanges}**: Enumerate recent changes.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsearch search}**: Perform a full text search.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btags tags}**: List change tags.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btrackingcategories trackingcategories}**: Enumerate all existing tracking categories defined in {@link https://www.mediawiki.org/wiki/Special:TrackingCategories Special:TrackingCategories}. A tracking category exists if it contains pages or if its category page exists.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Busercontribs usercontribs}**: Get all edits by a user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Busers users}**: Get information about a list of users.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlist watchlist}**: Get recent changes to pages in the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlistraw watchlistraw}**: Get all pages on the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwblistentityusage wblistentityusage}**: Returns all pages that use the given entity IDs.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwikisets wikisets}**: Enumerate all wiki sets.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcheckuser checkuser}**: Deprecated. **This API has been disabled by the site administrators. Querying the API will return no data.** Check which IP addresses are used by a given username or which usernames are used by a given IP address.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdeletedrevs deletedrevs}**: Deprecated. `list=deletedrevs` has been deprecated. Please use `prop=deletedrevisions` or `list=alldeletedrevisions` instead. List deleted revisions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthtasks growthtasks}**: Internal. Get task recommendations suitable for newcomers.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Breadinglistentries readinglistentries}**: Internal. List the pages of a certain list.
     */
    list?: OneOrMore<
        | "abusefilters"
        | "abuselog"
        | "allcategories"
        | "alldeletedrevisions"
        | "allfileusages"
        | "allimages"
        | "alllinks"
        | "allpages"
        | "allredirects"
        | "allrevisions"
        | "alltransclusions"
        | "allusers"
        | "automatictranslationdenselanguages"
        | "backlinks"
        | "betafeatures"
        | "blocks"
        | "categorymembers"
        | "centralnoticeactivecampaigns"
        | "centralnoticelogs"
        | "checkuserlog"
        | "codexicons"
        | "contenttranslation"
        | "contenttranslationcorpora"
        | "contenttranslationfavoritesuggestions"
        | "cxpublishedtranslations"
        | "cxtranslatorstats"
        | "embeddedin"
        | "exturlusage"
        | "filearchive"
        | "gadgetcategories"
        | "gadgets"
        | "geosearch"
        | "globalallusers"
        | "globalblocks"
        | "globalgroups"
        | "globalusers"
        | "growthmentorlist"
        | "growthmentormentee"
        | "growthstarredmentees"
        | "imageusage"
        | "iwbacklinks"
        | "langbacklinks"
        | "linterrors"
        | "logevents"
        | "mostviewed"
        | "mystashedfiles"
        | "oldreviewedpages"
        | "pagecollectionsmetadata"
        | "pagepropnames"
        | "pageswithprop"
        | "prefixsearch"
        | "projectpages"
        | "projects"
        | "protectedtitles"
        | "querypage"
        | "random"
        | "recentchanges"
        | "search"
        | "tags"
        | "trackingcategories"
        | "usercontribs"
        | "users"
        | "watchlist"
        | "watchlistraw"
        | "wblistentityusage"
        | "wikisets"
        | "checkuser"
        | "deletedrevs"
        | "growthtasks"
        | "readinglistentries"
    >;
    /**
     * Which metadata to get.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballmessages allmessages}**: Return messages from this site.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo authmanagerinfo}**: Retrieve information about the current authentication status.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bbabel babel}**: Get information about what languages the user knows
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcommunityconfiguration communityconfiguration}**: Read the community configuration
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcxconfig cxconfig}**: Get ContentTranslation local configuration settings.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfeatureusage featureusage}**: Get a summary of logged API feature usages for a user agent.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfilerepoinfo filerepoinfo}**: Return meta information about image repositories configured on the wiki.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bglobalpreferences globalpreferences}**: Retrieve global preferences for the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bglobalrenamestatus globalrenamestatus}**: Show information about global renames that are in progress.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bglobaluserinfo globaluserinfo}**: Show information about a global user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthmenteestatus growthmenteestatus}**: Query current user's mentee status; see documentation of action=growthsetmenteestatus for detailed information about individual statuses.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthmentorstatus growthmentorstatus}**: Query current user's mentor status
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blanguageinfo languageinfo}**: Return information about available languages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinterstats linterstats}**: Get number of lint errors in each category
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bnotifications notifications}**: Get notifications waiting for the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bores ores}**: Return ORES configuration and model data for this wiki.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsiteinfo siteinfo}**: Return general information about the site.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsiteviews siteviews}**: Shows sitewide pageview data (daily pageview totals for each of the last `pvisdays` days).
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens tokens}**: Gets tokens for data-modifying actions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bunreadnotificationpages unreadnotificationpages}**: Get pages for which there are unread notifications for the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Buserinfo userinfo}**: Get information about the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwikibase wikibase}**: Get information about the Wikibase client and the associated Wikibase repository.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcheckuserformattedblockinfo checkuserformattedblockinfo}**: Internal. Return formatted block details for sitewide blocks affecting the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcxdeletedtranslations cxdeletedtranslations}**: Internal. Get the number of your published translations that were deleted.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthnextsuggestedtasktype growthnextsuggestedtasktype}**: Internal. Get a suggested task type for a user to try next.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Breadinglists readinglists}**: Internal. List or filter the user's reading lists and show metadata about them.
     */
    meta?: OneOrMore<
        | "allmessages"
        | "authmanagerinfo"
        | "babel"
        | "communityconfiguration"
        | "cxconfig"
        | "featureusage"
        | "filerepoinfo"
        | "globalpreferences"
        | "globalrenamestatus"
        | "globaluserinfo"
        | "growthmenteestatus"
        | "growthmentorstatus"
        | "languageinfo"
        | "linterstats"
        | "notifications"
        | "ores"
        | "siteinfo"
        | "siteviews"
        | "tokens"
        | "unreadnotificationpages"
        | "userinfo"
        | "wikibase"
        | "checkuserformattedblockinfo"
        | "cxdeletedtranslations"
        | "growthnextsuggestedtasktype"
        | "readinglists"
    >;
    /**
     * Include an additional pageids section listing all returned page IDs.
     */
    indexpageids?: boolean;
    /**
     * Export the current revisions of all given or generated pages.
     */
    export?: boolean;
    /**
     * Return the export XML without wrapping it in an XML result (same format as {@link https://www.mediawiki.org/wiki/Special:Export Special:Export}). Can only be used with query+export.
     */
    exportnowrap?: boolean;
    /**
     * Target the given version of the XML dump format when exporting. Can only be used with `query+export`.
     *
     * Defaults to `0.11`.
     */
    exportschema?: "0.10" | "0.11";
    /**
     * Whether to get the full URL if the title is an interwiki link.
     */
    iwurl?: boolean;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    continue?: string;
    /**
     * Return raw `query-continue` data for continuation.
     */
    rawcontinue?: boolean;
    /**
     * A list of titles to work on.
     */
    titles?: string | string[];
    /**
     * A list of page IDs to work on.
     */
    pageids?: number | number[];
    /**
     * A list of revision IDs to work on. Note that almost all query modules will convert revision IDs to the corresponding page ID and work on the latest revision instead. Only `prop=revisions` uses exact revisions for its response.
     */
    revids?: number | number[];
    /**
     * Get the list of pages to work on by executing the specified query module.
     *
     * **Note:** Generator parameter names must be prefixed with a "g", see examples.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballcategories allcategories}**: Enumerate all categories.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balldeletedrevisions alldeletedrevisions}**: List all deleted revisions by a user or in a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballfileusages allfileusages}**: List all file usages, including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballimages allimages}**: Enumerate all images sequentially.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balllinks alllinks}**: Enumerate all links that point to a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballpages allpages}**: Enumerate all pages sequentially in a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballredirects allredirects}**: List all redirects to a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballrevisions allrevisions}**: List all revisions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balltransclusions alltransclusions}**: List all transclusions (pages embedded using {{x}}), including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bbacklinks backlinks}**: Find all pages that link to the given page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategories categories}**: List all categories the pages belong to.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategorymembers categorymembers}**: List all pages in a given category.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdeletedrevisions deletedrevisions}**: Get deleted revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bduplicatefiles duplicatefiles}**: List all files that are duplicates of the given files based on hash values.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bembeddedin embeddedin}**: Find all pages that embed (transclude) the given title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bexturlusage exturlusage}**: Enumerate pages that contain a given URL.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfileusage fileusage}**: Find all pages that use the given files.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgeosearch geosearch}**: Returns pages having coordinates that are located in a certain area.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimages images}**: Returns all files contained on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageusage imageusage}**: Find all pages that use the given image title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Biwbacklinks iwbacklinks}**: Find all pages that link to the given interwiki link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blangbacklinks langbacklinks}**: Find all pages that link to the given language link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinks links}**: Returns all links from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinkshere linkshere}**: Find all pages that link to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmostviewed mostviewed}**: Lists the most viewed pages (based on last day's pageview count).
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Boldreviewedpages oldreviewedpages}**: Enumerates pages that have changes pending review.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageswithprop pageswithprop}**: List all pages using a given page property.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprefixsearch prefixsearch}**: Perform a prefix search for page titles.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprojectpages projectpages}**: List all pages associated with one or more projects.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprotectedtitles protectedtitles}**: List all titles protected from creation.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bquerypage querypage}**: Get a list provided by a QueryPage-based special page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brandom random}**: Get a set of random pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brecentchanges recentchanges}**: Enumerate recent changes.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bredirects redirects}**: Returns all redirects to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brevisions revisions}**: Get revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsearch search}**: Perform a full text search.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btemplates templates}**: Returns all pages transcluded on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btrackingcategories trackingcategories}**: Enumerate all existing tracking categories defined in {@link https://www.mediawiki.org/wiki/Special:TrackingCategories Special:TrackingCategories}. A tracking category exists if it contains pages or if its category page exists.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btranscludedin transcludedin}**: Find all pages that transclude the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlist watchlist}**: Get recent changes to pages in the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlistraw watchlistraw}**: Get all pages on the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwblistentityusage wblistentityusage}**: Returns all pages that use the given entity IDs.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthtasks growthtasks}**: Internal. Get task recommendations suitable for newcomers.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Breadinglistentries readinglistentries}**: Internal. List the pages of a certain list.
     */
    generator?:
        | "allcategories"
        | "alldeletedrevisions"
        | "allfileusages"
        | "allimages"
        | "alllinks"
        | "allpages"
        | "allredirects"
        | "allrevisions"
        | "alltransclusions"
        | "backlinks"
        | "categories"
        | "categorymembers"
        | "deletedrevisions"
        | "duplicatefiles"
        | "embeddedin"
        | "exturlusage"
        | "fileusage"
        | "geosearch"
        | "images"
        | "imageusage"
        | "iwbacklinks"
        | "langbacklinks"
        | "links"
        | "linkshere"
        | "mostviewed"
        | "oldreviewedpages"
        | "pageswithprop"
        | "prefixsearch"
        | "projectpages"
        | "protectedtitles"
        | "querypage"
        | "random"
        | "recentchanges"
        | "redirects"
        | "revisions"
        | "search"
        | "templates"
        | "trackingcategories"
        | "transcludedin"
        | "watchlist"
        | "watchlistraw"
        | "wblistentityusage"
        | "growthtasks"
        | "readinglistentries";
    /**
     * Automatically resolve redirects in `query+titles`, `query+pageids`, and `query+revids`, and in pages returned by `query+generator`.
     */
    redirects?: boolean;
    /**
     * Convert titles to other variants if necessary. Only works if the wiki's content language supports variant conversion. Languages that support variant conversion include ban, crh, en, gan, iu, ku, mni, sh, shi, sr, tg, tly, uz, wuu, zgh and zh.
     */
    converttitles?: boolean;
}

/**
 * Output data, including debugging elements, in JSON format (pretty-print in HTML).
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
 */
export interface ApiFormatJsonParams extends ApiParams {
    /**
     * Return the pretty-printed HTML and associated ResourceLoader modules as a JSON object.
     */
    wrappedhtml?: boolean;
}

/**
 * Reading list write operations.
 *
 * Create/update/delete/sort reading lists and entries. See the documentation of the various commands for details.
 *
 * @private
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
 */
export interface ReadingListsApiReadingListsParams extends ApiParams {
    /**
     * Command (API submodule) for reading list write operations.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/readinglists%2Bcreate create}**: Internal. Create a new list for the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/readinglists%2Bcreateentry createentry}**: Internal. Add a new page to a list belonging to the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/readinglists%2Bdelete delete}**: Internal. Delete a list belonging to the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/readinglists%2Bdeleteentry deleteentry}**: Internal. Delete a page from a list belonging to the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/readinglists%2Bsetup setup}**: Internal. Enable lists for the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/readinglists%2Bteardown teardown}**: Internal. Disable lists for the current user.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/readinglists%2Bupdate update}**: Internal. Update a list belonging to the current user.
     */
    command?: "create" | "createentry" | "delete" | "deleteentry" | "setup" | "teardown" | "update";
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Remove authentication data for the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data
 */
export interface ApiRemoveAuthenticationDataParams extends ApiParams {
    /**
     * Use this authentication request, by the `id` returned from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=remove`.
     */
    request?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Send a password reset email to a user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data
 */
export interface ApiResetPasswordParams extends ApiParams {
    /**
     * User being reset.
     */
    user?: string;
    /**
     * Email address of the user being reset.
     */
    email?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Review a revision by approving or de-approving it.
 */
export interface ApiReviewParams extends ApiParams {
    /**
     * The revision ID for which to set the flags.
     */
    revid?: string;
    /**
     * Comment for the review.
     */
    comment?: string;
    /**
     * If set, revision will be unapproved rather than approved.
     */
    unapprove?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Delete and undelete revisions.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisiondelete
 */
export interface ApiRevisionDeleteParams extends ApiParams {
    /**
     * Type of revision deletion being performed.
     */
    type?: "archive" | "filearchive" | "logging" | "oldimage" | "revision";
    /**
     * Page title for the revision deletion, if required for the type.
     */
    target?: string;
    /**
     * Identifiers for the revisions to be deleted.
     */
    ids?: string | string[];
    /**
     * What to hide for each revision.
     */
    hide?: OneOrMore<"comment" | "content" | "user">;
    /**
     * What to unhide for each revision.
     */
    show?: OneOrMore<"comment" | "content" | "user">;
    /**
     * Whether to suppress data from administrators as well as others.
     *
     * Defaults to `nochange`.
     */
    suppress?: "no" | "nochange" | "yes";
    /**
     * Reason for the deletion or undeletion.
     */
    reason?: string;
    /**
     * Tags to apply to the entry in the deletion log.
     */
    tags?: string | string[];
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Undo the last edit to the page.
 *
 * If the last user who edited the page made multiple edits in a row, they will all be rolled back.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Rollback
 */
export interface ApiRollbackParams extends ApiParams {
    /**
     * Title of the page to roll back. Cannot be used together with `pageid`.
     */
    title?: string;
    /**
     * Page ID of the page to roll back. Cannot be used together with `title`.
     */
    pageid?: number;
    /**
     * Tags to apply to the rollback.
     */
    tags?: string | string[];
    /**
     * Name of the user whose edits are to be rolled back.
     */
    user?: string;
    /**
     * Custom edit summary. If empty, default summary will be used.
     *
     * Defaults to an empty string.
     */
    summary?: string;
    /**
     * Mark the reverted edits and the revert as bot edits.
     */
    markbot?: boolean;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     *
     * Defaults to `preferences`.
     */
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * A "rollback" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * For compatibility, the token used in the web UI is also accepted.
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Export an RSD (Really Simple Discovery) schema.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Rsd
 */
export interface ApiRsdParams extends ApiParams {}

/**
 * Performs data validation for Kartographer extension
 *
 * @private
 */
export interface KartographerApiSanitizeMapDataParams extends ApiParams {
    /**
     * Title of page on which this GeoJSON is supposed to be located. If no title is provided, a dummy one will be used.
     *
     * Defaults to `Dummy title (called from Kartographer\Api\ApiSanitizeMapData)`.
     */
    title?: string;
    /**
     * GeoJSON to sanitize
     */
    text?: string;
}

/**
 * Internal module for servicing XHR requests from the Scribunto console.
 *
 * @private
 */
export interface ScribuntoApiScribuntoConsoleParams extends ApiParams {
    /**
     * The title of the module to test.
     */
    title?: string;
    /**
     * The new content of the module.
     */
    content?: string;
    /**
     * Session token.
     */
    session?: number;
    /**
     * The next line to evaluate as a script.
     */
    question?: string;
    /**
     * Set to clear the current session state.
     */
    clear?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Allows a remote wiki to authenticate users before granting access to vote in the election.
 *
 * @private
 */
export interface SecurePollApiSecurePollAuthParams extends ApiParams {
    /**
     * A token based on the user's login token.
     */
    token?: string;
    /**
     * The ID of the user who intends to vote.
     */
    id?: number;
}

/**
 * Hide or lock (or unhide or unlock) a global user account.
 */
export interface CentralAuthApiSetGlobalAccountStatusParams extends ApiParams {
    /**
     * User to change the status of.
     */
    user?: string;
    /**
     * Change whether this user is locked or not.
     */
    locked?: "" | "lock" | "unlock";
    /**
     * Change whether this user is not hidden, hidden from the global users list, or suppressed.
     */
    hidden?: "" | "lists" | "suppressed";
    /**
     * Reason for changing the user's status.
     */
    reason?: string;
    /**
     * Optional MD5 of the expected current `userid:username:hidden:locked`. This is used to detect edit conflicts. The value of `hidden` must be an empty string if not hidden or the strings `lists` or `suppressed`. The value of `locked` must be 1 for locked, 0 for unlocked. Examples: `2128506:LeeSmith::0`; `3839611:VandalGoblin:suppressed:1`.
     */
    statecheck?: string;
    /**
     * A "setglobalaccountstatus" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Update the notification timestamp for watched pages.
 *
 * This affects the highlighting of changed pages in the watchlist and history, and the sending of email when the "Email me when a page or a file on my watchlist is changed" preference is enabled.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:SetNotificationTimestamp
 */
export interface ApiSetNotificationTimestampParams extends ApiParams {
    /**
     * Work on all watched pages.
     */
    entirewatchlist?: boolean;
    /**
     * Timestamp to which to set the notification timestamp.
     */
    timestamp?: timestamp;
    /**
     * Revision to set the notification timestamp to (one page only).
     */
    torevid?: number;
    /**
     * Revision to set the notification timestamp newer than (one page only).
     */
    newerthanrevid?: number;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    continue?: string;
    /**
     * A list of titles to work on.
     */
    titles?: string | string[];
    /**
     * A list of page IDs to work on.
     */
    pageids?: number | number[];
    /**
     * A list of revision IDs to work on. Note that almost all query modules will convert revision IDs to the corresponding page ID and work on the latest revision instead. Only `prop=revisions` uses exact revisions for its response.
     */
    revids?: number | number[];
    /**
     * Get the list of pages to work on by executing the specified query module.
     *
     * **Note:** Generator parameter names must be prefixed with a "g", see examples.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballcategories allcategories}**: Enumerate all categories.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balldeletedrevisions alldeletedrevisions}**: List all deleted revisions by a user or in a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballfileusages allfileusages}**: List all file usages, including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballimages allimages}**: Enumerate all images sequentially.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balllinks alllinks}**: Enumerate all links that point to a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballpages allpages}**: Enumerate all pages sequentially in a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballredirects allredirects}**: List all redirects to a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballrevisions allrevisions}**: List all revisions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balltransclusions alltransclusions}**: List all transclusions (pages embedded using {{x}}), including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bbacklinks backlinks}**: Find all pages that link to the given page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategories categories}**: List all categories the pages belong to.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategorymembers categorymembers}**: List all pages in a given category.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdeletedrevisions deletedrevisions}**: Get deleted revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bduplicatefiles duplicatefiles}**: List all files that are duplicates of the given files based on hash values.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bembeddedin embeddedin}**: Find all pages that embed (transclude) the given title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bexturlusage exturlusage}**: Enumerate pages that contain a given URL.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfileusage fileusage}**: Find all pages that use the given files.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgeosearch geosearch}**: Returns pages having coordinates that are located in a certain area.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimages images}**: Returns all files contained on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageusage imageusage}**: Find all pages that use the given image title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Biwbacklinks iwbacklinks}**: Find all pages that link to the given interwiki link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blangbacklinks langbacklinks}**: Find all pages that link to the given language link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinks links}**: Returns all links from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinkshere linkshere}**: Find all pages that link to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmostviewed mostviewed}**: Lists the most viewed pages (based on last day's pageview count).
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Boldreviewedpages oldreviewedpages}**: Enumerates pages that have changes pending review.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageswithprop pageswithprop}**: List all pages using a given page property.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprefixsearch prefixsearch}**: Perform a prefix search for page titles.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprojectpages projectpages}**: List all pages associated with one or more projects.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprotectedtitles protectedtitles}**: List all titles protected from creation.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bquerypage querypage}**: Get a list provided by a QueryPage-based special page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brandom random}**: Get a set of random pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brecentchanges recentchanges}**: Enumerate recent changes.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bredirects redirects}**: Returns all redirects to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brevisions revisions}**: Get revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsearch search}**: Perform a full text search.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btemplates templates}**: Returns all pages transcluded on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btrackingcategories trackingcategories}**: Enumerate all existing tracking categories defined in {@link https://www.mediawiki.org/wiki/Special:TrackingCategories Special:TrackingCategories}. A tracking category exists if it contains pages or if its category page exists.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btranscludedin transcludedin}**: Find all pages that transclude the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlist watchlist}**: Get recent changes to pages in the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlistraw watchlistraw}**: Get all pages on the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwblistentityusage wblistentityusage}**: Returns all pages that use the given entity IDs.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthtasks growthtasks}**: Internal. Get task recommendations suitable for newcomers.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Breadinglistentries readinglistentries}**: Internal. List the pages of a certain list.
     */
    generator?:
        | "allcategories"
        | "alldeletedrevisions"
        | "allfileusages"
        | "allimages"
        | "alllinks"
        | "allpages"
        | "allredirects"
        | "allrevisions"
        | "alltransclusions"
        | "backlinks"
        | "categories"
        | "categorymembers"
        | "deletedrevisions"
        | "duplicatefiles"
        | "embeddedin"
        | "exturlusage"
        | "fileusage"
        | "geosearch"
        | "images"
        | "imageusage"
        | "iwbacklinks"
        | "langbacklinks"
        | "links"
        | "linkshere"
        | "mostviewed"
        | "oldreviewedpages"
        | "pageswithprop"
        | "prefixsearch"
        | "projectpages"
        | "protectedtitles"
        | "querypage"
        | "random"
        | "recentchanges"
        | "redirects"
        | "revisions"
        | "search"
        | "templates"
        | "trackingcategories"
        | "transcludedin"
        | "watchlist"
        | "watchlistraw"
        | "wblistentityusage"
        | "growthtasks"
        | "readinglistentries";
    /**
     * Automatically resolve redirects in `titles`, `pageids`, and `revids`, and in pages returned by `generator`.
     */
    redirects?: boolean;
    /**
     * Convert titles to other variants if necessary. Only works if the wiki's content language supports variant conversion. Languages that support variant conversion include ban, crh, en, gan, iu, ku, mni, sh, shi, sr, tg, tly, uz, wuu, zgh and zh.
     */
    converttitles?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Change the language of a page.
 *
 * Changing the language of a page is not allowed on this wiki.
 *
 * Enable {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgPageLanguageUseDB `$wgPageLanguageUseDB`} to use this action.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:SetPageLanguage
 */
export interface ApiSetPageLanguageParams extends ApiParams {
    /**
     * Title of the page whose language you wish to change. Cannot be used together with `pageid`.
     */
    title?: string;
    /**
     * Page ID of the page whose language you wish to change. Cannot be used together with `title`.
     */
    pageid?: number;
    /**
     * Language code of the language to change the page to. Use `default` to reset the page to the wiki's default content language.
     */
    lang?: string;
    /**
     * Reason for the change.
     */
    reason?: string;
    /**
     * Change tags to apply to the log entry resulting from this action.
     */
    tags?: string | string[];
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Shorten a long URL into a shorter one.
 */
export interface UrlShortenerApiShortenUrlParams extends ApiParams {
    /**
     * URL to be shortened.
     */
    url?: string;
    /**
     * Get a QR code. The linked URL will only be shortened if it is very long.
     */
    qrcode?: boolean;
}

/**
 * Get Wikimedia sites list.
 *
 * The code (technically dbname/wikiid) is either the language code + project code for content projects or the subdomain + main domain for all the others.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Sitematrix
 */
export interface SiteMatrixApiSiteMatrixParams extends ApiParams {
    /**
     * Filter the Site Matrix by type:
     *
     * - **special**: One off and multilingual Wikimedia projects.
     * - **language**: Wikimedia projects under this language code.
     *
     * Defaults to `special` and `language`.
     */
    smtype?: OneOrMore<"language" | "special">;
    /**
     * Filter the Site Matrix by wiki state.
     *
     * Defaults to `all`.
     */
    smstate?: OneOrMore<"all" | "closed" | "fishbowl" | "nonglobal" | "private">;
    /**
     * Which information about a language to return.
     *
     * Defaults to `code`, `name`, `site`, `dir`, and `localname`.
     */
    smlangprop?: OneOrMore<"code" | "dir" | "localname" | "name" | "site">;
    /**
     * Which information about a site to return.
     *
     * Defaults to `url`, `dbname`, `code`, and `sitename`.
     */
    smsiteprop?: OneOrMore<"code" | "dbname" | "lang" | "sitename" | "url">;
    /**
     * Maximum number of results.
     *
     * Defaults to 5000.
     */
    smlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    smcontinue?: string;
}

/**
 * Validate one or more URLs against the spam block list.
 *
 * @see https://www.mediawiki.org/wiki/Extension:SpamBlacklist/API
 */
export interface SpamBlacklistApiSpamBlacklistParams extends ApiParams {
    /**
     * URLs to validate against the block list.
     */
    url?: string | string[];
}

/**
 * Configure review-protection settings for a page.
 */
export interface ApiStabilizeProtectParams extends ApiParams {
    /**
     * The review-protection level.
     *
     * Defaults to `none`.
     */
    protectlevel?: "autoconfirmed" | "none";
    /**
     * Review-protection expiry.
     *
     * Defaults to `infinite`.
     */
    expiry?: string;
    /**
     * Reason.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Title of the page to be review-protected.
     */
    title?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Prepare an edit in shared cache.
 *
 * This is intended to be used via AJAX from the edit form to improve the performance of the page save.
 *
 * @private
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Stashedit
 */
export interface ApiStashEditParams extends ApiParams {
    /**
     * Title of the page being edited.
     */
    title?: string;
    /**
     * Section identifier. `0` for the top section, `new` for a new section.
     */
    section?: string;
    /**
     * The title for a new section.
     */
    sectiontitle?: string;
    /**
     * Page content.
     */
    text?: string;
    /**
     * Page content hash from a prior stash to use instead.
     */
    stashedtexthash?: string;
    /**
     * Change summary.
     *
     * Defaults to an empty string.
     */
    summary?: string;
    /**
     * Content model of the new content.
     */
    contentmodel?: string;
    /**
     * Content serialization format used for the input text.
     */
    contentformat?: string;
    /**
     * Revision ID of the base revision.
     */
    baserevid?: number;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Exposes event stream config. Returns only format=json with formatversion=2.
 *
 * @see https://www.mediawiki.org/wiki/Extension:EventStreamConfig
 */
export interface EventStreamConfigApiStreamConfigsParams extends ApiParams {
    /**
     * List of streams to get config for
     */
    streams?: string | string[];
    /**
     * Filter results for stream config entries that have these settings
     */
    constraints?: string | string[];
    /**
     * Include all settings in stream config results. Deprecated since 1.41. All settings are included by default.
     *
     * @deprecated
     */
    all_settings?: boolean;
}

/**
 * Allows admins to strike or unstrike a vote.
 */
export interface SecurePollApiStrikeVoteParams extends ApiParams {
    /**
     * Which action to take: strike or unstrike a vote.
     *
     * - **strike**: Strike a vote (remove it from the count).
     * - **unstrike**: Unstrike a vote (restore it to the count).
     */
    option?: "strike" | "unstrike";
    /**
     * The reason for striking or unstriking the vote.
     */
    reason?: string;
    /**
     * The ID of the vote to be struck or unstruck.
     */
    voteid?: number;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Delete the draft section translation and its parallel corpora from database.
 */
export interface ContentTranslationActionApiSectionTranslationDeleteParams extends ApiParams {
    /**
     * The section translation id associated with the draft section translation.
     */
    sectiontranslationid?: number;
    /**
     * The translation id associated with the draft section translation.
     */
    translationid?: number;
    /**
     * The id of the section of the draft section translation.
     */
    sectionid?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Save the draft section translation and store the parallel corpora
 *
 * @private
 */
export interface ContentTranslationActionApiSectionTranslationSaveParams extends ApiParams {
    /**
     * The source language code.
     */
    sourcelanguage?: string;
    /**
     * The target language code.
     */
    targetlanguage?: string;
    /**
     * The title of the source page.
     */
    sourcetitle?: string;
    /**
     * The title of the target page.
     */
    targettitle?: string;
    /**
     * JSON-encoded section data. Each section is an object and has the following keys: content, sectionId, origin, validate
     */
    content?: string;
    /**
     * The source page revision id.
     */
    sourcerevision?: number;
    /**
     * The title of the source section.
     */
    sourcesectiontitle?: string;
    /**
     * The title of the target section.
     */
    targetsectiontitle?: string;
    /**
     * The page section id.
     */
    sectionid?: string;
    /**
     * Use a sandbox title for translation.
     */
    issandbox?: boolean;
    /**
     * The progress of the translation.
     */
    progress?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Add or remove change tags from individual revisions or log entries.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tag
 */
export interface ApiTagParams extends ApiParams {
    /**
     * One or more recent changes IDs from which to add or remove the tag.
     */
    rcid?: number | number[];
    /**
     * One or more revision IDs from which to add or remove the tag.
     */
    revid?: number | number[];
    /**
     * One or more log entry IDs from which to add or remove the tag.
     */
    logid?: number | number[];
    /**
     * Tags to add. Only manually defined tags can be added.
     */
    add?: string | string[];
    /**
     * Tags to remove. Only tags that are either manually defined or completely undefined can be removed.
     */
    remove?: string | string[];
    /**
     * Reason for the change.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Tags to apply to the log entry that will be created as a result of this action.
     */
    tags?: string | string[];
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Fetch data stored by the TemplateData extension.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TemplateData
 */
export interface TemplateDataApiTemplateDataParams extends ApiParams {
    /**
     * Return data about titles even if they are missing or lack TemplateData. By default titles are only returned if they exist and have TemplateData.
     */
    includeMissingTitles?: boolean;
    /**
     * Return data about titles even if they are missing or lack TemplateData. By default (for backwards compatibility) titles are only returned if they exist and have TemplateData.
     *
     * @deprecated
     */
    doNotIgnoreMissingTitles?: boolean;
    /**
     * Return localized values in this language. By default all available translations are returned.
     */
    lang?: string;
    /**
     * A list of titles to work on.
     */
    titles?: string | string[];
    /**
     * A list of page IDs to work on.
     */
    pageids?: number | number[];
    /**
     * A list of revision IDs to work on. Note that almost all query modules will convert revision IDs to the corresponding page ID and work on the latest revision instead. Only `prop=revisions` uses exact revisions for its response.
     */
    revids?: number | number[];
    /**
     * Get the list of pages to work on by executing the specified query module.
     *
     * **Note:** Generator parameter names must be prefixed with a "g", see examples.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballcategories allcategories}**: Enumerate all categories.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balldeletedrevisions alldeletedrevisions}**: List all deleted revisions by a user or in a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballfileusages allfileusages}**: List all file usages, including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballimages allimages}**: Enumerate all images sequentially.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balllinks alllinks}**: Enumerate all links that point to a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballpages allpages}**: Enumerate all pages sequentially in a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballredirects allredirects}**: List all redirects to a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballrevisions allrevisions}**: List all revisions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balltransclusions alltransclusions}**: List all transclusions (pages embedded using {{x}}), including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bbacklinks backlinks}**: Find all pages that link to the given page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategories categories}**: List all categories the pages belong to.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategorymembers categorymembers}**: List all pages in a given category.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdeletedrevisions deletedrevisions}**: Get deleted revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bduplicatefiles duplicatefiles}**: List all files that are duplicates of the given files based on hash values.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bembeddedin embeddedin}**: Find all pages that embed (transclude) the given title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bexturlusage exturlusage}**: Enumerate pages that contain a given URL.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfileusage fileusage}**: Find all pages that use the given files.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgeosearch geosearch}**: Returns pages having coordinates that are located in a certain area.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimages images}**: Returns all files contained on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageusage imageusage}**: Find all pages that use the given image title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Biwbacklinks iwbacklinks}**: Find all pages that link to the given interwiki link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blangbacklinks langbacklinks}**: Find all pages that link to the given language link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinks links}**: Returns all links from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinkshere linkshere}**: Find all pages that link to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmostviewed mostviewed}**: Lists the most viewed pages (based on last day's pageview count).
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Boldreviewedpages oldreviewedpages}**: Enumerates pages that have changes pending review.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageswithprop pageswithprop}**: List all pages using a given page property.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprefixsearch prefixsearch}**: Perform a prefix search for page titles.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprojectpages projectpages}**: List all pages associated with one or more projects.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprotectedtitles protectedtitles}**: List all titles protected from creation.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bquerypage querypage}**: Get a list provided by a QueryPage-based special page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brandom random}**: Get a set of random pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brecentchanges recentchanges}**: Enumerate recent changes.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bredirects redirects}**: Returns all redirects to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brevisions revisions}**: Get revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsearch search}**: Perform a full text search.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btemplates templates}**: Returns all pages transcluded on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btrackingcategories trackingcategories}**: Enumerate all existing tracking categories defined in {@link https://www.mediawiki.org/wiki/Special:TrackingCategories Special:TrackingCategories}. A tracking category exists if it contains pages or if its category page exists.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btranscludedin transcludedin}**: Find all pages that transclude the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlist watchlist}**: Get recent changes to pages in the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlistraw watchlistraw}**: Get all pages on the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwblistentityusage wblistentityusage}**: Returns all pages that use the given entity IDs.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthtasks growthtasks}**: Internal. Get task recommendations suitable for newcomers.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Breadinglistentries readinglistentries}**: Internal. List the pages of a certain list.
     */
    generator?:
        | "allcategories"
        | "alldeletedrevisions"
        | "allfileusages"
        | "allimages"
        | "alllinks"
        | "allpages"
        | "allredirects"
        | "allrevisions"
        | "alltransclusions"
        | "backlinks"
        | "categories"
        | "categorymembers"
        | "deletedrevisions"
        | "duplicatefiles"
        | "embeddedin"
        | "exturlusage"
        | "fileusage"
        | "geosearch"
        | "images"
        | "imageusage"
        | "iwbacklinks"
        | "langbacklinks"
        | "links"
        | "linkshere"
        | "mostviewed"
        | "oldreviewedpages"
        | "pageswithprop"
        | "prefixsearch"
        | "projectpages"
        | "protectedtitles"
        | "querypage"
        | "random"
        | "recentchanges"
        | "redirects"
        | "revisions"
        | "search"
        | "templates"
        | "trackingcategories"
        | "transcludedin"
        | "watchlist"
        | "watchlistraw"
        | "wblistentityusage"
        | "growthtasks"
        | "readinglistentries";
    /**
     * Automatically resolve redirects in `titles`, `pageids`, and `revids`, and in pages returned by `generator`.
     */
    redirects?: boolean;
    /**
     * Convert titles to other variants if necessary. Only works if the wiki's content language supports variant conversion. Languages that support variant conversion include ban, crh, en, gan, iu, ku, mni, sh, shi, sr, tg, tly, uz, wuu, zgh and zh.
     */
    converttitles?: boolean;
}

/**
 * Send a thank-you notification to an editor.
 *
 * @see https://www.mediawiki.org/wiki/Extension:Thanks#API_Documentation
 */
export interface ThanksApiCoreThankParams extends ApiParams {
    /**
     * Revision ID to thank someone for. This or 'log' must be provided.
     */
    rev?: number;
    /**
     * Log ID to thank someone for. This or 'rev' must be provided.
     */
    log?: number;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * A short string describing the source of the request, for example `diff` or `history`.
     */
    source?: string;
}

/**
 * Provides timed text content for usage by <track> elements
 *
 * @private
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TimedMediaHandler
 */
export interface TimedMediaHandlerApiTimedTextParams extends ApiParams {
    /**
     * The media file title for which to retrieve timed text
     */
    title?: string;
    /**
     * The pageid of the media file for which to retrieve timed text
     */
    pageid?: number;
    /**
     * The file format in which to return timed text
     */
    trackformat?: "srt" | "vtt";
    /**
     * The language of the timed text to retrieve
     */
    lang?: string;
}

/**
 * Validate a page title, filename, or username against the TitleBlacklist.
 */
export interface TitleBlacklistApiTitleBlacklistParams extends ApiParams {
    /**
     * The string to validate against the blacklist.
     */
    tbtitle?: string;
    /**
     * The action to be checked.
     *
     * Defaults to `edit`.
     */
    tbaction?: "create" | "createpage" | "createtalk" | "edit" | "move" | "new-account" | "upload";
    /**
     * Don't try to override the titleblacklist.
     */
    tbnooverride?: boolean;
}

/**
 * Check if an IP address is blocked as a Tor exit node.
 */
export interface TorBlockApiTorBlockParams extends ApiParams {
    /**
     * The IP address to check.
     */
    ip?: string;
}

/**
 * Users with the 'transcode-reset' right can reset and re-run a transcode job.
 */
export interface TimedMediaHandlerApiTranscodeResetParams extends ApiParams {
    /**
     * The media file title.
     */
    title?: string;
    /**
     * The transcode key you wish to reset. Fetch from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btranscodestatus action=query&prop=transcodestatus}.
     */
    transcodekey?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Get the localization of ULS in the given language.
 *
 * @private
 */
export interface UniversalLanguageSelectorApiULSLocalizationParams extends ApiParams {
    /**
     * Language code.
     */
    language?: string;
}

/**
 * Update user's preferred interface language.
 *
 * @private
 */
export interface UniversalLanguageSelectorApiULSSetLanguageParams extends ApiParams {
    /**
     * The preferred language code.
     */
    languagecode?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Unblock a user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Block
 */
export interface ApiUnblockParams extends ApiParams {
    /**
     * ID of the block to unblock (obtained through `list=blocks`). Cannot be used together with `user`.
     */
    id?: number;
    /**
     * User to unblock. Cannot be used together with `id`.
     */
    user?: string;
    /**
     * Specify `user=#`ID`` instead.
     *
     * @deprecated
     */
    userid?: number;
    /**
     * Reason for unblock.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Change tags to apply to the entry in the block log.
     */
    tags?: string | string[];
    /**
     * Watch the user's or IP address's user and talk pages.
     */
    watchuser?: boolean;
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Undelete revisions of a deleted page.
 *
 * A list of deleted revisions (including timestamps) can be retrieved through {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdeletedrevisions prop=deletedrevisions}, and a list of deleted file IDs can be retrieved through {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfilearchive list=filearchive}.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Undelete
 */
export interface ApiUndeleteParams extends ApiParams {
    /**
     * Title of the page to undelete.
     */
    title?: string;
    /**
     * Reason for restoring.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * Change tags to apply to the entry in the deletion log.
     */
    tags?: string | string[];
    /**
     * Timestamps of the revisions to undelete. If both `timestamps` and `fileids` are empty, all will be undeleted.
     */
    timestamps?: timestamp | timestamp[];
    /**
     * IDs of the file revisions to restore. If both `timestamps` and `fileids` are empty, all will be restored.
     */
    fileids?: number | number[];
    /**
     * Undelete all revisions of the associated talk page, if any.
     */
    undeletetalk?: boolean;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     *
     * Defaults to `preferences`.
     */
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Remove a linked third-party account from the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data
 */
export interface ApiRemoveAuthenticationDataParams extends ApiParams {
    /**
     * Use this authentication request, by the `id` returned from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bauthmanagerinfo `action=query&meta=authmanagerinfo`} with `amirequestsfor=unlink`.
     */
    request?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Upload a file, or get the status of pending uploads.
 *
 * Several methods are available:
 *
 * - Upload file contents directly, using the `file` parameter.
 * - Upload the file in pieces, using the `filesize`, `chunk`, and `offset` parameters.
 * - Have the MediaWiki server fetch a file from a URL, using the `url` parameter.
 * - Complete an earlier upload that failed due to warnings, was uploaded in pieces, or stored otherwise in the upload stash, using the `filekey` parameter.
 * Note that the HTTP POST must be done as a file upload (i.e. using `multipart/form-data`) when sending the `file` or `chunk`.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Upload
 */
export interface ApiUploadParams extends ApiParams {
    /**
     * Target filename.
     */
    filename?: string;
    /**
     * Upload comment. Also used as the initial page text for new files if `text` is not specified.
     *
     * Defaults to an empty string.
     */
    comment?: string;
    /**
     * Change tags to apply to the upload log entry and file page revision.
     */
    tags?: string | string[];
    /**
     * Initial page text for new files.
     */
    text?: string;
    /**
     * Watch the page.
     *
     * @deprecated
     */
    watch?: boolean;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     *
     * Defaults to `preferences`.
     */
    watchlist?: "nochange" | "preferences" | "watch";
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
    /**
     * Ignore any warnings.
     */
    ignorewarnings?: boolean;
    /**
     * File contents.
     */
    file?: upload;
    /**
     * URL to fetch the file from.
     */
    url?: string;
    /**
     * Key that identifies a previous upload that was stashed temporarily.
     */
    filekey?: string;
    /**
     * Same as filekey, maintained for backward compatibility.
     *
     * @deprecated
     */
    sessionkey?: string;
    /**
     * If set, the server will stash the file temporarily instead of adding it to the repository.
     */
    stash?: boolean;
    /**
     * Filesize of entire upload.
     */
    filesize?: number;
    /**
     * Offset of chunk in bytes.
     */
    offset?: number;
    /**
     * Chunk contents.
     */
    chunk?: upload;
    /**
     * Make potentially large file operations asynchronous when possible.
     */
    async?: boolean;
    /**
     * Only fetch the upload status for the given file key.
     */
    checkstatus?: boolean;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Change a user's group membership.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:User_group_membership
 */
export interface ApiUserrightsParams extends ApiParams {
    /**
     * User.
     */
    user?: string;
    /**
     * Specify `user=#`ID`` instead.
     *
     * @deprecated
     */
    userid?: number;
    /**
     * Add the user to these groups, or if they are already a member, update the expiry of their membership in that group.
     */
    add?: string | string[];
    /**
     * Expiry timestamps. May be relative (e.g. `5 months` or `2 weeks`) or absolute (e.g. the current timestamp). If only one timestamp is set, it will be used for all groups passed to the `add` parameter. Use `infinite`, `indefinite`, `infinity`, or `never` for a never-expiring user group.
     *
     * Defaults to `infinite`.
     */
    expiry?: string | string[];
    /**
     * Remove the user from these groups.
     */
    remove?: string | string[];
    /**
     * Reason for the change.
     *
     * Defaults to an empty string.
     */
    reason?: string;
    /**
     * A "userrights" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * For compatibility, the token used in the web UI is also accepted.
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * Change tags to apply to the entry in the user rights log.
     */
    tags?: string | string[];
    /**
     * Watch the user's user and talk pages.
     */
    watchuser?: boolean;
    /**
     * Watchlist expiry timestamp. Omit this parameter entirely to leave the current expiry unchanged.
     */
    watchlistexpiry?: expiry;
}

/**
 * Validate a password against the wiki's password policies.
 *
 * Validity is reported as `Good` if the password is acceptable, `Change` if the password may be used for login but must be changed, or `Invalid` if the password is not usable.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Validatepassword
 */
export interface ApiValidatePasswordParams extends ApiParams {
    /**
     * Password to validate.
     *
     * Sensitive parameter.
     */
    password?: password;
    /**
     * Username, for use when testing account creation. The named user must not exist.
     */
    user?: string;
    /**
     * Email address, for use when testing account creation.
     */
    email?: string;
    /**
     * Real name, for use when testing account creation.
     */
    realname?: string;
}

/**
 * Returns HTML5 for a page from the Parsoid service.
 *
 * @private
 */
export interface VisualEditorApiVisualEditorParams extends ApiParams {
    /**
     * The page to perform actions on.
     */
    page?: string;
    /**
     * If RESTBase query returned a seemingly invalid ETag, pass it here for logging purposes.
     */
    badetag?: string;
    /**
     * The format of the output.
     *
     * Defaults to `jsonfm`.
     */
    format?: "json" | "jsonfm";
    /**
     * Action to perform.
     */
    paction?: "metadata" | "parse" | "parsefragment" | "templatesused" | "wikitext";
    /**
     * Wikitext to send to Parsoid to convert to HTML (paction=parsefragment).
     */
    wikitext?: string;
    /**
     * The section on which to act.
     */
    section?: string;
    /**
     * When saving, set this true if you want to use the stashing API.
     */
    stash?: boolean;
    /**
     * The revision number to use (defaults to latest revision).
     */
    oldid?: number;
    /**
     * Edit intro to add to notices.
     */
    editintro?: string;
    /**
     * Pre-save transform wikitext before sending it to Parsoid (paction=parsefragment).
     */
    pst?: boolean;
    /**
     * The page to use content from if the fetched page has no content yet.
     */
    preload?: string;
    /**
     * Parameters to substitute into the preload page, if present.
     */
    preloadparams?: string | string[];
}

/**
 * Save an HTML5 page to MediaWiki (converted to wikitext via the Parsoid service).
 *
 * @private
 */
export interface VisualEditorApiVisualEditorEditParams extends ApiParams {
    /**
     * Action to perform.
     */
    paction?: "diff" | "save" | "serialize" | "serializeforcache";
    /**
     * The page to perform actions on.
     */
    page?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * The wikitext to act with.
     */
    wikitext?: string;
    /**
     * The section on which to act.
     */
    section?: string;
    /**
     * Title for new section.
     */
    sectiontitle?: string;
    /**
     * When saving, set this to the timestamp of the revision that was edited. Used to detect edit conflicts.
     */
    basetimestamp?: timestamp;
    /**
     * When saving, set this to the timestamp of when the page was loaded. Used to detect edit conflicts.
     */
    starttimestamp?: timestamp;
    /**
     * The revision number to use. Defaults to latest revision.
     */
    oldid?: number;
    /**
     * Flag for minor edit.
     */
    minor?: string;
    /**
     * Unconditionally add or remove the page from the current user's watchlist, use preferences (ignored for bot users) or do not change watch.
     */
    watchlist?: string;
    /**
     * HTML to send to Parsoid in exchange for wikitext.
     */
    html?: string;
    /**
     * ETag to send.
     */
    etag?: string;
    /**
     * Edit summary.
     */
    summary?: string;
    /**
     * CAPTCHA ID from previous request
     */
    captchaid?: string;
    /**
     * Answer to the CAPTCHA
     */
    captchaword?: string;
    /**
     * Use the result of a previous serializeforcache request with this key. Overrides html.
     */
    cachekey?: string;
    /**
     * Omit the HTML content of the new revision in the response.
     */
    nocontent?: boolean;
    /**
     * Page title. If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to the given page, instead of the page that was edited.
     */
    returnto?: string;
    /**
     * URL query parameters (with leading `?`). If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to a page with the given query parameters.
     *
     * Defaults to an empty string.
     */
    returntoquery?: string;
    /**
     * URL fragment (with leading `#`). If saving the edit created a temporary account, the API may respond with an URL that the client should visit to complete logging in. If this parameter is provided, the URL will redirect to a page with the given fragment.
     *
     * Defaults to an empty string.
     */
    returntoanchor?: string;
    /**
     * Apply the selected skin to the parser output. May affect the following properties: `text`, `langlinks`, `headitems`, `modules`, `jsconfigvars`, `indicators`.
     */
    useskin?:
        | "apioutput"
        | "authentication-popup"
        | "cologneblue"
        | "contenttranslation"
        | "fallback"
        | "json"
        | "minerva"
        | "modern"
        | "monobook"
        | "timeless"
        | "vector"
        | "vector-2022";
    /**
     * Change tags to apply to the edit.
     */
    tags?: string | string[];
    /**
     * Plugins associated with the API request.
     *
     * - **ge-task-link-recommendation**: Use when saving a GrowthExperiments "{@link https://www.mediawiki.org/wiki/Growth/Personalized_first_day/Structured_tasks/Add_a_link Add a link}" structured edit.
     * - **ge-task-revise-tone**: Use when saving a GrowthExperiments "{@link https://www.mediawiki.org/wiki/Growth/Revise_Tone Revise Tone}" structured edit.
     */
    plugins?: string | string[];
    /**
     * Whether the shown hCaptcha CAPTCHA was force shown, such as by an AbuseFilter extension consequence (and so used a more restrictive sitekey). Set this if the JS configuration variable with the same name is true or if the first attempt to use this API returned a 'forcecaptcha' error with a specified sitekey.
     */
    wgConfirmEditForceShowCaptcha?: boolean;
    /**
     * Return parse output in a format suitable for mobile devices.
     */
    mobileformat?: boolean;
}

/**
 * Add or remove pages from the current user's watchlist.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watch
 */
export interface ApiWatchParams extends ApiParams {
    /**
     * The page to (un)watch. Use `titles` instead.
     *
     * @deprecated
     */
    title?: string;
    /**
     * Expiry timestamp to be applied to all given pages. Omit this parameter entirely to leave any current expiries unchanged.
     */
    expiry?: expiry;
    /**
     * Label IDs to assign to the pages being watched. This will replace all existing labels on the pages with the ones specified.
     */
    labels?: number | number[];
    /**
     * If set the page will be unwatched rather than watched.
     */
    unwatch?: boolean;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    continue?: string;
    /**
     * A list of titles to work on.
     */
    titles?: string | string[];
    /**
     * A list of page IDs to work on.
     */
    pageids?: number | number[];
    /**
     * A list of revision IDs to work on. Note that almost all query modules will convert revision IDs to the corresponding page ID and work on the latest revision instead. Only `prop=revisions` uses exact revisions for its response.
     */
    revids?: number | number[];
    /**
     * Get the list of pages to work on by executing the specified query module.
     *
     * **Note:** Generator parameter names must be prefixed with a "g", see examples.
     *
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballcategories allcategories}**: Enumerate all categories.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balldeletedrevisions alldeletedrevisions}**: List all deleted revisions by a user or in a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballfileusages allfileusages}**: List all file usages, including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballimages allimages}**: Enumerate all images sequentially.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balllinks alllinks}**: Enumerate all links that point to a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballpages allpages}**: Enumerate all pages sequentially in a given namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballredirects allredirects}**: List all redirects to a namespace.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballrevisions allrevisions}**: List all revisions.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Balltransclusions alltransclusions}**: List all transclusions (pages embedded using {{x}}), including non-existing.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bbacklinks backlinks}**: Find all pages that link to the given page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategories categories}**: List all categories the pages belong to.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bcategorymembers categorymembers}**: List all pages in a given category.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bdeletedrevisions deletedrevisions}**: Get deleted revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bduplicatefiles duplicatefiles}**: List all files that are duplicates of the given files based on hash values.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bembeddedin embeddedin}**: Find all pages that embed (transclude) the given title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bexturlusage exturlusage}**: Enumerate pages that contain a given URL.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bfileusage fileusage}**: Find all pages that use the given files.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgeosearch geosearch}**: Returns pages having coordinates that are located in a certain area.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimages images}**: Returns all files contained on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageusage imageusage}**: Find all pages that use the given image title.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Biwbacklinks iwbacklinks}**: Find all pages that link to the given interwiki link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blangbacklinks langbacklinks}**: Find all pages that link to the given language link.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinks links}**: Returns all links from the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Blinkshere linkshere}**: Find all pages that link to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bmostviewed mostviewed}**: Lists the most viewed pages (based on last day's pageview count).
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Boldreviewedpages oldreviewedpages}**: Enumerates pages that have changes pending review.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpageswithprop pageswithprop}**: List all pages using a given page property.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprefixsearch prefixsearch}**: Perform a prefix search for page titles.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprojectpages projectpages}**: List all pages associated with one or more projects.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bprotectedtitles protectedtitles}**: List all titles protected from creation.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bquerypage querypage}**: Get a list provided by a QueryPage-based special page.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brandom random}**: Get a set of random pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brecentchanges recentchanges}**: Enumerate recent changes.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bredirects redirects}**: Returns all redirects to the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Brevisions revisions}**: Get revision information.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsearch search}**: Perform a full text search.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btemplates templates}**: Returns all pages transcluded on the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btrackingcategories trackingcategories}**: Enumerate all existing tracking categories defined in {@link https://www.mediawiki.org/wiki/Special:TrackingCategories Special:TrackingCategories}. A tracking category exists if it contains pages or if its category page exists.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btranscludedin transcludedin}**: Find all pages that transclude the given pages.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlist watchlist}**: Get recent changes to pages in the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwatchlistraw watchlistraw}**: Get all pages on the current user's watchlist.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bwblistentityusage wblistentityusage}**: Returns all pages that use the given entity IDs.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bgrowthtasks growthtasks}**: Internal. Get task recommendations suitable for newcomers.
     * - **{@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Breadinglistentries readinglistentries}**: Internal. List the pages of a certain list.
     */
    generator?:
        | "allcategories"
        | "alldeletedrevisions"
        | "allfileusages"
        | "allimages"
        | "alllinks"
        | "allpages"
        | "allredirects"
        | "allrevisions"
        | "alltransclusions"
        | "backlinks"
        | "categories"
        | "categorymembers"
        | "deletedrevisions"
        | "duplicatefiles"
        | "embeddedin"
        | "exturlusage"
        | "fileusage"
        | "geosearch"
        | "images"
        | "imageusage"
        | "iwbacklinks"
        | "langbacklinks"
        | "links"
        | "linkshere"
        | "mostviewed"
        | "oldreviewedpages"
        | "pageswithprop"
        | "prefixsearch"
        | "projectpages"
        | "protectedtitles"
        | "querypage"
        | "random"
        | "recentchanges"
        | "redirects"
        | "revisions"
        | "search"
        | "templates"
        | "trackingcategories"
        | "transcludedin"
        | "watchlist"
        | "watchlistraw"
        | "wblistentityusage"
        | "growthtasks"
        | "readinglistentries";
    /**
     * Automatically resolve redirects in `titles`, `pageids`, and `revids`, and in pages returned by `generator`.
     */
    redirects?: boolean;
    /**
     * Convert titles to other variants if necessary. Only works if the wiki's content language supports variant conversion. Languages that support variant conversion include ban, crh, en, gan, iu, ku, mni, sh, shi, sr, tg, tly, uz, wuu, zgh and zh.
     */
    converttitles?: boolean;
    /**
     * A "watch" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
}

/**
 * Returns a webapp manifest.
 */
export interface MobileFrontendApiWebappManifestParams extends ApiParams {}

/**
 * API Module to communicate between server and client during registration/authentication process.
 */
export interface OATHAuthApiWebAuthnParams extends ApiParams {
    /**
     * Name of the requested function to be executed.
     *
     * - **getAuthInfo**: Authentication information.
     * - **getRegisterInfo**: Registration information.
     * - **register**: Register a new WebAuthn credential for the current user.
     */
    func?: "getAuthInfo" | "getRegisterInfo" | "register";
    /**
     * Whether the key being registered is in passkey mode. (Only for getRegisterInfo.)
     */
    passkeyMode?: boolean;
    /**
     * JSON-encoded WebAuthn credential response from the browser.
     */
    credential?: string;
    /**
     * Friendly name for the new credential.
     */
    friendlyname?: string;
}

/**
 * Give WikiLove to another user.
 *
 * WikiLove is a positive message posted to a user's talk page through a convenient interface with preset or locally defined templates. This action adds the specified wikitext to a certain talk page. For statistical purposes, the type and other data are logged.
 */
export interface WikiLoveApiWikiLoveParams extends ApiParams {
    /**
     * Full pagename of the user page or user talk page of the user to send WikiLove to.
     */
    title?: string;
    /**
     * Raw wikitext to add in the new section.
     */
    text?: string;
    /**
     * Actual message the user has entered, for logging purposes.
     */
    message?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    token?: string;
    /**
     * Subject header of the new section.
     */
    subject?: string;
    /**
     * Type of WikiLove (for statistics); this corresponds with a type selected in the menu, and optionally a subtype after that (e.g. as in "The Original Barnstar" or "A kitten for you!").
     */
    type?: string;
    /**
     * Content of the optional email message to send to the user. A warning will be returned if the user cannot be emailed. WikiLove will be sent to the user's talk page either way.
     */
    email?: string;
    /**
     * Change tags to apply to the revision.
     */
    tags?: string | string[];
}

/**
 * Log information about blocked edit attempts
 *
 * @private
 */
export interface WikimediaEventsApiWikimediaEventsBlockedEditParams extends ApiParams {
    /**
     * A page on which an edit attempt was made
     */
    page?: string;
    /**
     * The interface which was used to edit
     */
    interface?: "discussiontools" | "mobilefrontend" | "other" | "visualeditor" | "wikieditor";
    /**
     * The platform which was used to edit
     */
    platform?: "desktop" | "mobile";
}

/**
 * Log edit diff when hCaptcha challenge is shown but edit is incomplete
 *
 * @private
 */
export interface WikimediaEventsApiWikimediaEventsHCaptchaEditAttemptParams extends ApiParams {
    /**
     * Page title
     */
    title?: string;
    /**
     * Proposed content text (max 8KB)
     */
    proposed_content?: string;
    /**
     * Editing session ID
     */
    editing_session_id?: string;
    /**
     * Revision ID of the page being edited
     */
    revision_id?: number;
}

/**
 * Output data in XML format.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
 */
export interface ApiFormatXmlParams extends ApiParams {
    /**
     * If specified, adds an XML namespace.
     */
    includexmlnamespace?: boolean;
}

/**
 * Output data in XML format (pretty-print in HTML).
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
 */
export interface ApiFormatXmlParams extends ApiParams {
    /**
     * Return the pretty-printed HTML and associated ResourceLoader modules as a JSON object.
     */
    wrappedhtml?: boolean;
    /**
     * If specified, adds an XML namespace.
     */
    includexmlnamespace?: boolean;
}

/**
 * Show details of the edit filters.
 */
export interface AbuseFilterApiQueryAbuseFiltersParams extends ApiQueryParams {
    /**
     * The filter ID to start enumerating from.
     */
    abfstartid?: number;
    /**
     * The filter ID to stop enumerating at.
     */
    abfendid?: number;
    /**
     * In which direction to enumerate:
     *
     * Defaults to `newer`.
     */
    abfdir?: "newer" | "older";
    /**
     * Show only filters which meet these criteria.
     */
    abfshow?: OneOrMore<
        | "!deleted"
        | "!enabled"
        | "!private"
        | "!protected"
        | "deleted"
        | "enabled"
        | "private"
        | "protected"
    >;
    /**
     * The maximum number of filters to list.
     *
     * Defaults to 10.
     */
    abflimit?: limit;
    /**
     * Which properties to get.
     *
     * Defaults to `id`, `description`, `actions`, and `status`.
     */
    abfprop?: OneOrMore<
        | "actions"
        | "comments"
        | "description"
        | "hits"
        | "id"
        | "lasteditor"
        | "lastedittime"
        | "pattern"
        | "private"
        | "protected"
        | "status"
    >;
}

/**
 * Show events that were caught by one of the edit filters.
 */
export interface AbuseFilterApiQueryAbuseLogParams extends ApiQueryParams {
    /**
     * Show an entry with the given log ID.
     */
    afllogid?: number;
    /**
     * The timestamp to start enumerating from.
     */
    aflstart?: timestamp;
    /**
     * The timestamp to stop enumerating at.
     */
    aflend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * Defaults to `older`.
     */
    afldir?: "newer" | "older";
    /**
     * Show only entries done by a given user or IP address.
     */
    afluser?: string;
    /**
     * Show only entries occurring on a given page.
     */
    afltitle?: string;
    /**
     * Show only entries that were caught by the given filter IDs. Separate with pipes, prefix with "global-" for global filters.
     */
    aflfilter?: string | string[];
    /**
     * The maximum amount of entries to list.
     *
     * Defaults to 10.
     */
    afllimit?: limit;
    /**
     * Which properties to get.
     *
     * Defaults to `ids`, `user`, `title`, `action`, `result`, `timestamp`, `hidden`, and `revid`.
     */
    aflprop?: OneOrMore<
        | "action"
        | "details"
        | "filter"
        | "hidden"
        | "ids"
        | "result"
        | "revid"
        | "timestamp"
        | "title"
        | "user"
    >;
}

/**
 * Enumerate all categories.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories
 */
export interface ApiQueryAllCategoriesParams extends ApiQueryParams {
    /**
     * The category to start enumerating from.
     */
    acfrom?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    accontinue?: string;
    /**
     * The category to stop enumerating at.
     */
    acto?: string;
    /**
     * Search for all category titles that begin with this value.
     */
    acprefix?: string;
    /**
     * Direction to sort in.
     *
     * Defaults to `ascending`.
     */
    acdir?: "ascending" | "descending";
    /**
     * Only return categories with at least this many members.
     */
    acmin?: number;
    /**
     * Only return categories with at most this many members.
     */
    acmax?: number;
    /**
     * How many categories to return.
     *
     * Defaults to 10.
     */
    aclimit?: limit;
    /**
     * Which properties to get:
     *
     * - **size**: Adds number of pages in the category.
     * - **hidden**: Tags categories that are hidden with `__HIDDENCAT__`.
     *
     * Defaults to an empty string.
     */
    acprop?: OneOrMore<"hidden" | "size">;
}

/**
 * List all deleted revisions by a user or in a namespace.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions
 */
export interface ApiQueryAllDeletedRevisionsParams extends ApiQueryParams {
    /**
     * Which properties to get for each revision:
     *
     * - **ids**: The ID of the revision.
     * - **flags**: Revision flags (minor).
     * - **timestamp**: The timestamp of the revision.
     * - **user**: User that made the revision. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: User ID of the revision creator. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **size**: Length (bytes) of the revision.
     * - **slotsize**: Length (bytes) of each revision slot.
     * - **sha1**: SHA-1 (base 16) of the revision. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **slotsha1**: SHA-1 (base 16) of each revision slot. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **contentmodel**: Content model ID of each revision slot.
     * - **comment**: Comment by the user for the revision. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Parsed comment by the user for the revision. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **content**: Content of each revision slot. If the content has been revision deleted, a `texthidden` property will be returned. For performance reasons, if this option is used, `adrlimit` is enforced to 50.
     * - **tags**: Tags for the revision.
     * - **roles**: List content slot roles that exist in the revision.
     * - **parsetree**: Deprecated. Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} or {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. The XML parse tree of revision content (requires content model `wikitext`). For performance reasons, if this option is used, `adrlimit` is enforced to 50.
     *
     * Defaults to `ids`, `timestamp`, `flags`, `comment`, and `user`.
     */
    adrprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    /**
     * Which revision slots to return data for, when slot-related properties are included in `adrprops`. If omitted, data from the `main` slot will be returned in a backwards-compatible format.
     */
    adrslots?: OneOrMore<"main"> | "*";
    /**
     * Limit how many revisions will be returned. If `adrprop=content`, `adrprop=parsetree`, `adrdiffto` or `adrdifftotext` is used, the limit is 50. If `adrparse` is used, the limit is 1.
     */
    adrlimit?: limit;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} instead. Expand templates in revision content (requires adrprop=content).
     *
     * @deprecated
     */
    adrexpandtemplates?: boolean;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} or {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. Generate XML parse tree for revision content (requires adrprop=content).
     *
     * @deprecated
     */
    adrgeneratexml?: boolean;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. Parse revision content (requires `adrprop=content`). For performance reasons, if this option is used, `adrlimit` is enforced to 1.
     *
     * @deprecated
     */
    adrparse?: boolean;
    /**
     * Only retrieve the content of the section with this identifier.
     */
    adrsection?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Revision ID to diff each revision to. Use `prev`, `next` and `cur` for the previous, next and current revision respectively. For performance reasons, if this option is used, `adrlimit` is enforced to 50.
     *
     * @deprecated
     */
    adrdiffto?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Text to diff each revision to. Only diffs a limited number of revisions. Overrides `adrdiffto`. If `adrsection` is set, only that section will be diffed against this text. For performance reasons, if this option is used, `adrlimit` is enforced to 50.
     *
     * @deprecated
     */
    adrdifftotext?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Perform a pre-save transform on the text before diffing it. Only valid when used with `adrdifftotext`.
     *
     * @deprecated
     */
    adrdifftotextpst?: boolean;
    /**
     * Serialization format used for `adrdifftotext` and expected for output of content.
     *
     * @deprecated
     */
    adrcontentformat?: string;
    /**
     * Only list revisions by this user.
     *
     * **Note:** Due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}, using `adruser` and `adrnamespace` together may result in fewer than `adrlimit` results returned before continuing; in extreme cases, zero results may be returned.
     */
    adruser?: string;
    /**
     * Only list pages in this namespace.
     *
     * **Note:** Due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}, using `adruser` and `adrnamespace` together may result in fewer than `adrlimit` results returned before continuing; in extreme cases, zero results may be returned.
     */
    adrnamespace?: namespace | namespace[] | "*";
    /**
     * The timestamp to start enumerating from.
     */
    adrstart?: timestamp;
    /**
     * The timestamp to stop enumerating at.
     */
    adrend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: adrstart has to be before adrend.
     * - **older**: List newest first (default). Note: adrstart has to be later than adrend.
     *
     * Defaults to `older`.
     */
    adrdir?: "newer" | "older";
    /**
     * Start listing at this title.
     */
    adrfrom?: string;
    /**
     * Stop listing at this title.
     */
    adrto?: string;
    /**
     * Search for all page titles that begin with this value.
     */
    adrprefix?: string;
    /**
     * Don't list revisions by this user.
     */
    adrexcludeuser?: string;
    /**
     * Only list revisions tagged with this tag.
     */
    adrtag?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    adrcontinue?: string;
    /**
     * When being used as a generator, generate titles rather than revision IDs.
     */
    adrgeneratetitles?: boolean;
}

/**
 * List all file usages, including non-existing.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages
 */
export interface ApiQueryAllLinksParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    afcontinue?: string;
    /**
     * The title of the file to start enumerating from.
     */
    affrom?: string;
    /**
     * The title of the file to stop enumerating at.
     */
    afto?: string;
    /**
     * Search for all file titles that begin with this value.
     */
    afprefix?: string;
    /**
     * Only show distinct file titles. Cannot be used with afprop=ids.
     * When used as a generator, yields target pages instead of source pages.
     */
    afunique?: boolean;
    /**
     * Which pieces of information to include:
     *
     * - **ids**: Adds the page IDs of the using pages (cannot be used with afunique).
     * - **title**: Adds the title of the file.
     *
     * Defaults to `title`.
     */
    afprop?: OneOrMore<"ids" | "title">;
    /**
     * How many total items to return.
     *
     * Defaults to 10.
     */
    aflimit?: limit;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    afdir?: "ascending" | "descending";
}

/**
 * Enumerate all images sequentially.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages
 */
export interface ApiQueryAllImagesParams extends ApiQueryParams {
    /**
     * Property to sort by.
     *
     * Defaults to `name`.
     */
    aisort?: "name" | "timestamp";
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    aidir?: "ascending" | "descending" | "newer" | "older";
    /**
     * The image title to start enumerating from. Can only be used with aisort=name.
     */
    aifrom?: string;
    /**
     * The image title to stop enumerating at. Can only be used with aisort=name.
     */
    aito?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    aicontinue?: string;
    /**
     * The timestamp to start enumerating from. Can only be used with aisort=timestamp.
     */
    aistart?: timestamp;
    /**
     * The timestamp to end enumerating. Can only be used with aisort=timestamp.
     */
    aiend?: timestamp;
    /**
     * Which file information to get:
     *
     * - **timestamp**: Adds timestamp for the uploaded version.
     * - **user**: Adds the user who uploaded each file version. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: Add the ID of the user that uploaded each file version. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **comment**: Comment on the version. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Parse the comment on the version. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **canonicaltitle**: Adds the canonical title of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **url**: Gives URL to the file and the description page. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **size**: Adds the size of the file in bytes and the height, width and page count (if applicable).
     * - **dimensions**: Alias for size.
     * - **sha1**: Adds SHA-1 hash for the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **mime**: Adds MIME type of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **thumburls**: Adds thumbnail URLs of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **mediatype**: Adds the media type of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **metadata**: Lists Exif metadata for the version of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **commonmetadata**: Lists file format generic metadata for the version of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **extmetadata**: Lists formatted metadata combined from multiple sources. Results are HTML formatted. If the file has been revision deleted, a `filehidden` property will be returned.
     * **Note:** This is an expensive property to request, and should be avoided unless you need it. When using it, you should request only a few results at a time to avoid too much load.
     *
     * - **bitdepth**: Adds the bit depth of the version. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **badfile**: Adds whether the file is on the {@link https://www.mediawiki.org/wiki/MediaWiki:Bad_image_list MediaWiki:Bad image list}
     *
     * Defaults to `timestamp` and `url`.
     */
    aiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "thumburls"
        | "timestamp"
        | "url"
        | "user"
        | "userid"
    >;
    /**
     * Search for all image titles that begin with this value. Can only be used with aisort=name.
     */
    aiprefix?: string;
    /**
     * Limit to images with at least this many bytes.
     */
    aiminsize?: number;
    /**
     * Limit to images with at most this many bytes.
     */
    aimaxsize?: number;
    /**
     * SHA1 hash of image. Overrides aisha1base36.
     */
    aisha1?: string;
    /**
     * SHA1 hash of image in base 36 (used in MediaWiki).
     */
    aisha1base36?: string;
    /**
     * Only return files where the last version was uploaded by this user. Can only be used with aisort=timestamp. Cannot be used together with aifilterbots.
     */
    aiuser?: string;
    /**
     * How to filter files uploaded by bots. Can only be used with aisort=timestamp. Cannot be used together with aiuser.
     *
     * Defaults to `all`.
     */
    aifilterbots?: "all" | "bots" | "nobots";
    /**
     * Disabled due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}.
     */
    aimime?: string | string[];
    /**
     * How many images in total to return.
     *
     * Defaults to 10.
     */
    ailimit?: limit;
}

/**
 * Enumerate all links that point to a given namespace.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks
 */
export interface ApiQueryAllLinksParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    alcontinue?: string;
    /**
     * The title of the link to start enumerating from.
     */
    alfrom?: string;
    /**
     * The title of the link to stop enumerating at.
     */
    alto?: string;
    /**
     * Search for all linked titles that begin with this value.
     */
    alprefix?: string;
    /**
     * Only show distinct linked titles. Cannot be used with `alprop=ids`.
     * When used as a generator, yields target pages instead of source pages.
     */
    alunique?: boolean;
    /**
     * Which pieces of information to include:
     *
     * - **ids**: Adds the page ID of the linking page (cannot be used with `alunique`).
     * - **title**: Adds the title of the link.
     *
     * Defaults to `title`.
     */
    alprop?: OneOrMore<"ids" | "title">;
    /**
     * The namespace to enumerate.
     *
     * Defaults to 0.
     */
    alnamespace?: namespace;
    /**
     * How many total items to return.
     *
     * Defaults to 10.
     */
    allimit?: limit;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    aldir?: "ascending" | "descending";
}

/**
 * Return messages from this site.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allmessages
 */
export interface ApiQueryAllMessagesParams extends ApiQueryParams {
    /**
     * Which messages to output. `*` (default) means all messages.
     *
     * Defaults to `*`.
     */
    ammessages?: string | string[];
    /**
     * Which properties to get.
     */
    amprop?: OneOrMore<"default">;
    /**
     * Set to enable parser, will preprocess the wikitext of message (substitute magic words, handle templates, etc.).
     */
    amenableparser?: boolean;
    /**
     * If set, do not include the content of the messages in the output.
     */
    amnocontent?: boolean;
    /**
     * Also include local messages, i.e. messages that don't exist in the software but do exist as in the MediaWiki namespace.
     * This lists all MediaWiki-namespace pages, so it will also list those that aren't really messages such as {@link https://www.mediawiki.org/wiki/MediaWiki:Common.js Common.js}.
     */
    amincludelocal?: boolean;
    /**
     * Arguments to be substituted into message.
     */
    amargs?: string | string[];
    /**
     * Return only messages with names that contain this string.
     */
    amfilter?: string;
    /**
     * Return only messages in this customisation state.
     *
     * Defaults to `all`.
     */
    amcustomised?: "all" | "modified" | "unmodified";
    /**
     * Return messages in this language.
     */
    amlang?: string;
    /**
     * Return messages starting at this message.
     */
    amfrom?: string;
    /**
     * Return messages ending at this message.
     */
    amto?: string;
    /**
     * Page name to use as context when parsing message (for amenableparser option).
     */
    amtitle?: string;
    /**
     * Return messages with this prefix.
     */
    amprefix?: string;
}

/**
 * Enumerate all pages sequentially in a given namespace.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages
 */
export interface ApiQueryAllPagesParams extends ApiQueryParams {
    /**
     * The page title to start enumerating from.
     */
    apfrom?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    apcontinue?: string;
    /**
     * The page title to stop enumerating at.
     */
    apto?: string;
    /**
     * Search for all page titles that begin with this value.
     */
    apprefix?: string;
    /**
     * The namespace to enumerate.
     *
     * Defaults to 0.
     */
    apnamespace?: namespace;
    /**
     * Which pages to list.
     *
     * **Note:** Due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}, using this may result in fewer than `aplimit` results returned before continuing; in extreme cases, zero results may be returned.
     *
     * Defaults to `all`.
     */
    apfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * Filter based on whether a page has langlinks. Note that this may not consider langlinks added by extensions.
     *
     * Defaults to `all`.
     */
    apfilterlanglinks?: "all" | "withlanglinks" | "withoutlanglinks";
    /**
     * Limit to pages with at least this many bytes.
     */
    apminsize?: number;
    /**
     * Limit to pages with at most this many bytes.
     *
     * Disabled due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}.
     */
    apmaxsize?: number;
    /**
     * Limit to protected pages only.
     */
    apprtype?: OneOrMore<"edit" | "move" | "upload">;
    /**
     * Filter protections based on protection level (must be used with apprtype= parameter).
     */
    apprlevel?: OneOrMore<"" | "autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    /**
     * Filter protections based on cascadingness (ignored when apprtype isn't set).
     *
     * Defaults to `all`.
     */
    apprfiltercascade?: "all" | "cascading" | "noncascading";
    /**
     * Which protection expiry to filter the page on:
     *
     * - **indefinite**: Get only pages with indefinite protection expiry.
     * - **definite**: Get only pages with a definite (specific) protection expiry.
     * - **all**: Get pages with any protections expiry.
     *
     * Defaults to `all`.
     */
    apprexpiry?: "all" | "definite" | "indefinite";
    /**
     * How many total pages to return.
     *
     * Defaults to 10.
     */
    aplimit?: limit;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    apdir?: "ascending" | "descending";
}

/**
 * List all redirects to a namespace.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects
 */
export interface ApiQueryAllLinksParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    arcontinue?: string;
    /**
     * The title of the redirect to start enumerating from.
     */
    arfrom?: string;
    /**
     * The title of the redirect to stop enumerating at.
     */
    arto?: string;
    /**
     * Search for all target pages that begin with this value.
     */
    arprefix?: string;
    /**
     * Only show distinct target pages. Cannot be used with arprop=ids|fragment|interwiki.
     * When used as a generator, yields target pages instead of source pages.
     */
    arunique?: boolean;
    /**
     * Which pieces of information to include:
     *
     * - **ids**: Adds the page ID of the redirecting page (cannot be used with `arunique`).
     * - **title**: Adds the title of the redirect.
     * - **fragment**: Adds the fragment from the redirect, if any (cannot be used with `arunique`).
     * - **interwiki**: Adds the interwiki prefix from the redirect, if any (cannot be used with `arunique`).
     *
     * Defaults to `title`.
     */
    arprop?: OneOrMore<"fragment" | "ids" | "interwiki" | "title">;
    /**
     * The namespace to enumerate.
     *
     * Defaults to 0.
     */
    arnamespace?: namespace;
    /**
     * How many total items to return.
     *
     * Defaults to 10.
     */
    arlimit?: limit;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    ardir?: "ascending" | "descending";
}

/**
 * List all revisions.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions
 */
export interface ApiQueryAllRevisionsParams extends ApiQueryParams {
    /**
     * Which properties to get for each revision:
     *
     * - **ids**: The ID of the revision.
     * - **flags**: Revision flags (minor).
     * - **timestamp**: The timestamp of the revision.
     * - **user**: User that made the revision. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: User ID of the revision creator. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **size**: Length (bytes) of the revision.
     * - **slotsize**: Length (bytes) of each revision slot.
     * - **sha1**: SHA-1 (base 16) of the revision. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **slotsha1**: SHA-1 (base 16) of each revision slot. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **contentmodel**: Content model ID of each revision slot.
     * - **comment**: Comment by the user for the revision. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Parsed comment by the user for the revision. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **content**: Content of each revision slot. If the content has been revision deleted, a `texthidden` property will be returned. For performance reasons, if this option is used, `arvlimit` is enforced to 50.
     * - **tags**: Tags for the revision.
     * - **roles**: List content slot roles that exist in the revision.
     * - **parsetree**: Deprecated. Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} or {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. The XML parse tree of revision content (requires content model `wikitext`). For performance reasons, if this option is used, `arvlimit` is enforced to 50.
     * - **oresscores**: ORES scores for the revision.
     *
     * Defaults to `ids`, `timestamp`, `flags`, `comment`, and `user`.
     */
    arvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    /**
     * Which revision slots to return data for, when slot-related properties are included in `arvprops`. If omitted, data from the `main` slot will be returned in a backwards-compatible format.
     */
    arvslots?: OneOrMore<"main"> | "*";
    /**
     * Limit how many revisions will be returned. If `arvprop=content`, `arvprop=parsetree`, `arvdiffto` or `arvdifftotext` is used, the limit is 50. If `arvparse` is used, the limit is 1.
     */
    arvlimit?: limit;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} instead. Expand templates in revision content (requires arvprop=content).
     *
     * @deprecated
     */
    arvexpandtemplates?: boolean;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} or {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. Generate XML parse tree for revision content (requires arvprop=content).
     *
     * @deprecated
     */
    arvgeneratexml?: boolean;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. Parse revision content (requires `arvprop=content`). For performance reasons, if this option is used, `arvlimit` is enforced to 1.
     *
     * @deprecated
     */
    arvparse?: boolean;
    /**
     * Only retrieve the content of the section with this identifier.
     */
    arvsection?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Revision ID to diff each revision to. Use `prev`, `next` and `cur` for the previous, next and current revision respectively. For performance reasons, if this option is used, `arvlimit` is enforced to 50.
     *
     * @deprecated
     */
    arvdiffto?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Text to diff each revision to. Only diffs a limited number of revisions. Overrides `arvdiffto`. If `arvsection` is set, only that section will be diffed against this text. For performance reasons, if this option is used, `arvlimit` is enforced to 50.
     *
     * @deprecated
     */
    arvdifftotext?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Perform a pre-save transform on the text before diffing it. Only valid when used with `arvdifftotext`.
     *
     * @deprecated
     */
    arvdifftotextpst?: boolean;
    /**
     * Serialization format used for `arvdifftotext` and expected for output of content.
     *
     * @deprecated
     */
    arvcontentformat?: string;
    /**
     * Only list revisions by this user.
     */
    arvuser?: string;
    /**
     * Only list pages in this namespace.
     *
     * **Note:** Due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}, using this may result in fewer than `arvlimit` results returned before continuing; in extreme cases, zero results may be returned.
     */
    arvnamespace?: namespace | namespace[] | "*";
    /**
     * The timestamp to start enumerating from.
     */
    arvstart?: timestamp;
    /**
     * The timestamp to stop enumerating at.
     */
    arvend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: arvstart has to be before arvend.
     * - **older**: List newest first (default). Note: arvstart has to be later than arvend.
     *
     * Defaults to `older`.
     */
    arvdir?: "newer" | "older";
    /**
     * Don't list revisions by this user.
     */
    arvexcludeuser?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    arvcontinue?: string;
    /**
     * When being used as a generator, generate titles rather than revision IDs.
     */
    arvgeneratetitles?: boolean;
}

/**
 * List all transclusions (pages embedded using {{x}}), including non-existing.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions
 */
export interface ApiQueryAllLinksParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    atcontinue?: string;
    /**
     * The title of the transclusion to start enumerating from.
     */
    atfrom?: string;
    /**
     * The title of the transclusion to stop enumerating at.
     */
    atto?: string;
    /**
     * Search for all transcluded titles that begin with this value.
     */
    atprefix?: string;
    /**
     * Only show distinct transcluded titles. Cannot be used with atprop=ids.
     * When used as a generator, yields target pages instead of source pages.
     */
    atunique?: boolean;
    /**
     * Which pieces of information to include:
     *
     * - **ids**: Adds the page ID of the transcluding page (cannot be used with atunique).
     * - **title**: Adds the title of the transclusion.
     *
     * Defaults to `title`.
     */
    atprop?: OneOrMore<"ids" | "title">;
    /**
     * The namespace to enumerate.
     *
     * Defaults to 10.
     */
    atnamespace?: namespace;
    /**
     * How many total items to return.
     *
     * Defaults to 10.
     */
    atlimit?: limit;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    atdir?: "ascending" | "descending";
}

/**
 * Enumerate all registered users.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allusers
 */
export interface ApiQueryAllUsersParams extends ApiQueryParams {
    /**
     * The username to start enumerating from.
     */
    aufrom?: string;
    /**
     * The username to stop enumerating at.
     */
    auto?: string;
    /**
     * Search for all users that begin with this value.
     */
    auprefix?: string;
    /**
     * Direction to sort in.
     *
     * Defaults to `ascending`.
     */
    audir?: "ascending" | "descending";
    /**
     * Only include users in the given groups. Does not include implicit or auto-promoted groups like *, user, or autoconfirmed.
     */
    augroup?: string | string[];
    /**
     * Exclude users in the given groups.
     */
    auexcludegroup?: string | string[];
    /**
     * Only include users with the given rights. Does not include rights granted by implicit or auto-promoted groups like *, user, or autoconfirmed.
     */
    aurights?: string | string[];
    /**
     * Which pieces of information to include:
     *
     * - **blockinfo**: Adds the information about a current block on the user.
     * - **groups**: Lists groups that the user is in. This uses more server resources and may return fewer results than the limit.
     * - **implicitgroups**: Lists all the groups the user is automatically in.
     * - **rights**: Lists rights that the user has.
     * - **editcount**: Adds the edit count of the user.
     * - **registration**: Adds the timestamp of when the user registered if available (may be blank).
     * - **centralids**: Adds the central IDs and attachment status for the user.
     * - **tempexpired**: Indicates whether the temporary account has expired or not. If account isn't temporary, null is returned.
     */
    auprop?: OneOrMore<
        | "blockinfo"
        | "centralids"
        | "editcount"
        | "groups"
        | "implicitgroups"
        | "registration"
        | "rights"
        | "tempexpired"
    >;
    /**
     * How many total usernames to return.
     *
     * Defaults to 10.
     */
    aulimit?: limit;
    /**
     * Only list users who have made edits.
     */
    auwitheditsonly?: boolean;
    /**
     * Only list users active in the last 30 days.
     */
    auactiveusers?: boolean;
    /**
     * With `auprop=centralids`, also indicate whether the user is attached with the wiki identified by this ID.
     */
    auattachedwiki?: string;
    /**
     * Exclude users of named accounts.
     */
    auexcludenamed?: boolean;
    /**
     * Exclude users of temporary accounts.
     */
    auexcludetemp?: boolean;
}

/**
 * Retrieve information about the current authentication status.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Authmanagerinfo
 */
export interface ApiQueryAuthManagerInfoParams extends ApiQueryParams {
    /**
     * Test whether the user's current authentication status is sufficient for the specified security-sensitive operation.
     */
    amisecuritysensitiveoperation?: string;
    /**
     * Fetch information about the authentication requests needed for the specified authentication action.
     */
    amirequestsfor?:
        | "change"
        | "create"
        | "create-continue"
        | "link"
        | "link-continue"
        | "login"
        | "login-continue"
        | "remove"
        | "unlink";
    /**
     * Add requests needed to reauthenticate for a security-sensitive operation. Must be used with `amirequestsfor=login` and while in a logged-in session. The value of the parameter is the operation name, which can be found in the `reauthenticate` error returned when trying the operation that needs reauthentication.
     */
    amireauthenticate?: string;
    /**
     * Merge field information for all authentication requests into one array.
     */
    amimergerequestfields?: boolean;
    /**
     * Format to use for returning messages.
     *
     * Defaults to `wikitext`.
     */
    amimessageformat?: "html" | "none" | "raw" | "wikitext";
}

/**
 * Fetch the list of sitelinks for the article that corresponds to a given Wikidata ID, ordered by article size.
 */
export interface ContentTranslationActionApiQueryAutomaticTranslationDenseLanguagesParams
    extends ApiQueryParams {
    /**
     * The Wikidata ID.
     */
    "qid"?: string;
    /**
     * A boolean value indicating whether the section titles should be included in the response.
     */
    "section-titles"?: boolean;
    /**
     * The maximum number of sitelinks to fetch.
     *
     * Defaults to 15.
     */
    "limit"?: number;
}

/**
 * Get information about what languages the user knows
 */
export interface BabelApiQueryBabelParams extends ApiQueryParams {
    /**
     * User to get information about
     */
    babuser?: string;
}

/**
 * Find all pages that link to the given page.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks
 */
export interface ApiQueryBacklinksParams extends ApiQueryParams {
    /**
     * Title to search. Cannot be used together with `blpageid`.
     */
    bltitle?: string;
    /**
     * Page ID to search. Cannot be used together with `bltitle`.
     */
    blpageid?: number;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    blcontinue?: string;
    /**
     * The namespace to enumerate.
     */
    blnamespace?: namespace | namespace[] | "*";
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    bldir?: "ascending" | "descending";
    /**
     * How to filter for redirects. If set to `nonredirects` when `blredirect` is enabled, this is only applied to the second level.
     *
     * Defaults to `all`.
     */
    blfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * How many total pages to return. If `blredirect` is enabled, the limit applies to each level separately (which means up to 2 * `bllimit` results may be returned).
     *
     * Defaults to 10.
     */
    bllimit?: limit;
    /**
     * If linking page is a redirect, find all pages that link to that redirect as well. Maximum limit is halved.
     */
    blredirect?: boolean;
}

/**
 * List all BetaFeatures
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:BetaFeatures
 */
export interface BetaFeaturesApiQueryBetaFeaturesParams extends ApiQueryParams {
    /**
     * Whether to fetch how many users have enabled a certain preference.
     */
    bfcounts?: string;
}

/**
 * List all blocked users and IP addresses.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Blocks
 */
export interface ApiQueryBlocksParams extends ApiQueryParams {
    /**
     * The timestamp to start enumerating from.
     */
    bkstart?: timestamp;
    /**
     * The timestamp to stop enumerating at.
     */
    bkend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: bkstart has to be before bkend.
     * - **older**: List newest first (default). Note: bkstart has to be later than bkend.
     *
     * Defaults to `older`.
     */
    bkdir?: "newer" | "older";
    /**
     * List of block IDs to list (optional).
     */
    bkids?: number | number[];
    /**
     * List of users to search for (optional).
     */
    bkusers?: string | string[];
    /**
     * Get all blocks applying to this IP address or CIDR range, including range blocks.
     * Cannot be used together with `bkusers`. CIDR ranges broader than IPv4/16 or IPv6/19 are not accepted.
     */
    bkip?: string;
    /**
     * The maximum number of blocks to list.
     *
     * Defaults to 10.
     */
    bklimit?: limit;
    /**
     * Which properties to get:
     *
     * - **id**: Adds the ID of the block.
     * - **user**: Adds the username of the blocked user.
     * - **userid**: Adds the user ID of the blocked user.
     * - **by**: Adds the username of the blocking user.
     * - **byid**: Adds the user ID of the blocking user.
     * - **timestamp**: Adds the timestamp of when the block was given.
     * - **expiry**: Adds the timestamp of when the block expires.
     * - **reason**: Adds the reason given for the block.
     * - **parsedreason**: Adds the parsed reason given for the block.
     * - **range**: Adds the range of IP addresses affected by the block.
     * - **flags**: Tags the ban with (autoblock, anononly, etc.).
     * - **restrictions**: Adds the partial block restrictions if the block is not sitewide.
     *
     * Defaults to `id`, `user`, `by`, `timestamp`, `expiry`, `reason`, and `flags`.
     */
    bkprop?: OneOrMore<
        | "by"
        | "byid"
        | "expiry"
        | "flags"
        | "id"
        | "parsedreason"
        | "range"
        | "reason"
        | "restrictions"
        | "timestamp"
        | "user"
        | "userid"
    >;
    /**
     * Show only items that meet these criteria.
     * For example, to see only indefinite blocks on IP addresses, set `bkshow=ip|!temp`.
     */
    bkshow?: OneOrMore<
        "!account" | "!ip" | "!range" | "!temp" | "account" | "ip" | "range" | "temp"
    >;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    bkcontinue?: string;
}

/**
 * List all categories the pages belong to.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories
 */
export interface ApiQueryCategoriesParams extends ApiQueryParams {
    /**
     * Which additional properties to get for each category:
     *
     * - **sortkey**: Adds the sortkey (hexadecimal string) and sortkey prefix (human-readable part) for the category.
     * - **timestamp**: Adds timestamp of when the category was added.
     * - **hidden**: Tags categories that are hidden with `__HIDDENCAT__`.
     */
    clprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
    /**
     * Which kind of categories to show.
     */
    clshow?: OneOrMore<"!hidden" | "hidden">;
    /**
     * How many categories to return.
     *
     * Defaults to 10.
     */
    cllimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    clcontinue?: string;
    /**
     * Only list these categories. Useful for checking whether a certain page is in a certain category.
     */
    clcategories?: string | string[];
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    cldir?: "ascending" | "descending";
}

/**
 * Returns information about the given categories.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categoryinfo
 */
export interface ApiQueryCategoryInfoParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    cicontinue?: string;
}

/**
 * List all pages in a given category.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers
 */
export interface ApiQueryCategoryMembersParams extends ApiQueryParams {
    /**
     * Which category to enumerate (required). Must include the `Category:` prefix. Cannot be used together with `cmpageid`.
     */
    cmtitle?: string;
    /**
     * Page ID of the category to enumerate. Cannot be used together with `cmtitle`.
     */
    cmpageid?: number;
    /**
     * Which pieces of information to include:
     *
     * - **ids**: Adds the page ID.
     * - **title**: Adds the title and namespace ID of the page.
     * - **sortkey**: Adds the sortkey used for sorting in the category (hexadecimal string).
     * - **sortkeyprefix**: Adds the sortkey prefix used for sorting in the category (human-readable part of the sortkey).
     * - **type**: Adds the type that the page has been categorised as (`page`, `subcat` or `file`).
     * - **timestamp**: Adds the timestamp of when the page was included.
     *
     * Defaults to `ids` and `title`.
     */
    cmprop?: OneOrMore<"ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type">;
    /**
     * Only include pages in these namespaces. Note that `cmtype=subcat` or `cmtype=file` may be used instead of `cmnamespace=14` or `6`.
     *
     * **Note:** Due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}, using this may result in fewer than `cmlimit` results returned before continuing; in extreme cases, zero results may be returned.
     */
    cmnamespace?: namespace | namespace[] | "*";
    /**
     * Which type of category members to include. Ignored when `cmsort=timestamp` is set.
     *
     * Defaults to `page`, `subcat`, and `file`.
     */
    cmtype?: OneOrMore<"file" | "page" | "subcat">;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    cmcontinue?: string;
    /**
     * The maximum number of pages to return.
     *
     * Defaults to 10.
     */
    cmlimit?: limit;
    /**
     * Property to sort by.
     *
     * Defaults to `sortkey`.
     */
    cmsort?: "sortkey" | "timestamp";
    /**
     * In which direction to sort.
     *
     * Defaults to `ascending`.
     */
    cmdir?: "asc" | "ascending" | "desc" | "descending" | "newer" | "older";
    /**
     * Timestamp to start listing from. Can only be used with `cmsort=timestamp`.
     */
    cmstart?: timestamp;
    /**
     * Timestamp to end listing at. Can only be used with `cmsort=timestamp`.
     */
    cmend?: timestamp;
    /**
     * Sortkey to start listing from, as returned by `cmprop=sortkey`. Can only be used with `cmsort=sortkey`.
     */
    cmstarthexsortkey?: string;
    /**
     * Sortkey to end listing at, as returned by `cmprop=sortkey`. Can only be used with `cmsort=sortkey`.
     */
    cmendhexsortkey?: string;
    /**
     * Sortkey prefix to start listing from. Can only be used with `cmsort=sortkey`. Overrides `cmstarthexsortkey`.
     */
    cmstartsortkeyprefix?: string;
    /**
     * Sortkey prefix to end listing **before** (not **at**; if this value occurs it will not be included!). Can only be used with cmsort=sortkey. Overrides cmendhexsortkey.
     */
    cmendsortkeyprefix?: string;
    /**
     * Use cmstarthexsortkey instead.
     *
     * @deprecated
     */
    cmstartsortkey?: string;
    /**
     * Use cmendhexsortkey instead.
     *
     * @deprecated
     */
    cmendsortkey?: string;
}

/**
 * Get a list of currently active campaigns with start and end dates and associated banners.
 */
export interface ApiCentralNoticeQueryActiveCampaignsParams extends ApiQueryParams {
    /**
     * Include enabled future campaigns (as well as currently active campaigns).
     */
    cnacincludefuture?: boolean;
}

/**
 * Get a log of campaign configuration changes.
 */
export interface ApiCentralNoticeLogsParams extends ApiQueryParams {
    /**
     * Campaign name (optional). Separate multiple values with a "|" (vertical bar).
     */
    campaign?: string;
    /**
     * Username (optional).
     */
    user?: string;
    /**
     * Maximum rows to return (optional).
     *
     * Defaults to 50.
     */
    limit?: limit;
    /**
     * Offset into result set (optional).
     *
     * Defaults to 0.
     */
    offset?: number;
    /**
     * Start time of range (optional).
     */
    start?: timestamp;
    /**
     * End time of range (optional).
     */
    end?: timestamp;
}

/**
 * **This API has been disabled by the site administrators. Querying the API will return no data.** Check which IP addresses are used by a given username or which usernames are used by a given IP address.
 *
 * @deprecated
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:CheckUser#API
 */
export interface CheckUserApiQueryCheckUserParams extends ApiQueryParams {
    /**
     * Type of CheckUser request:
     *
     * - **userips**: Get IP address of target user.
     * - **edits**: Deprecated. Get actions performed by target IP address or range.
     * - **actions**: Get actions performed by target IP address or range.
     * - **ipusers**: Get users from target IP address or range.
     */
    curequest?: "actions" | "ipusers" | "userips" | "edits";
    /**
     * Username, IP address, or CIDR range to check.
     */
    cutarget?: string;
    /**
     * Reason to check.
     *
     * Defaults to an empty string.
     */
    cureason?: string;
    /**
     * Limit of rows.
     *
     * Defaults to 500.
     */
    culimit?: limit;
    /**
     * Time limit of user data (like "-2 weeks" or "2 weeks ago").
     *
     * Defaults to `-2 weeks`.
     */
    cutimecond?: string;
    /**
     * Use XFF data instead of IP address.
     */
    cuxff?: string;
    /**
     * A "csrf" token retrieved from {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Btokens action=query&meta=tokens}
     *
     * Sensitive parameter.
     */
    cutoken?: string;
}

/**
 * Return formatted block details for sitewide blocks affecting the current user.
 *
 * @private
 */
export interface CheckUserApiQueryFormattedBlockInfoParams extends ApiQueryParams {}

/**
 * Get entries from the CheckUser log.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:CheckUser#API
 */
export interface CheckUserApiQueryCheckUserLogParams extends ApiQueryParams {
    /**
     * Username of the CheckUser.
     */
    culuser?: string;
    /**
     * Checked user, IP address, or CIDR range.
     */
    cultarget?: string;
    /**
     * Reason given for the check.
     */
    culreason?: string;
    /**
     * Limit of rows.
     *
     * Defaults to 10.
     */
    cullimit?: limit;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: culfrom has to be before culto.
     * - **older**: List newest first (default). Note: culfrom has to be later than culto.
     *
     * Defaults to `older`.
     */
    culdir?: "newer" | "older";
    /**
     * The timestamp to start enumerating from.
     */
    culfrom?: timestamp;
    /**
     * The timestamp to end enumerating.
     */
    culto?: timestamp;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    culcontinue?: string;
}

/**
 * Dump of a CirrusSearch article document from the database servers
 *
 * @private
 */
export interface CirrusSearchApiQueryBuildDocumentParams extends ApiQueryParams {
    /**
     * Type of data to extract
     *
     * Defaults to `content,links`.
     */
    cbbuilders?: OneOrMore<"content" | "links">;
    /**
     * Profile to use when limiting the size of the document
     */
    cblimiterprofile?: string;
}

/**
 * Dump of the document used by the completion suggester
 *
 * @private
 */
export interface CirrusSearchApiQueryCompSuggestBuildDocParams extends ApiQueryParams {
    /**
     * Provide a score method name to be used by the completion suggester
     *
     * Defaults to `popqual`.
     */
    csbmethod?: string;
}

/**
 * Dump of a CirrusSearch article document from the search servers
 *
 * @private
 */
export interface CirrusSearchApiQueryCirrusDocParams extends ApiQueryParams {
    /**
     * Define which fields should be returned by the search.
     *
     * Defaults to `all`.
     */
    cdincludes?: string | string[];
}

/**
 * Get Codex icons
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:CodexIcons
 */
export interface ApiQueryCodexIconsParams extends ApiQueryParams {
    /**
     * Names of icons
     */
    names?: string | string[] | "*";
}

/**
 * Read the community configuration
 */
export interface CommunityConfigurationApiQueryReadParams extends ApiQueryParams {
    /**
     * Community configuration provider ID
     */
    ccrprovider?:
        | "Babel"
        | "BlockedDomain"
        | "CampaignEvents"
        | "CommunityUpdates"
        | "ContentTranslation"
        | "GrowthHomepage"
        | "GrowthMentorList"
        | "GrowthSuggestedEdits"
        | "HelpPanel"
        | "Mentorship"
        | "ReportIncident"
        | "TemplateData-FeaturedTemplates";
    /**
     * Assert specific version
     */
    ccrassertversion?: string;
}

/**
 * Query Content Translation database for translations.
 */
export interface ContentTranslationActionApiQueryContentTranslationParams extends ApiQueryParams {
    /**
     * Translation ID.
     */
    translationid?: string;
    /**
     * The source language code.
     */
    from?: string;
    /**
     * The target language code.
     */
    to?: string;
    /**
     * The title of the source page.
     */
    sourcetitle?: string;
    /**
     * The title of the source section (optional).
     */
    sourcesectiontitle?: string;
    /**
     * The maximum number of translations to fetch.
     *
     * Defaults to 100.
     */
    limit?: limit;
    /**
     * Offset into result set (optional).
     */
    offset?: string;
    /**
     * State of the translation.
     *
     * Defaults to `draft`.
     */
    type?: "draft" | "published";
    /**
     * The usecase for which the translations are being fetched (optional).
     */
    usecase?: "desktop-editor-draft" | "translation-corpora-units" | "unified-dashboard";
}

/**
 * Get the section-aligned parallel text for a given translation. See also `list=cxpublishedtranslations`. Dumps are provided in different formats for high volume access.
 */
export interface ContentTranslationActionApiQueryContentTranslationCorporaParams
    extends ApiQueryParams {
    /**
     * ID of the translation.
     */
    translationid?: number;
    /**
     * Whether to strip all HTML tags to return plaintext.
     */
    striphtml?: boolean;
    /**
     * By default you will get all three of following if available: source text, machine translation and the postedited translation by the user. This parameter allows you not return some of these types.
     *
     * Defaults to `source`, `mt`, and `user`.
     */
    types?: OneOrMore<"mt" | "source" | "user">;
}

/**
 * Get user's favorite suggestions for Content Translation.
 */
export interface ContentTranslationActionApiQueryContentTranslationFavoriteSuggestionsParams
    extends ApiQueryParams {
    /**
     * The maximum number of translation suggestions to fetch.
     *
     * Defaults to 100.
     */
    limit?: limit;
    /**
     * Offset for paginated results.
     */
    offset?: string;
}

/**
 * Get the list of registered contributors (including temporary users) and the count of anonymous contributors to a page.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Contributors
 */
export interface ApiQueryContributorsParams extends ApiQueryParams {
    /**
     * Only include users in the given groups. Does not include implicit or auto-promoted groups like *, user, or autoconfirmed.
     */
    pcgroup?: string | string[];
    /**
     * Exclude users in the given groups. Does not include implicit or auto-promoted groups like *, user, or autoconfirmed.
     */
    pcexcludegroup?: string | string[];
    /**
     * Only include users having the given rights. Does not include rights granted by implicit or auto-promoted groups like *, user, or autoconfirmed.
     */
    pcrights?: string | string[];
    /**
     * Exclude users having the given rights. Does not include rights granted by implicit or auto-promoted groups like *, user, or autoconfirmed.
     */
    pcexcluderights?: string | string[];
    /**
     * How many contributors to return.
     *
     * Defaults to 10.
     */
    pclimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    pccontinue?: string;
}

/**
 * Returns coordinates of the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#prop.3Dcoordinates
 */
export interface GeoDataApiQueryCoordinatesParams extends ApiQueryParams {
    /**
     * How many coordinates to return.
     *
     * Defaults to 10.
     */
    colimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    cocontinue?: string;
    /**
     * Which additional coordinate properties to return. (Properties that are always returned: `lat`, `lon`, and either `primary` or `secondary` as a boolean flag.)
     *
     * - **type**: Type of the object the coordinates point to. See {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#Usage mw:Special:MyLanguage/Extension:GeoData#Usage} for details.
     * - **name**: Name of the object.
     * - **dim**: Approximate size of the object in meters.
     * - **country**: ISO 3166-1 alpha-2 country code (e.g. `US` or `RU`).
     * - **region**: ISO 3166-2 region code (the part of the ISO 3166-2 code after the dash; e.g. `FL` or `MOS`).
     * - **globe**: Which terrestrial body the coordinates are relative to (e.g. `moon` or `pluto`). Defaults to Earth. See {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#Glossary mw:Special:MyLanguage/Extension:GeoData#Glossary} for details.
     *
     * Defaults to `globe`.
     */
    coprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    /**
     * Which kind of coordinates to return.
     *
     * - **primary**: The location of the subject of the article. There is at most one primary coordinate per title.
     * - **secondary**: The location of some object that's mentioned in the article. Any number of secondary coordinates can be associated with a title.
     * - **all**: Return both primary and secondary coordinates.
     *
     * Defaults to `primary`.
     */
    coprimary?: "all" | "primary" | "secondary";
    /**
     * Return distance in meters from the geographical coordinates of every valid result from the given coordinates.
     *
     * Format: Latitude and longitude separated by pipe (`|`).
     */
    codistancefrompoint?: string;
    /**
     * Return distance in meters from the geographical coordinates of every valid result from the coordinates of this page.
     */
    codistancefrompage?: string;
}

/**
 * Get ContentTranslation local configuration settings.
 */
export interface ContentTranslationActionApiQueryContentTranslationConfigParams
    extends ApiQueryParams {}

/**
 * Get the number of your published translations that were deleted.
 *
 * @private
 */
export interface ContentTranslationActionApiQueryDeletedTranslationsParams extends ApiQueryParams {
    /**
     * Timestamp to get only newer deletions.
     */
    dtafter?: timestamp;
    /**
     * Namespace in which the deleted translations were published. Defaults to the main namespace.
     */
    dtnamespace?: namespace;
}

/**
 * Fetch all published translations information.
 */
export interface ContentTranslationActionApiQueryPublishedTranslationsParams
    extends ApiQueryParams {
    /**
     * The source language code.
     */
    from?: string;
    /**
     * The target language code.
     */
    to?: string;
    /**
     * The maximum number of translations to fetch.
     *
     * Defaults to 500.
     */
    limit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     *
     * Defaults to 0.
     */
    offset?: number;
}

/**
 * Fetch the translation statistics for the given user.
 */
export interface ContentTranslationActionApiQueryTranslatorStatsParams extends ApiQueryParams {
    /**
     * The translator's username. This parameter is optional. If not passed, the currently logged-in user will be used.
     */
    translator?: string;
}

/**
 * Get deleted revision information.
 *
 * May be used in several ways:
 *
 * - Get deleted revisions for a set of pages, by setting titles or pageids. Ordered by title and timestamp.
 * - Get data about a set of deleted revisions by setting their IDs with revids. Ordered by revision ID.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions
 */
export interface ApiQueryDeletedRevisionsParams extends ApiQueryParams {
    /**
     * Which properties to get for each revision:
     *
     * - **ids**: The ID of the revision.
     * - **flags**: Revision flags (minor).
     * - **timestamp**: The timestamp of the revision.
     * - **user**: User that made the revision. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: User ID of the revision creator. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **size**: Length (bytes) of the revision.
     * - **slotsize**: Length (bytes) of each revision slot.
     * - **sha1**: SHA-1 (base 16) of the revision. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **slotsha1**: SHA-1 (base 16) of each revision slot. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **contentmodel**: Content model ID of each revision slot.
     * - **comment**: Comment by the user for the revision. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Parsed comment by the user for the revision. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **content**: Content of each revision slot. If the content has been revision deleted, a `texthidden` property will be returned. For performance reasons, if this option is used, `drvlimit` is enforced to 50.
     * - **tags**: Tags for the revision.
     * - **roles**: List content slot roles that exist in the revision.
     * - **parsetree**: Deprecated. Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} or {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. The XML parse tree of revision content (requires content model `wikitext`). For performance reasons, if this option is used, `drvlimit` is enforced to 50.
     *
     * Defaults to `ids`, `timestamp`, `flags`, `comment`, and `user`.
     */
    drvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    /**
     * Which revision slots to return data for, when slot-related properties are included in `drvprops`. If omitted, data from the `main` slot will be returned in a backwards-compatible format.
     */
    drvslots?: OneOrMore<"main"> | "*";
    /**
     * Limit how many revisions will be returned. If `drvprop=content`, `drvprop=parsetree`, `drvdiffto` or `drvdifftotext` is used, the limit is 50. If `drvparse` is used, the limit is 1.
     */
    drvlimit?: limit;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} instead. Expand templates in revision content (requires drvprop=content).
     *
     * @deprecated
     */
    drvexpandtemplates?: boolean;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} or {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. Generate XML parse tree for revision content (requires drvprop=content).
     *
     * @deprecated
     */
    drvgeneratexml?: boolean;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. Parse revision content (requires `drvprop=content`). For performance reasons, if this option is used, `drvlimit` is enforced to 1.
     *
     * @deprecated
     */
    drvparse?: boolean;
    /**
     * Only retrieve the content of the section with this identifier.
     */
    drvsection?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Revision ID to diff each revision to. Use `prev`, `next` and `cur` for the previous, next and current revision respectively. For performance reasons, if this option is used, `drvlimit` is enforced to 50.
     *
     * @deprecated
     */
    drvdiffto?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Text to diff each revision to. Only diffs a limited number of revisions. Overrides `drvdiffto`. If `drvsection` is set, only that section will be diffed against this text. For performance reasons, if this option is used, `drvlimit` is enforced to 50.
     *
     * @deprecated
     */
    drvdifftotext?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Perform a pre-save transform on the text before diffing it. Only valid when used with `drvdifftotext`.
     *
     * @deprecated
     */
    drvdifftotextpst?: boolean;
    /**
     * Serialization format used for `drvdifftotext` and expected for output of content.
     *
     * @deprecated
     */
    drvcontentformat?: string;
    /**
     * The timestamp to start enumerating from. Ignored when processing a list of revision IDs.
     */
    drvstart?: timestamp;
    /**
     * The timestamp to stop enumerating at. Ignored when processing a list of revision IDs.
     */
    drvend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: drvstart has to be before drvend.
     * - **older**: List newest first (default). Note: drvstart has to be later than drvend.
     *
     * Defaults to `older`.
     */
    drvdir?: "newer" | "older";
    /**
     * Only list revisions tagged with this tag.
     */
    drvtag?: string;
    /**
     * Only list revisions by this user.
     */
    drvuser?: string;
    /**
     * Don't list revisions by this user.
     */
    drvexcludeuser?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    drvcontinue?: string;
}

/**
 * List deleted revisions.
 *
 * Operates in three modes:
 *
 * - List deleted revisions for the given titles, sorted by timestamp.
 * - List deleted contributions for the given user, sorted by timestamp (no titles specified).
 * - List all deleted revisions in the given namespace, sorted by title and timestamp (no titles specified, druser not set).
 * Certain parameters only apply to some modes and are ignored in others.
 *
 * @deprecated
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevs
 */
export interface ApiQueryDeletedrevsParams extends ApiQueryParams {
    /**
     * The timestamp to start enumerating from.
     */
    drstart?: timestamp;
    /**
     * The timestamp to stop enumerating at.
     */
    drend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: drstart has to be before drend.
     * - **older**: List newest first (default). Note: drstart has to be later than drend.
     *
     * Defaults to `older`.
     */
    drdir?: "newer" | "older";
    /**
     * Start listing at this title.
     */
    drfrom?: string;
    /**
     * Stop listing at this title.
     */
    drto?: string;
    /**
     * Search for all page titles that begin with this value.
     */
    drprefix?: string;
    /**
     * List only one revision for each page.
     */
    drunique?: boolean;
    /**
     * Only list pages in this namespace.
     *
     * Defaults to 0.
     */
    drnamespace?: namespace;
    /**
     * Only list revisions tagged with this tag.
     */
    drtag?: string;
    /**
     * Only list revisions by this user.
     */
    druser?: string;
    /**
     * Don't list revisions by this user.
     */
    drexcludeuser?: string;
    /**
     * Which properties to get:
     *
     * - **revid**: Adds the revision ID of the deleted revision.
     * - **parentid**: Adds the revision ID of the previous revision to the page.
     * - **user**: Adds the user who made the revision.
     * - **userid**: Adds the ID of the user who made the revision.
     * - **comment**: Adds the comment of the revision.
     * - **parsedcomment**: Adds the parsed comment of the revision.
     * - **minor**: Tags if the revision is minor.
     * - **len**: Adds the length (bytes) of the revision.
     * - **sha1**: Adds the SHA-1 (base 16) of the revision.
     * - **content**: Adds the content of the revision. For performance reasons, if this option is used, `drlimit` is enforced to 50.
     * - **token**: Deprecated. Gives the edit token.
     * - **tags**: Tags for the revision.
     *
     * Defaults to `user` and `comment`.
     */
    drprop?: OneOrMore<
        | "comment"
        | "content"
        | "len"
        | "minor"
        | "parentid"
        | "parsedcomment"
        | "revid"
        | "sha1"
        | "tags"
        | "user"
        | "userid"
        | "token"
    >;
    /**
     * The maximum amount of revisions to list. If `drprop=content` is used, the limit is 50.
     *
     * Defaults to 10.
     */
    drlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    drcontinue?: string;
}

/**
 * Get a short description a.k.a. subtitle explaining what the target page is about.
 *
 * The description is plain text, on a single line, but otherwise arbitrary (potentially including raw HTML tags, which also should be interpreted as plain text). It must not be used in HTML unescaped!
 *
 * @private
 */
export interface WikibaseClientApiDescriptionParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     *
     * Defaults to 0.
     */
    desccontinue?: number;
    /**
     * Which description source to prefer if present:
     *
     * - **local**: Local descriptions via `{{SHORTDESC:...}}` parser function in the wikitext of the page.
     * - **central**: Central descriptions from the associated Wikidata item.
     *
     * Defaults to `local`.
     */
    descprefersource?: "central" | "local";
}

/**
 * List all files that are duplicates of the given files based on hash values.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles
 */
export interface ApiQueryDuplicateFilesParams extends ApiQueryParams {
    /**
     * How many duplicate files to return.
     *
     * Defaults to 10.
     */
    dflimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    dfcontinue?: string;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    dfdir?: "ascending" | "descending";
    /**
     * Look only for files in the local repository.
     */
    dflocalonly?: boolean;
}

/**
 * Find all pages that embed (transclude) the given title.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin
 */
export interface ApiQueryBacklinksParams extends ApiQueryParams {
    /**
     * Title to search. Cannot be used together with eipageid.
     */
    eititle?: string;
    /**
     * Page ID to search. Cannot be used together with eititle.
     */
    eipageid?: number;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    eicontinue?: string;
    /**
     * The namespace to enumerate.
     */
    einamespace?: namespace | namespace[] | "*";
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    eidir?: "ascending" | "descending";
    /**
     * How to filter for redirects.
     *
     * Defaults to `all`.
     */
    eifilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * How many total pages to return.
     *
     * Defaults to 10.
     */
    eilimit?: limit;
}

/**
 * Returns all external URLs (not interwikis) from the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Extlinks
 */
export interface ApiQueryExternalLinksParams extends ApiQueryParams {
    /**
     * How many links to return.
     *
     * Defaults to 10.
     */
    ellimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    elcontinue?: string;
    /**
     * Protocol of the URL. If empty and `elquery` is set, the protocol is `http` and `https`. Leave both this and `elquery` empty to list all external links.
     *
     * Defaults to an empty string.
     */
    elprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "wikipedia"
        | "worldwind"
        | "xmpp";
    /**
     * Search string without protocol. Useful for checking whether a certain page contains a certain external url.
     */
    elquery?: string;
    /**
     * Expand protocol-relative URLs with the canonical protocol.
     *
     * @deprecated
     */
    elexpandurl?: boolean;
}

/**
 * Returns plain-text or limited HTML extracts of the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TextExtracts#API
 */
export interface TextExtractsApiQueryExtractsParams extends ApiQueryParams {
    /**
     * How many characters to return. Actual text returned might be slightly longer.
     */
    exchars?: number;
    /**
     * How many sentences to return.
     */
    exsentences?: number;
    /**
     * How many extracts to return. (Multiple extracts can only be returned if exintro is set to true.)
     *
     * Defaults to 20.
     */
    exlimit?: limit;
    /**
     * Return only content before the first section.
     */
    exintro?: boolean;
    /**
     * Return extracts as plain text instead of limited HTML.
     */
    explaintext?: boolean;
    /**
     * How to format sections in plaintext mode:
     *
     * - **plain**: No formatting.
     * - **wiki**: Wikitext-style formatting (== like this ==).
     * - **raw**: This module's internal representation (section titles prefixed with <ASCII 1><ASCII 2><section level><ASCII 2><ASCII 1>).
     *
     * Defaults to `wiki`.
     */
    exsectionformat?: "plain" | "raw" | "wiki";
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    excontinue?: number;
}

/**
 * Enumerate pages that contain a given URL.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage
 */
export interface ApiQueryExtLinksUsageParams extends ApiQueryParams {
    /**
     * Which pieces of information to include:
     *
     * - **ids**: Adds the ID of page.
     * - **title**: Adds the title and namespace ID of the page.
     * - **url**: Adds the URL used in the page.
     *
     * Defaults to `ids`, `title`, and `url`.
     */
    euprop?: OneOrMore<"ids" | "title" | "url">;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    eucontinue?: string;
    /**
     * Protocol of the URL. If empty and `euquery` is set, the protocol is `http` and `https`. Leave both this and `euquery` empty to list all external links.
     *
     * Defaults to an empty string.
     */
    euprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "wikipedia"
        | "worldwind"
        | "xmpp";
    /**
     * Search string without protocol. See {@link https://www.mediawiki.org/wiki/Special:LinkSearch Special:LinkSearch}. Leave empty to list all external links.
     */
    euquery?: string;
    /**
     * The page namespaces to enumerate.
     *
     * **Note:** Due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}, using this may result in fewer than `eulimit` results returned before continuing; in extreme cases, zero results may be returned.
     */
    eunamespace?: namespace | namespace[] | "*";
    /**
     * How many pages to return.
     *
     * Defaults to 10.
     */
    eulimit?: limit;
    /**
     * Expand protocol-relative URLs with the canonical protocol.
     *
     * @deprecated
     */
    euexpandurl?: boolean;
}

/**
 * Get a summary of logged API feature usages for a user agent.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ApiFeatureUsage
 */
export interface ApiFeatureUsageApiQueryFeatureUsageParams extends ApiQueryParams {
    /**
     * Start of date range to query.
     */
    afustart?: timestamp;
    /**
     * End of date range to query.
     */
    afuend?: timestamp;
    /**
     * User agent to query. If not specified, the agent in the request will be queried.
     */
    afuagent?: string;
    /**
     * If specified, return details on only these features.
     */
    afufeatures?: string | string[];
}

/**
 * Enumerate all deleted files sequentially.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filearchive
 */
export interface ApiQueryFilearchiveParams extends ApiQueryParams {
    /**
     * The image title to start enumerating from.
     */
    fafrom?: string;
    /**
     * The image title to stop enumerating at.
     */
    fato?: string;
    /**
     * Search for all image titles that begin with this value.
     */
    faprefix?: string;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    fadir?: "ascending" | "descending";
    /**
     * SHA1 hash of image. Overrides fasha1base36.
     */
    fasha1?: string;
    /**
     * SHA1 hash of image in base 36 (used in MediaWiki).
     */
    fasha1base36?: string;
    /**
     * Which image information to get:
     *
     * - **sha1**: Adds SHA-1 hash for the image.
     * - **timestamp**: Adds timestamp for the uploaded version.
     * - **user**: Adds user who uploaded the image version.
     * - **size**: Adds the size of the image in bytes and the height, width and page count (if applicable).
     * - **dimensions**: Alias for size.
     * - **description**: Adds description of the image version.
     * - **parseddescription**: Parse the description of the version.
     * - **mime**: Adds MIME of the image.
     * - **mediatype**: Adds the media type of the image.
     * - **metadata**: Lists Exif metadata for the version of the image.
     * - **bitdepth**: Adds the bit depth of the version.
     * - **archivename**: Adds the filename of the archive version for non-latest versions.
     *
     * Defaults to `timestamp`.
     */
    faprop?: OneOrMore<
        | "archivename"
        | "bitdepth"
        | "description"
        | "dimensions"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parseddescription"
        | "sha1"
        | "size"
        | "timestamp"
        | "user"
    >;
    /**
     * How many images to return in total.
     *
     * Defaults to 10.
     */
    falimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    facontinue?: string;
}

/**
 * Return meta information about image repositories configured on the wiki.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filerepoinfo
 */
export interface ApiQueryFileRepoInfoParams extends ApiQueryParams {
    /**
     * Which repository properties to get (properties available may vary on other wikis).
     *
     * - **canUpload**: Whether files can be uploaded to this repository, e.g. via CORS and shared authentication.
     * - **descBaseUrl**: (no description)
     * - **descriptionCacheExpiry**: (no description)
     * - **displayname**: The human-readable name of the repository wiki.
     * - **favicon**: Repository wiki's favicon URL, from {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgFavicon `$wgFavicon`}.
     * - **fetchDescription**: Whether file description pages are fetched from this repository when viewing local file description pages.
     * - **initialCapital**: Whether file names implicitly start with a capital letter.
     * - **local**: Whether that repository is the local one or not.
     * - **name**: The key of the repository - used in e.g. {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgForeignFileRepos `$wgForeignFileRepos`} and {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bimageinfo imageinfo} return values.
     * - **rootUrl**: Root URL path for image paths.
     * - **scriptDirUrl**: Root URL path for the repository wiki's MediaWiki installation.
     * - **thumbUrl**: Root URL path for thumbnail paths.
     * - **url**: Public zone URL path.
     *
     * Defaults to `canUpload`, `descBaseUrl`, `descriptionCacheExpiry`, `displayname`, `favicon`, `fetchDescription`, `initialCapital`, `local`, `name`, `rootUrl`, `scriptDirUrl`, `thumbUrl`, and `url`.
     */
    friprop?: OneOrMore<
        | "canUpload"
        | "descBaseUrl"
        | "descriptionCacheExpiry"
        | "displayname"
        | "favicon"
        | "fetchDescription"
        | "initialCapital"
        | "local"
        | "name"
        | "rootUrl"
        | "scriptDirUrl"
        | "thumbUrl"
        | "url"
    >;
}

/**
 * Find all pages that use the given files.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage
 */
export interface ApiQueryBacklinkspropParams extends ApiQueryParams {
    /**
     * Which properties to get:
     *
     * - **pageid**: Page ID of each page.
     * - **title**: Title of each page.
     * - **redirect**: Flag if the page is a redirect.
     *
     * Defaults to `pageid`, `title`, and `redirect`.
     */
    fuprop?: OneOrMore<"pageid" | "redirect" | "title">;
    /**
     * Only include pages in these namespaces.
     */
    funamespace?: namespace | namespace[] | "*";
    /**
     * Show only items that meet these criteria:
     *
     * - **redirect**: Only show redirects.
     * - **!redirect**: Only show non-redirects.
     */
    fushow?: OneOrMore<"!redirect" | "redirect">;
    /**
     * How many to return.
     *
     * Defaults to 10.
     */
    fulimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    fucontinue?: string;
}

/**
 * Get information about the flagging status of the given pages.
 *
 * If a page is flagged, the following parameters are returned:
 *
 * - **stable_revid**: The revision ID of the latest stable revision.
 * - **level**: - **level_text**: The highest flagging level of the page.
 * - **pending_since**: If there are any current unreviewed revisions for that page, holds the timestamp of the first of them.
 * If the page has protection configuration, the following parameters are returned:
 *
 * - **protection_level**: The right a user must have to not require review on the page.
 * - **protection_expiry**: When the protection expires.
 */
export interface ApiQueryFlaggedParams extends ApiQueryParams {}

/**
 * Returns a list of gadget sections.
 */
export interface GadgetsApiQueryGadgetCategoriesParams extends ApiQueryParams {
    /**
     * What gadget section information to get:
     *
     * - **name**: Internal section name.
     * - **title**: Section title.
     * - **members**: Number of gadgets in section.
     *
     * Defaults to `name`.
     */
    gcprop?: OneOrMore<"members" | "name" | "title">;
    /**
     * Names of sections to retrieve.
     */
    gcnames?: string | string[];
}

/**
 * Returns a list of gadgets used on this wiki.
 */
export interface GadgetsApiQueryGadgetsParams extends ApiQueryParams {
    /**
     * What gadget information to get:
     *
     * - **id**: Internal gadget ID.
     * - **metadata**: The gadget metadata.
     * - **desc**: Gadget description transformed into HTML (can be slow, use only if really needed).
     *
     * Defaults to `id` and `metadata`.
     */
    gaprop?: OneOrMore<"desc" | "id" | "metadata">;
    /**
     * Gadgets from what categories to retrieve.
     */
    gacategories?: string | string[];
    /**
     * IDs of gadgets to retrieve.
     */
    gaids?: string | string[];
    /**
     * List only gadgets allowed to current user.
     */
    gaallowedonly?: boolean;
    /**
     * List only gadgets enabled by current user.
     */
    gaenabledonly?: boolean;
}

/**
 * Returns pages having coordinates that are located in a certain area.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch
 */
export interface GeoDataApiQueryGeoSearchElasticParams extends ApiQueryParams {
    /**
     * Coordinate around which to search.
     *
     * Format: Latitude and longitude separated by pipe (`|`).
     */
    gscoord?: string;
    /**
     * Title of page around which to search.
     */
    gspage?: string;
    /**
     * Bounding box to search in: pipe (`|`) separated coordinates of top left and bottom right corners.
     */
    gsbbox?: string;
    /**
     * Search radius in meters.
     *
     * Defaults to 500.
     */
    gsradius?: number;
    /**
     * Restrict search to objects no larger than this, in meters.
     */
    gsmaxdim?: number;
    /**
     * Set the sort order of returned results.
     *
     * - **distance**: Rank pages by their distance to the center.
     * - **relevance**: Rank pages by their relevance according to {@link https://www.mediawiki.org/wiki/Extension:CirrusSearch CirrusSearch}, similar to how {@link https://www.mediawiki.org/wiki/Special:Search Special:Search} does it. Currently only supported on wikis that use the ElasticSearch backend, see {@link https://www.mediawiki.org/wiki/Extension:GeoData#Search_backends mw:Extension:GeoData#Search backends}.
     *
     * Defaults to `distance`.
     */
    gssort?: "distance" | "relevance";
    /**
     * Maximum number of pages to return.
     *
     * Defaults to 10.
     */
    gslimit?: limit;
    /**
     * Globe to search on. See {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#Glossary mw:Special:MyLanguage/Extension:GeoData#Glossary} for details.
     *
     * Defaults to `earth`.
     */
    gsglobe?: "earth" | "mars" | "moon" | "venus";
    /**
     * Namespaces to search.
     *
     * Defaults to 0.
     */
    gsnamespace?: namespace | namespace[] | "*";
    /**
     * Which additional coordinate properties to return. (Properties that are always returned: `lat`, `lon`, and either `primary` or `secondary` as a boolean flag.)
     *
     * - **type**: Type of the object the coordinates point to. See {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#Usage mw:Special:MyLanguage/Extension:GeoData#Usage} for details.
     * - **name**: Name of the object.
     * - **dim**: Approximate size of the object in meters.
     * - **country**: ISO 3166-1 alpha-2 country code (e.g. `US` or `RU`).
     * - **region**: ISO 3166-2 region code (the part of the ISO 3166-2 code after the dash; e.g. `FL` or `MOS`).
     * - **globe**: Which terrestrial body the coordinates are relative to (e.g. `moon` or `pluto`). Defaults to Earth. See {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#Glossary mw:Special:MyLanguage/Extension:GeoData#Glossary} for details.
     *
     * Defaults to `globe`.
     */
    gsprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    /**
     * Which kind of coordinates to return.
     *
     * - **primary**: The location of the subject of the article. There is at most one primary coordinate per title.
     * - **secondary**: The location of some object that's mentioned in the article. Any number of secondary coordinates can be associated with a title.
     * - **all**: Return both primary and secondary coordinates.
     *
     * Defaults to `primary`.
     */
    gsprimary?: "all" | "primary" | "secondary";
    /**
     * Whether debug information should be returned.
     */
    gsdebug?: boolean;
}

/**
 * Enumerate all global users.
 */
export interface CentralAuthApiQueryGlobalAllUsersParams extends ApiQueryParams {
    /**
     * The username to start enumerating from.
     */
    agufrom?: string;
    /**
     * The username to stop enumerating at.
     */
    aguto?: string;
    /**
     * Search for all users that begin with this value.
     */
    aguprefix?: string;
    /**
     * Direction to sort in.
     *
     * Defaults to `ascending`.
     */
    agudir?: "ascending" | "descending";
    /**
     * Limit users to given global groups.
     */
    agugroup?: string | string[];
    /**
     * Exclude users in given global groups.
     */
    aguexcludegroup?: string | string[];
    /**
     * What pieces of information to include:
     *
     * - **lockinfo**: Whether the user account is locked.
     * - **groups**: Lists global groups that the user is in. This uses more server resources and may return fewer results than the limit.
     * - **existslocally**: Adds the information if the user exists locally.
     */
    aguprop?: OneOrMore<"existslocally" | "groups" | "lockinfo">;
    /**
     * How many total usernames to return.
     *
     * Defaults to 10.
     */
    agulimit?: limit;
    /**
     * Exclude users of named accounts.
     */
    aguexcludenamed?: boolean;
    /**
     * Exclude users of temporary accounts.
     */
    aguexcludetemp?: boolean;
}

/**
 * List all globally blocked IP addresses.
 */
export interface GlobalBlockingApiQueryGlobalBlocksParams extends ApiQueryParams {
    /**
     * The timestamp to start enumerating from.
     */
    bgstart?: timestamp;
    /**
     * The timestamp to stop enumerating at.
     */
    bgend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * Defaults to `older`.
     */
    bgdir?: "newer" | "older";
    /**
     * Pipe-separated list of block IDs to list.
     */
    bgids?: number | number[];
    /**
     * Pipe-separated list of IP addresses to search for.
     *
     * @deprecated
     */
    bgaddresses?: string | string[];
    /**
     * Pipe-separated list of usernames, IP addresses, or IP ranges to search for. To search for IP blocks inside a given range, use bgip instead.
     */
    bgtargets?: string | string[];
    /**
     * Get all blocks applying to this IP address or CIDR range, including range blocks. Cannot be used together with bgaddresses or bgtargets. CIDR ranges broader than /16 are not accepted.
     */
    bgip?: string;
    /**
     * The maximum amount of blocks to list.
     *
     * Defaults to 10.
     */
    bglimit?: limit;
    /**
     * Which properties to get.
     *
     * - **id**: Adds the ID of the global block.
     * - **address**: Deprecated. Adds the target of the global block. This is deprecated and has been replaced by the 'target' prop.
     * - **target**: Adds the target of the global block.
     * - **by**: Adds the username of the blocking user, along with the wiki where they performed the global block.
     * - **timestamp**: Adds the timestamp of when the global block was given.
     * - **expiry**: Adds the timestamp of when the global block expires.
     * - **reason**: Adds the reason given for the global block.
     * - **range**: Adds the range of IP addresses affected by the global block (not included if the block does not target IP addresses).
     *
     * Defaults to `id`, `target`, `by`, `timestamp`, `expiry`, and `reason`.
     */
    bgprop?: OneOrMore<
        "by" | "expiry" | "id" | "range" | "reason" | "target" | "timestamp" | "address"
    >;
}

/**
 * Enumerate all global groups.
 */
export interface CentralAuthApiQueryGlobalGroupsParams extends ApiQueryParams {
    /**
     * What pieces of information to include.
     */
    ggpprop?: OneOrMore<"rights">;
}

/**
 * Retrieve global preferences for the current user.
 *
 * Can retrieve both global preferences and their local overrides.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GlobalPreferences/API
 */
export interface GlobalPreferencesApiQueryGlobalPreferencesParams extends ApiQueryParams {
    /**
     * Which prererences to include:
     *
     * - **preferences**: Global preferences.
     * - **localoverrides**: Local overrides for global preferences.
     *
     * Defaults to `preferences` and `localoverrides`.
     */
    gprprop?: OneOrMore<"localoverrides" | "preferences">;
}

/**
 * Show information about global renames that are in progress.
 */
export interface CentralAuthApiQueryGlobalRenameStatusParams extends ApiQueryParams {
    /**
     * User that is being renamed. Can be either their old name or new name.
     */
    grsuser?: string;
}

/**
 * Returns global image usage for a certain image.
 */
export interface GlobalUsageApiQueryGlobalUsageParams extends ApiQueryParams {
    /**
     * Which properties to return:
     *
     * - **url**: Adds url.
     * - **pageid**: Adds page ID.
     * - **namespace**: Adds namespace ID.
     *
     * Defaults to `url`.
     */
    guprop?: OneOrMore<"namespace" | "pageid" | "url">;
    /**
     * How many links to return.
     *
     * Defaults to 10.
     */
    gulimit?: limit;
    /**
     * Limit results to these namespaces.
     *
     * Defaults to `*`.
     */
    gunamespace?: namespace | namespace[] | "*";
    /**
     * Limit results to these sites.
     */
    gusite?: string | string[];
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    gucontinue?: string;
    /**
     * Filter local usage of the file.
     */
    gufilterlocal?: boolean;
}

/**
 * Show information about a global user.
 */
export interface CentralAuthApiQueryGlobalUserInfoParams extends ApiQueryParams {
    /**
     * User to get information about. If `guiuser` and `guiid` both are omitted, it defaults to the current user.
     */
    guiuser?: string;
    /**
     * Global user ID to get information about. If `guiuser` and `guiid` both are omitted, it defaults to the current user.
     */
    guiid?: number;
    /**
     * Which properties to get:
     *
     * - **groups**: Get a list of global groups this user belongs to.
     * - **rights**: Get a list of global rights this user has.
     * - **merged**: Get a list of merged accounts.
     * - **unattached**: Get a list of unattached accounts.
     * - **editcount**: Get the user's global edit count.
     */
    guiprop?: OneOrMore<"editcount" | "groups" | "merged" | "rights" | "unattached">;
}

/**
 * Get information about a list of global users.
 */
export interface CentralAuthApiQueryGlobalUsersParams extends ApiQueryParams {
    /**
     * Which pieces of information to include:
     *
     * - **locked**: Adds information on whether the user is globally locked.
     * - **editcount**: Adds the user's global edit count.
     * - **registration**: Adds the user's global account registration timestamp.
     * - **localinfo**: Adds the user's local account information.
     * - **groups**: Lists all the global groups each user belongs to.
     * - **groupmemberships**: Lists global groups that each user has been explicitly assigned to, including the expiry date of each group membership.
     * - **rights**: Lists all the global rights each user has.
     */
    gusprop?: OneOrMore<
        | "editcount"
        | "groupmemberships"
        | "groups"
        | "localinfo"
        | "locked"
        | "registration"
        | "rights"
    >;
    /**
     * A list of global users to obtain information for. Cannot be used together with `guscentralids`.
     */
    gususers?: string | string[];
    /**
     * A list of central user IDs to obtain information for. Cannot be used together with `gususers`.
     */
    guscentralids?: number | number[];
    /**
     * When listing groups or rights, only include those that apply to the current wiki.
     */
    guslocalgroups?: boolean;
}

/**
 * Fetch associated {@link https://www.mediawiki.org/wiki/wikitech:Add_Image image suggestion data}, if available
 */
export interface GrowthExperimentsApiQueryImageSuggestionDataParams extends ApiQueryParams {
    /**
     * Task type ID (to specify whether to fetch data for top-level or section-level image recommendations)
     *
     * Defaults to `image-recommendation`.
     */
    gisdtasktype?: "image-recommendation" | "section-image-recommendation";
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    gisdcontinue?: string;
}

/**
 * Query current user's mentee status; see documentation of action=growthsetmenteestatus for detailed information about individual statuses.
 */
export interface GrowthExperimentsApiQueryMenteeStatusParams extends ApiQueryParams {}

/**
 * List all the mentors
 */
export interface GrowthExperimentsApiQueryMentorListParams extends ApiQueryParams {}

/**
 * Get all mentees assigned to a given mentor
 */
export interface GrowthExperimentsApiQueryMentorMenteeParams extends ApiQueryParams {
    /**
     * Mentor to query mentees for
     */
    gemmmentor?: string;
}

/**
 * Query current user's mentor status
 */
export interface GrowthExperimentsApiQueryMentorStatusParams extends ApiQueryParams {}

/**
 * Get a suggested task type for a user to try next.
 *
 * @private
 */
export interface GrowthExperimentsApiQueryNextSuggestedTaskTypeParams extends ApiQueryParams {
    /**
     * The task type that the user is currently working on.
     */
    gnsttactivetasktype?:
        | "copyedit"
        | "expand"
        | "link-recommendation"
        | "links"
        | "references"
        | "revise-tone"
        | "update";
}

/**
 * Get list of mentees starred by the currently logged in mentor
 */
export interface GrowthExperimentsApiQueryStarredMenteesParams extends ApiQueryParams {}

/**
 * Get task recommendations suitable for newcomers.
 *
 * Suggests a set of articles which have some outstanding issues easy enough for a new editor to tackle.
 *
 * @private
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API
 */
export interface GrowthExperimentsApiQueryGrowthTasksParams extends ApiQueryParams {
    /**
     * Task types to limit results to. Leave empty to receive all suggestions.
     *
     * - **copyedit**: Copyedit
     * - **expand**: Expand short articles
     * - **links**: Add links between articles
     * - **references**: Find references
     * - **update**: Update articles
     * - **link-recommendation**: Add links between articles
     * - **revise-tone**: Revise tone
     *
     * Defaults to an empty string.
     */
    gttasktypes?: OneOrMore<
        | "copyedit"
        | "expand"
        | "link-recommendation"
        | "links"
        | "references"
        | "revise-tone"
        | "update"
    >;
    /**
     * Article topics to prefer in task suggestions.
     *
     * - **architecture**: Architecture
     * - **art**: Art
     * - **comics-and-anime**: Comics and anime
     * - **entertainment**: Entertainment
     * - **fashion**: Fashion
     * - **literature**: Literature
     * - **music**: Music
     * - **performing-arts**: Performing arts
     * - **sports**: Sports
     * - **tv-and-film**: TV and film
     * - **video-games**: Video games
     * - **biography**: Biography (all)
     * - **women**: Biography (women)
     * - **business-and-economics**: Business and economics
     * - **education**: Education
     * - **food-and-drink**: Food and drink
     * - **history**: History
     * - **military-and-warfare**: Military and warfare
     * - **philosophy-and-religion**: Philosophy and religion
     * - **politics-and-government**: Politics and government
     * - **society**: Society
     * - **transportation**: Transportation
     * - **biology**: Biology
     * - **chemistry**: Chemistry
     * - **computers-and-internet**: Computers and internet
     * - **earth-and-environment**: Earth and environment
     * - **engineering**: Engineering
     * - **general-science**: General science
     * - **mathematics**: Mathematics
     * - **medicine-and-health**: Medicine and health
     * - **physics**: Physics
     * - **technology**: Technology
     * - **africa**: Africa
     * - **asia**: Asia
     * - **central-america**: Central America
     * - **europe**: Europe
     * - **north-america**: North America
     * - **oceania**: Oceania
     * - **south-america**: South America
     *
     * Defaults to an empty string.
     */
    gttopics?: OneOrMore<
        | "africa"
        | "architecture"
        | "art"
        | "asia"
        | "biography"
        | "biology"
        | "business-and-economics"
        | "central-america"
        | "chemistry"
        | "comics-and-anime"
        | "computers-and-internet"
        | "earth-and-environment"
        | "education"
        | "engineering"
        | "entertainment"
        | "europe"
        | "fashion"
        | "food-and-drink"
        | "general-science"
        | "history"
        | "literature"
        | "mathematics"
        | "medicine-and-health"
        | "military-and-warfare"
        | "music"
        | "north-america"
        | "oceania"
        | "performing-arts"
        | "philosophy-and-religion"
        | "physics"
        | "politics-and-government"
        | "society"
        | "south-america"
        | "sports"
        | "technology"
        | "transportation"
        | "tv-and-film"
        | "video-games"
        | "women"
    >;
    /**
     * Matching mode for topics.
     */
    gttopicsmode?: "AND" | "OR";
    /**
     * Maximum number of task suggestions to return.
     */
    gtlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    gtoffset?: number;
    /**
     * Add debug data to the output.
     */
    gtdebug?: boolean;
    /**
     * Page IDs to exclude from the query.
     */
    gtexcludepageids?: number | number[];
}

/**
 * Returns file information and upload history.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageinfo
 */
export interface ApiQueryImageInfoParams extends ApiQueryParams {
    /**
     * Which file information to get:
     *
     * - **timestamp**: Adds timestamp for the uploaded version.
     * - **user**: Adds the user who uploaded each file version. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: Add the ID of the user that uploaded each file version. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **comment**: Comment on the version. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Parse the comment on the version. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **canonicaltitle**: Adds the canonical title of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **url**: Gives URL to the file and the description page. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **size**: Adds the size of the file in bytes and the height, width and page count (if applicable).
     * - **dimensions**: Alias for size.
     * - **sha1**: Adds SHA-1 hash for the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **mime**: Adds MIME type of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **thumbmime**: Adds MIME type of the image thumbnail (requires url and param iiurlwidth). If the file has been revision deleted, a `filehidden` property will be returned.
     * - **thumburls**: Adds thumbnail URLs of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **mediatype**: Adds the media type of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **metadata**: Lists Exif metadata for the version of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **commonmetadata**: Lists file format generic metadata for the version of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **extmetadata**: Lists formatted metadata combined from multiple sources. Results are HTML formatted. If the file has been revision deleted, a `filehidden` property will be returned.
     * **Note:** This is an expensive property to request, and should be avoided unless you need it. When using it, you should request only a few results at a time to avoid too much load.
     *
     * - **archivename**: Adds the filename of the archive version for non-latest versions. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **bitdepth**: Adds the bit depth of the version. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **uploadwarning**: Used by the Special:Upload page to get information about an existing file. Not intended for use outside MediaWiki core.
     * - **badfile**: Adds whether the file is on the {@link https://www.mediawiki.org/wiki/MediaWiki:Bad_image_list MediaWiki:Bad image list}
     *
     * Defaults to `timestamp` and `user`.
     */
    iiprop?: OneOrMore<
        | "archivename"
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "thumbmime"
        | "thumburls"
        | "timestamp"
        | "uploadwarning"
        | "url"
        | "user"
        | "userid"
    >;
    /**
     * How many file revisions to return per file.
     *
     * Defaults to 1.
     */
    iilimit?: limit;
    /**
     * Timestamp to start listing from.
     */
    iistart?: timestamp;
    /**
     * Timestamp to stop listing at.
     */
    iiend?: timestamp;
    /**
     * If iiprop=url is set, a URL to an image scaled to this width will be returned.
     * For performance reasons if this option is used, no more than 50 scaled images will be returned.
     *
     * Defaults to -1.
     */
    iiurlwidth?: number;
    /**
     * Similar to iiurlwidth.
     *
     * Defaults to -1.
     */
    iiurlheight?: number;
    /**
     * Version of metadata to use. If `latest` is specified, use latest version. Defaults to `1` for backwards compatibility.
     *
     * Defaults to `1`.
     */
    iimetadataversion?: string;
    /**
     * What language to fetch extmetadata in. This affects both which translation to fetch, if multiple are available, as well as how things like numbers and various values are formatted.
     *
     * Defaults to `en`.
     */
    iiextmetadatalanguage?: string;
    /**
     * If translations for extmetadata property are available, fetch all of them.
     */
    iiextmetadatamultilang?: boolean;
    /**
     * If specified and non-empty, only these keys will be returned for iiprop=extmetadata.
     */
    iiextmetadatafilter?: string | string[];
    /**
     * A handler specific parameter string. For example, PDFs might use `page15-100px`. `iiurlwidth` must be used and be consistent with `iiurlparam`.
     *
     * Defaults to an empty string.
     */
    iiurlparam?: string;
    /**
     * If `badfilecontexttitleprop=badfile` is set, this is the page title used when evaluating the {@link https://www.mediawiki.org/wiki/MediaWiki:Bad_image_list MediaWiki:Bad image list}
     */
    iibadfilecontexttitle?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    iicontinue?: string;
    /**
     * Look only for files in the local repository.
     */
    iilocalonly?: boolean;
}

/**
 * Returns all files contained on the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images
 */
export interface ApiQueryImagesParams extends ApiQueryParams {
    /**
     * How many files to return.
     *
     * Defaults to 10.
     */
    imlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    imcontinue?: string;
    /**
     * Only list these files. Useful for checking whether a certain page has a certain file.
     */
    imimages?: string | string[];
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    imdir?: "ascending" | "descending";
}

/**
 * Find all pages that use the given image title.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage
 */
export interface ApiQueryBacklinksParams extends ApiQueryParams {
    /**
     * Title to search. Cannot be used together with iupageid.
     */
    iutitle?: string;
    /**
     * Page ID to search. Cannot be used together with iutitle.
     */
    iupageid?: number;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    iucontinue?: string;
    /**
     * The namespace to enumerate.
     */
    iunamespace?: namespace | namespace[] | "*";
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    iudir?: "ascending" | "descending";
    /**
     * How to filter for redirects. If set to nonredirects when iuredirect is enabled, this is only applied to the second level.
     *
     * Defaults to `all`.
     */
    iufilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * How many total pages to return. If `iuredirect` is enabled, the limit applies to each level separately (which means up to 2 * `iulimit` results may be returned).
     *
     * Defaults to 10.
     */
    iulimit?: limit;
    /**
     * If linking page is a redirect, find all pages that link to that redirect as well. Maximum limit is halved.
     */
    iuredirect?: boolean;
}

/**
 * Get basic page information.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Info
 */
export interface ApiQueryInfoParams extends ApiQueryParams {
    /**
     * Which additional properties to get:
     *
     * - **protection**: List the protection level of each page.
     * - **talkid**: The page ID of the talk page for each non-talk page.
     * - **watched**: List the watched status of each page.
     * - **watchlistlabels**: List the watchlist labels for each page.
     * - **watchers**: The number of watchers, if allowed.
     * - **visitingwatchers**: The number of watchers of each page who have visited recent edits to that page, if allowed.
     * - **notificationtimestamp**: The watchlist notification timestamp of each page.
     * - **subjectid**: The page ID of the parent page for each talk page.
     * - **associatedpage**: The prefixed title of the {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Associated_pages associated subject or talk page}.
     * - **url**: Gives a full URL, an edit URL, and the canonical URL for each page.
     * - **readable**: Deprecated. Whether the user can read this page. Use `intestactions=read` instead.
     * - **preload**: Deprecated. Gives the text returned by EditFormPreloadText. Use `preloadcontent` instead, which supports other kinds of preloaded text too.
     * - **preloadcontent**: Gives the content to be shown in the editor when the page does not exist or while adding a new section.
     * - **editintro**: Gives the intro messages that should be shown to the user while editing this page or revision, as HTML.
     * - **displaytitle**: Gives the manner in which the page title is actually displayed.
     * - **varianttitles**: Gives the display title in all variants of the site content language.
     * - **linkclasses**: Gives the additional CSS classes (e.g. link colors) used for links to this page if they were to appear on the page named by `inlinkcontext`.
     */
    inprop?: OneOrMore<
        | "associatedpage"
        | "displaytitle"
        | "editintro"
        | "linkclasses"
        | "notificationtimestamp"
        | "preloadcontent"
        | "protection"
        | "subjectid"
        | "talkid"
        | "url"
        | "varianttitles"
        | "visitingwatchers"
        | "watched"
        | "watchers"
        | "watchlistlabels"
        | "preload"
        | "readable"
    >;
    /**
     * The context title to use when determining extra CSS classes (e.g. link colors) when `inprop` contains `linkclasses`.
     *
     * Defaults to `Main Page`.
     */
    inlinkcontext?: string;
    /**
     * Whether to consider the links as having a default caption (caption is a suffix of link target and preceded by slash, colon or start-of-string). It can have impact on the returned link classes.
     */
    indefaultlinkcaption?: boolean;
    /**
     * Test whether the current user can perform certain actions on the page.
     */
    intestactions?: string | string[];
    /**
     * Detail level for `intestactions`. Use the {@link https://www.mediawiki.org/wiki/Special:ApiHelp/main main module}'s `errorformat` and `errorlang` parameters to control the format of the messages returned.
     *
     * - **boolean**: Return a boolean value for each action.
     * - **full**: Return messages describing why the action is disallowed, or an empty array if it is allowed.
     * - **quick**: Like `full` but skipping expensive checks.
     *
     * Defaults to `boolean`.
     */
    intestactionsdetail?: "boolean" | "full" | "quick";
    /**
     * Test whether performing `intestactions` would automatically create a temporary account.
     */
    intestactionsautocreate?: boolean;
    /**
     * Title of a custom page to use as preloaded content.
     */
    inpreloadcustom?: string;
    /**
     * Parameters for the custom page being used as preloaded content.
     */
    inpreloadparams?: string | string[];
    /**
     * Return preloaded content for a new section on the page, rather than a new page.
     */
    inpreloadnewsection?: boolean;
    /**
     * Some intro messages come with optional wrapper frames. Use `moreframes` to include them or `lessframes` to omit them.
     *
     * Defaults to `moreframes`.
     */
    ineditintrostyle?: "lessframes" | "moreframes";
    /**
     * List of intro messages to remove from the response. Use this if a specific message is not relevant to your tool, or if the information is conveyed in a different way.
     */
    ineditintroskip?: string | string[];
    /**
     * Title of a custom page to use as an additional intro message.
     */
    ineditintrocustom?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    incontinue?: string;
}

/**
 * Determine if a page is marked as reviewed.
 */
export interface PageTriageApiIsReviewedParams extends ApiQueryParams {}

/**
 * Find all pages that link to the given interwiki link.
 *
 * Can be used to find all links with a prefix, or all links to a title (with a given prefix). Using neither parameter is effectively "all interwiki links".
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks
 */
export interface ApiQueryIWBacklinksParams extends ApiQueryParams {
    /**
     * Prefix for the interwiki.
     */
    iwblprefix?: string;
    /**
     * Interwiki link to search for. Must be used with `iwblblprefix`.
     */
    iwbltitle?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    iwblcontinue?: string;
    /**
     * How many total pages to return.
     *
     * Defaults to 10.
     */
    iwbllimit?: limit;
    /**
     * Which properties to get:
     *
     * - **iwprefix**: Adds the prefix of the interwiki.
     * - **iwtitle**: Adds the title of the interwiki.
     *
     * Defaults to an empty string.
     */
    iwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    iwbldir?: "ascending" | "descending";
}

/**
 * Returns all interwiki links from the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwlinks
 */
export interface ApiQueryIWLinksParams extends ApiQueryParams {
    /**
     * Which additional properties to get for each interwiki link:
     *
     * - **url**: Adds the full URL.
     */
    iwprop?: OneOrMore<"url">;
    /**
     * Only return interwiki links with this prefix.
     */
    iwprefix?: string;
    /**
     * Interwiki link to search for. Must be used with `iwprefix`.
     */
    iwtitle?: string;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    iwdir?: "ascending" | "descending";
    /**
     * How many interwiki links to return.
     *
     * Defaults to 10.
     */
    iwlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    iwcontinue?: string;
    /**
     * Whether to get the full URL (cannot be used with iwprop).
     *
     * @deprecated
     */
    iwurl?: boolean;
}

/**
 * Find all pages that link to the given language link.
 *
 * Can be used to find all links with a language code, or all links to a title (with a given language). Using neither parameter is effectively "all language links".
 *
 * Note that this may not consider language links added by extensions.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks
 */
export interface ApiQueryLangBacklinksParams extends ApiQueryParams {
    /**
     * Language for the language link.
     */
    lbllang?: string;
    /**
     * Language link to search for. Must be used with lbllang.
     */
    lbltitle?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    lblcontinue?: string;
    /**
     * How many total pages to return.
     *
     * Defaults to 10.
     */
    lbllimit?: limit;
    /**
     * Which properties to get:
     *
     * - **lllang**: Adds the language code of the language link.
     * - **lltitle**: Adds the title of the language link.
     *
     * Defaults to an empty string.
     */
    lblprop?: OneOrMore<"lllang" | "lltitle">;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    lbldir?: "ascending" | "descending";
}

/**
 * Returns all interlanguage links from the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langlinks
 */
export interface ApiQueryLangLinksParams extends ApiQueryParams {
    /**
     * Which additional properties to get for each interlanguage link:
     *
     * - **url**: Adds the full URL.
     * - **langname**: Adds the localised language name (best effort). Use `llinlanguagecode` to control the language.
     * - **autonym**: Adds the native language name.
     */
    llprop?: OneOrMore<"autonym" | "langname" | "url">;
    /**
     * Only return language links with this language code.
     */
    lllang?: string;
    /**
     * Link to search for. Must be used with `lllang`.
     */
    lltitle?: string;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    lldir?: "ascending" | "descending";
    /**
     * Language code for localised language names.
     *
     * Defaults to `en`.
     */
    llinlanguagecode?: string;
    /**
     * How many langlinks to return.
     *
     * Defaults to 10.
     */
    lllimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    llcontinue?: string;
    /**
     * Whether to get the full URL (cannot be used with `llprop`).
     *
     * @deprecated
     */
    llurl?: boolean;
}

/**
 * Get the number of other language versions.
 */
export interface ContentTranslationActionApiQueryLangLinksCountParams extends ApiQueryParams {}

/**
 * Return information about available languages.
 *
 * {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue Continuation} may be applied if retrieving the information takes too long for one request.
 */
export interface ApiQueryLanguageinfoParams extends ApiQueryParams {
    /**
     * Which information to get for each language.
     *
     * - **code**: The language code. (This code is MediaWiki-specific, though there are overlaps with other standards.)
     * - **bcp47**: The BCP-47 language code.
     * - **dir**: The writing direction of the language (either `ltr` or `rtl`).
     * - **autonym**: The autonym of the language, that is, the name in that language.
     * - **name**: The name of the language in the language specified by the `uselang` parameter, with language fallbacks applied if necessary.
     * - **variantnames**: The short names for language variants used for language conversion links.
     * - **fallbacks**: The language codes of the fallback languages configured for this language. The implicit final fallback to 'en' is not included (but some languages may fall back to 'en' explicitly).
     * - **variants**: The language codes of the variants supported by this language.
     * - **digittransforms**: The digit transforms for formatting numbers in this language.
     * - **digitgroupingpattern**: The grouping pattern for formatting numbers in this language.
     * - **minimumgroupingdigits**: The number of digits below which grouping of numerals is suppressed.
     * - **namespacenames**: The names of this wiki's namespaces in this language.
     * - **namespacealiases**: The aliases for the namespace names in this wiki in this language.
     *
     * Defaults to `code`.
     */
    liprop?: OneOrMore<
        | "autonym"
        | "bcp47"
        | "code"
        | "digitgroupingpattern"
        | "digittransforms"
        | "dir"
        | "fallbacks"
        | "minimumgroupingdigits"
        | "name"
        | "namespacealiases"
        | "namespacenames"
        | "variantnames"
        | "variants"
    >;
    /**
     * Language codes of the languages that should be returned, or `*` for all languages.
     *
     * Defaults to `*`.
     */
    licode?: string | string[];
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    licontinue?: string;
}

/**
 * Returns all links from the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links
 */
export interface ApiQueryLinksParams extends ApiQueryParams {
    /**
     * Show links in these namespaces only.
     */
    plnamespace?: namespace | namespace[] | "*";
    /**
     * How many links to return.
     *
     * Defaults to 10.
     */
    pllimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    plcontinue?: string;
    /**
     * Only list links to these titles. Useful for checking whether a certain page links to a certain title.
     */
    pltitles?: string | string[];
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    pldir?: "ascending" | "descending";
}

/**
 * Find all pages that link to the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere
 */
export interface ApiQueryBacklinkspropParams extends ApiQueryParams {
    /**
     * Which properties to get:
     *
     * - **pageid**: Page ID of each page.
     * - **title**: Title of each page.
     * - **redirect**: Flag if the page is a redirect.
     *
     * Defaults to `pageid`, `title`, and `redirect`.
     */
    lhprop?: OneOrMore<"pageid" | "redirect" | "title">;
    /**
     * Only include pages in these namespaces.
     */
    lhnamespace?: namespace | namespace[] | "*";
    /**
     * Show only items that meet these criteria:
     *
     * - **redirect**: Only show redirects.
     * - **!redirect**: Only show non-redirects.
     */
    lhshow?: OneOrMore<"!redirect" | "redirect">;
    /**
     * How many to return.
     *
     * Defaults to 10.
     */
    lhlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    lhcontinue?: string;
}

/**
 * Get a list of lint errors
 */
export interface LinterApiQueryLintErrorsParams extends ApiQueryParams {
    /**
     * Categories of lint errors
     *
     * Defaults to `deletable-table-tag`, `duplicate-ids`, `html5-misnesting`, `misc-tidy-replacement-issues`, `multiline-html-table-in-list`, `multiple-unclosed-formatting-tags`, `pwrap-bug-workaround`, `self-closed-tag`, `template-arg-in-extension-tag`, `tidy-font-bug`, `tidy-whitespace-bug`, `unclosed-quotes-in-heading`, `bogus-image-options`, `fostered`, `misnested-tag`, `multi-colon-escape`, `wikilink-in-extlink`, `empty-heading`, `missing-end-tag`, `missing-end-tag-in-heading`, `night-mode-unaware-background-color`, `obsolete-tag`, and `stripped-tag`.
     */
    lntcategories?: OneOrMore<
        | "bogus-image-options"
        | "deletable-table-tag"
        | "duplicate-ids"
        | "empty-heading"
        | "fostered"
        | "fostered-transparent"
        | "html5-misnesting"
        | "large-tables"
        | "misc-tidy-replacement-issues"
        | "misnested-tag"
        | "missing-end-tag"
        | "missing-end-tag-in-heading"
        | "multi-colon-escape"
        | "multiline-html-table-in-list"
        | "multiple-unclosed-formatting-tags"
        | "night-mode-unaware-background-color"
        | "obsolete-tag"
        | "pre-expansion"
        | "pwrap-bug-workaround"
        | "self-closed-tag"
        | "stripped-tag"
        | "template-arg-in-extension-tag"
        | "tidy-font-bug"
        | "tidy-whitespace-bug"
        | "unclosed-quotes-in-heading"
        | "wikilink-in-extlink"
    >;
    /**
     * Number of results to query
     *
     * Defaults to 10.
     */
    lntlimit?: limit;
    /**
     * Only include lint errors from the specified namespaces
     */
    lntnamespace?: namespace | namespace[] | "*";
    /**
     * Only include lint errors from the specified page IDs
     */
    lntpageid?: number | number[];
    /**
     * Only include lint errors from the specified page title
     */
    lnttitle?: string;
    /**
     * Lint ID to start querying from
     */
    lntfrom?: number;
}

/**
 * Get number of lint errors in each category
 */
export interface LinterApiQueryLinterStatsParams extends ApiQueryParams {}

/**
 * Get events from logs.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Logevents
 */
export interface ApiQueryLogEventsParams extends ApiQueryParams {
    /**
     * Which properties to get:
     *
     * - **ids**: Adds the ID of the log event.
     * - **title**: Adds the title of the page for the log event.
     * - **type**: Adds the type of log event.
     * - **user**: Adds the user responsible for the log event. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: Adds the user ID who was responsible for the log event. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **timestamp**: Adds the timestamp for the log event.
     * - **comment**: Adds the comment of the log event. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Adds the parsed comment of the log event. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **details**: Lists additional details about the log event. If the log event has been revision deleted, an `actionhidden` property will be returned.
     * - **tags**: Lists tags for the log event.
     *
     * Defaults to `ids`, `title`, `type`, `user`, `timestamp`, `comment`, and `details`.
     */
    leprop?: OneOrMore<
        | "comment"
        | "details"
        | "ids"
        | "parsedcomment"
        | "tags"
        | "timestamp"
        | "title"
        | "type"
        | "user"
        | "userid"
    >;
    /**
     * Filter log entries to only this type.
     */
    letype?:
        | ""
        | "abusefilter"
        | "abusefilter-protected-vars"
        | "abusefilterblockeddomainhit"
        | "abusefilterprivatedetails"
        | "block"
        | "checkuser-temporary-account"
        | "contentmodel"
        | "create"
        | "delete"
        | "gblblock"
        | "gblrename"
        | "gblrights"
        | "globalauth"
        | "growthexperiments"
        | "import"
        | "interwiki"
        | "ipinfo"
        | "managetags"
        | "massmessage"
        | "merge"
        | "move"
        | "newusers"
        | "oath"
        | "pagetriage-copyvio"
        | "pagetriage-curation"
        | "patrol"
        | "protect"
        | "renameuser"
        | "review"
        | "rights"
        | "spamblacklist"
        | "stable"
        | "suppress"
        | "tag"
        | "thanks"
        | "timedmediahandler"
        | "titleblacklist"
        | "upload"
        | "urlshortener"
        | "usermerge";
    /**
     * Filter log actions to only this action. Overrides `letype`. In the list of possible values, values with the asterisk wildcard such as `action/*` can have different strings after the slash (/).
     */
    leaction?:
        | "abusefilter-protected-vars/*"
        | "abusefilter/create"
        | "abusefilter/hit"
        | "abusefilter/modify"
        | "abusefilterblockeddomainhit/*"
        | "abusefilterprivatedetails/access"
        | "block/block"
        | "block/reblock"
        | "block/unblock"
        | "checkuser-private-event/*"
        | "checkuser-temporary-account/*"
        | "contentmodel/change"
        | "contentmodel/new"
        | "create/create"
        | "delete/delete"
        | "delete/delete_redir"
        | "delete/delete_redir2"
        | "delete/event"
        | "delete/restore"
        | "delete/revision"
        | "emailauth/*"
        | "gblblock/*"
        | "gblblock/gunblock"
        | "gblrename/merge"
        | "gblrename/promote"
        | "gblrename/rename"
        | "gblrights/deleteset"
        | "gblrights/groupperms"
        | "gblrights/groupprms2"
        | "gblrights/groupprms3"
        | "gblrights/grouprename"
        | "gblrights/newset"
        | "gblrights/setchange"
        | "gblrights/setnewtype"
        | "gblrights/setrename"
        | "gblrights/usergroups"
        | "globalauth/delete"
        | "globalauth/hide"
        | "globalauth/lock"
        | "globalauth/lockandhid"
        | "globalauth/setstatus"
        | "globalauth/unhide"
        | "globalauth/unlock"
        | "growthexperiments/addimage"
        | "growthexperiments/addlink"
        | "growthexperiments/addsectionimage"
        | "growthexperiments/claimmentee"
        | "growthexperiments/claimmentee-no-previous-mentor"
        | "growthexperiments/setmentor"
        | "growthexperiments/setmentor-no-previous-mentor"
        | "import/interwiki"
        | "import/upload"
        | "interwiki/iw_add"
        | "interwiki/iw_delete"
        | "interwiki/iw_edit"
        | "ipinfo/*"
        | "managetags/activate"
        | "managetags/create"
        | "managetags/deactivate"
        | "managetags/delete"
        | "massmessage/*"
        | "massmessage/failure"
        | "massmessage/send"
        | "massmessage/skipbadns"
        | "massmessage/skipnouser"
        | "massmessage/skipoptout"
        | "merge/merge"
        | "merge/merge-into"
        | "move/move"
        | "move/move_redir"
        | "newusers/autocreate"
        | "newusers/byemail"
        | "newusers/create"
        | "newusers/create2"
        | "newusers/forcecreatelocal"
        | "newusers/newusers"
        | "oath/*"
        | "pagetriage-copyvio/delete"
        | "pagetriage-copyvio/insert"
        | "pagetriage-curation/delete"
        | "pagetriage-curation/enqueue"
        | "pagetriage-curation/reviewed"
        | "pagetriage-curation/reviewed-article"
        | "pagetriage-curation/reviewed-redirect"
        | "pagetriage-curation/tag"
        | "pagetriage-curation/unreviewed"
        | "pagetriage-curation/unreviewed-article"
        | "pagetriage-curation/unreviewed-redirect"
        | "patrol/autopatrol"
        | "patrol/patrol"
        | "protect/modify"
        | "protect/move_prot"
        | "protect/protect"
        | "protect/unprotect"
        | "renameuser/renameuser"
        | "review/*"
        | "rights/autopromote"
        | "rights/blockautopromote"
        | "rights/erevoke"
        | "rights/restoreautopromote"
        | "rights/rights"
        | "spamblacklist/*"
        | "stable/config"
        | "stable/modify"
        | "stable/move_stable"
        | "stable/reset"
        | "suppress/block"
        | "suppress/cadelete"
        | "suppress/delete"
        | "suppress/event"
        | "suppress/hide-afl"
        | "suppress/reblock"
        | "suppress/revision"
        | "suppress/setstatus"
        | "suppress/unhide-afl"
        | "tag/update"
        | "thanks/*"
        | "timedmediahandler/resettranscode"
        | "titleblacklist/*"
        | "upload/overwrite"
        | "upload/revert"
        | "upload/upload"
        | "urlshortener/*"
        | "usermerge/*";
    /**
     * The timestamp to start enumerating from.
     */
    lestart?: timestamp;
    /**
     * The timestamp to end enumerating.
     */
    leend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: lestart has to be before leend.
     * - **older**: List newest first (default). Note: lestart has to be later than leend.
     *
     * Defaults to `older`.
     */
    ledir?: "newer" | "older";
    /**
     * Filter entries to those matching the given log ID(s).
     */
    leids?: number | number[];
    /**
     * Filter entries to those made by the given user.
     */
    leuser?: string;
    /**
     * Filter entries to those related to a page.
     */
    letitle?: string;
    /**
     * Filter entries to those in the given namespace.
     */
    lenamespace?: namespace;
    /**
     * Disabled due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}.
     */
    leprefix?: string;
    /**
     * Only list event entries tagged with this tag.
     */
    letag?: string;
    /**
     * How many total event entries to return.
     *
     * Defaults to 10.
     */
    lelimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    lecontinue?: string;
}

/**
 * Request all Kartographer map data for the given pages
 *
 * @private
 */
export interface KartographerApiQueryMapDataParams extends ApiQueryParams {
    /**
     * Pipe-separated groups to return data for
     *
     * Defaults to an empty string.
     */
    mpdgroups?: string;
    /**
     * Data for how many pages to return
     *
     * Defaults to 10.
     */
    mpdlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    mpdcontinue?: number;
    /**
     * Which wikitext parser to use
     *
     * - **parsoid**: Generate HTML using {@link https://www.mediawiki.org/wiki/Parsoid Parsoid}.
     * - **legacy**: Generate HTML using the legacy parser.
     */
    mpdparser?: "legacy" | "parsoid";
}

/**
 * Get the description and targets of a spamlist
 */
export interface MassMessageApiQueryMMContentParams extends ApiQueryParams {}

/**
 * Lists the most viewed pages (based on last day's pageview count).
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
 */
export interface PageViewInfoApiQueryMostViewedParams extends ApiQueryParams {
    /**
     * The metric to use for counting views. Depending on what backend is used, not all metrics might be supported. You can use the siteinfo API ({@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsiteinfo action=query&meta=siteinfo}) to check which ones are supported, under `pageviewservice-supported-metrics` / _module name_ (`siteviews`, `mostviewed`, etc.)
     *
     * - **pageviews**: Plain pageviews.
     *
     * Defaults to `pageviews`.
     */
    pvimmetric?: "pageviews";
    /**
     * The number of pages to return.
     *
     * Defaults to 10.
     */
    pvimlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     *
     * Defaults to 0.
     */
    pvimoffset?: number;
}

/**
 * Get a list of files in the current user's upload stash.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:mystashedfiles
 */
export interface ApiQueryMyStashedFilesParams extends ApiQueryParams {
    /**
     * Which properties to fetch for the files.
     *
     * - **size**: Fetch the file size and image dimensions.
     * - **type**: Fetch the file's MIME type and media type.
     *
     * Defaults to an empty string.
     */
    msfprop?: OneOrMore<"size" | "type">;
    /**
     * How many files to get.
     *
     * Defaults to 10.
     */
    msflimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    msfcontinue?: string;
}

/**
 * Get notifications waiting for the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
 */
export interface NotificationsApiEchoNotificationsParams extends ApiQueryParams {
    /**
     * List of wikis to fetch notifications from (defaults to only current wiki).
     *
     * Defaults to `enwiki`.
     */
    notwikis?: string | string[];
    /**
     * Filter notifications returned.
     *
     * Defaults to `read` and `!read`.
     */
    notfilter?: OneOrMore<"!read" | "read">;
    /**
     * Details to request.
     *
     * Defaults to `list`.
     */
    notprop?: OneOrMore<"count" | "list" | "seenTime">;
    /**
     * The notification sections to query (i.e. some combination of 'alert' and 'message').
     *
     * Defaults to `alert` and `message`.
     */
    notsections?: OneOrMore<"alert" | "message">;
    /**
     * Whether to group the result by section. Each section is fetched separately if set.
     */
    notgroupbysection?: boolean;
    /**
     * If specified, notifications will be returned formatted this way.
     *
     * - **model**: Raw notification data
     * - **special**: Formatted for Special:Notifications page (and only that!) Do not rely on the HTML as it may change at any given time.
     * - **flyout**: Deprecated. Use `notformat=model` for raw data
     * - **html**: Deprecated. Use `notformat=model` for raw data
     */
    notformat?: "flyout" | "html" | "model" | "special";
    /**
     * The maximum number of notifications to return.
     *
     * Defaults to 20.
     */
    notlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    notcontinue?: string;
    /**
     * Whether to show unread notifications first (only used if groupbysection is not set).
     */
    notunreadfirst?: boolean;
    /**
     * Only return notifications for these pages. To get notifications not associated with any page, use [] as a title.
     */
    nottitles?: string | string[];
    /**
     * Whether to show bundle compatible unread notifications according to notification types bundling rules.
     */
    notbundle?: boolean;
    /**
     * Notifier types for which to return notifications.
     *
     * Defaults to `web`.
     */
    notnotifiertypes?: OneOrMore<"email" | "push" | "web">;
    /**
     * When more alert results are available, use this to continue.
     */
    notalertcontinue?: string;
    /**
     * Whether to show unread message notifications first (only used if groupbysection is set).
     */
    notalertunreadfirst?: boolean;
    /**
     * When more message results are available, use this to continue.
     */
    notmessagecontinue?: string;
    /**
     * Whether to show unread alert notifications first (only used if groupbysection is set).
     */
    notmessageunreadfirst?: boolean;
    /**
     * True to opt in to a summary notification of notifications on foreign wikis.
     */
    notcrosswikisummary?: boolean;
}

/**
 * Enumerates pages that have changes pending review.
 */
export interface ApiQueryOldreviewedpagesParams extends ApiQueryParams {
    /**
     * Start listing at this timestamp.
     */
    orstart?: timestamp;
    /**
     * Stop listing at this timestamp.
     */
    orend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * Defaults to `newer`.
     */
    ordir?: "newer" | "older";
    /**
     * Maximum character count change size.
     */
    ormaxsize?: number;
    /**
     * How to filter for pages on your watchlist.
     *
     * Defaults to `all`.
     */
    orfilterwatched?: "all" | "watched";
    /**
     * The namespaces to enumerate.
     *
     * Defaults to 0.
     */
    ornamespace?: namespace | namespace[] | "*";
    /**
     * Show pages only in the given category.
     */
    orcategory?: string;
    /**
     * How to filter for redirects.
     *
     * Defaults to `all`.
     */
    orfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * How many total pages to return.
     *
     * Defaults to 10.
     */
    orlimit?: limit;
}

/**
 * Return ORES configuration and model data for this wiki.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ORES
 */
export interface ORESHooksApiQueryORESParams extends ApiQueryParams {}

/**
 * Return associated projects and assessments for the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
 */
export interface PageAssessmentsApiQueryPageAssessmentsParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    pacontinue?: string;
    /**
     * Limit for total number of projects returned (total for all pages).
     *
     * Defaults to 10.
     */
    palimit?: limit;
    /**
     * Also return assessments by subprojects.
     */
    pasubprojects?: boolean;
}

/**
 * Fetch page collection information for the given title.
 */
export interface WikimediaCampaignEventsActionApiQueryPageCollectionsMetadataParams
    extends ApiQueryParams {
    /**
     * A string containing the page title for which the page collection information will be fetched.
     */
    titles?: string | string[];
}

/**
 * Returns information about images on the page, such as thumbnail and presence of photos.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageImages#API
 */
export interface PageImagesApiQueryPageImagesParams extends ApiQueryParams {
    /**
     * Which information to return:
     *
     * - **thumbnail**: URL and dimensions of thumbnail image associated with page, if any.
     * - **name**: Image title.
     * - **original**: URL and original dimensions of image associated with page, if any.
     *
     * Defaults to `thumbnail` and `name`.
     */
    piprop?: OneOrMore<"name" | "original" | "thumbnail">;
    /**
     * Maximum width in pixels of thumbnail images.
     *
     * Defaults to 50.
     */
    pithumbsize?: number;
    /**
     * Properties of how many pages to return.
     *
     * Defaults to 50.
     */
    pilimit?: limit;
    /**
     * Limit page images to a certain license type:
     *
     * - **free**: Only free images.
     * - **any**: Best image, whether free or non-free.
     *
     * Defaults to `free`.
     */
    pilicense?: "any" | "free";
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    picontinue?: number;
    /**
     * Code for the language the image is going to be rendered in if multiple languages are supported
     */
    pilangcode?: string;
}

/**
 * List all page property names in use on the wiki.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pagepropnames
 */
export interface ApiQueryPagePropNamesParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    ppncontinue?: string;
    /**
     * The maximum number of names to return.
     *
     * Defaults to 10.
     */
    ppnlimit?: limit;
}

/**
 * Get various page properties defined in the page content.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageprops
 */
export interface ApiQueryPagePropsParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    ppcontinue?: string;
    /**
     * Only list these page properties ({@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpagepropnames `action=query&list=pagepropnames`} returns page property names in use). Useful for checking whether pages use a certain page property.
     */
    ppprop?: string | string[];
}

/**
 * List all pages using a given page property.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop
 */
export interface ApiQueryPagesWithPropParams extends ApiQueryParams {
    /**
     * Page property for which to enumerate pages ({@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bpagepropnames `action=query&list=pagepropnames`} returns page property names in use).
     */
    pwppropname?: string;
    /**
     * Which pieces of information to include:
     *
     * - **ids**: Adds the page ID.
     * - **title**: Adds the title and namespace ID of the page.
     * - **value**: Adds the value of the page property.
     *
     * Defaults to `ids` and `title`.
     */
    pwpprop?: OneOrMore<"ids" | "title" | "value">;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    pwpcontinue?: string;
    /**
     * The maximum number of pages to return.
     *
     * Defaults to 10.
     */
    pwplimit?: limit;
    /**
     * In which direction to sort.
     *
     * Defaults to `ascending`.
     */
    pwpdir?: "ascending" | "descending";
}

/**
 * Get the Wikidata terms (typically labels, descriptions and aliases) associated with a page via a sitelink.
 */
export interface WikibaseClientApiPageTermsParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    wbptcontinue?: number;
    /**
     * The language code to get terms in. If not specified, the user language is used.
     *
     * Defaults to `uselang`.
     */
    wbptlanguage?: string;
    /**
     * The types of terms to get, e.g. 'description', each returned as an array of strings keyed by their type, e.g. {"description": ["foo"]}. If not specified, all types are returned.
     *
     * Defaults to `alias`, `label`, and `description`.
     */
    wbptterms?: OneOrMore<"alias" | "description" | "label">;
}

/**
 * Shows per-page pageview data (the number of daily pageviews for each of the last `pvipdays` days).
 *
 * The result format is page title (with underscores) => date (Ymd) => count.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
 */
export interface PageViewInfoApiQueryPageViewsParams extends ApiQueryParams {
    /**
     * The metric to use for counting views. Depending on what backend is used, not all metrics might be supported. You can use the siteinfo API ({@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsiteinfo action=query&meta=siteinfo}) to check which ones are supported, under `pageviewservice-supported-metrics` / _module name_ (`siteviews`, `mostviewed`, etc.)
     *
     * - **pageviews**: Plain pageviews.
     *
     * Defaults to `pageviews`.
     */
    pvipmetric?: "pageviews";
    /**
     * The number of days to show.
     *
     * Defaults to 60.
     */
    pvipdays?: number;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    pvipcontinue?: string;
}

/**
 * Perform a prefix search for page titles.
 *
 * Despite the similarity in names, this module is not intended to be equivalent to {@link https://www.mediawiki.org/wiki/Special:PrefixIndex Special:PrefixIndex}; for that, see {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Ballpages `action=query&list=allpages`} with the `apprefix` parameter. The purpose of this module is similar to {@link https://www.mediawiki.org/wiki/Special:ApiHelp/opensearch `action=opensearch`}: to take user input and provide the best-matching titles. Depending on the search engine backend, this might include typo correction, redirect avoidance, or other heuristics.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch
 */
export interface ApiQueryPrefixSearchParams extends ApiQueryParams {
    /**
     * Search string.
     */
    pssearch?: string;
    /**
     * Namespaces to search. Ignored if `pssearch` begins with a valid namespace prefix.
     *
     * Defaults to 0.
     */
    psnamespace?: namespace | namespace[] | "*";
    /**
     * Maximum number of results to return.
     *
     * Defaults to 10.
     */
    pslimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     *
     * Defaults to 0.
     */
    psoffset?: number;
    /**
     * Search profile to use.
     *
     * - **strict**: Strict profile with few punctuation characters removed but diacritics and stress marks are kept.
     * - **normal**: Few punctuation characters, some diacritics and stopwords removed.
     * - **fuzzy**: Similar to normal with typo correction (two typos supported).
     * - **fast-fuzzy**: Experimental fuzzy profile (may be removed at any time)
     * - **classic**: Classic prefix, few punctuation characters and some diacritics removed.
     * - **engine_autoselect**: Let the search engine decide on the best profile to use.
     *
     * Defaults to `engine_autoselect`.
     */
    psprofile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
}

/**
 * List all pages associated with one or more projects.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
 */
export interface PageAssessmentsApiQueryProjectPagesParams extends ApiQueryParams {
    /**
     * Also return assessments for the pages returned.
     */
    wppassessments?: boolean;
    /**
     * The projects to list pages for. If this parameter is omitted, all projects will be included.
     */
    wppprojects?: string | string[];
    /**
     * The maximum number of pages to return.
     *
     * Defaults to 10.
     */
    wpplimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    wppcontinue?: string;
}

/**
 * List all the projects.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
 */
export interface PageAssessmentsApiQueryProjectsParams extends ApiQueryParams {
    /**
     * Also include subprojects.
     */
    pjsubprojects?: boolean;
}

/**
 * List all titles protected from creation.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles
 */
export interface ApiQueryProtectedTitlesParams extends ApiQueryParams {
    /**
     * Only list titles in these namespaces.
     */
    ptnamespace?: namespace | namespace[] | "*";
    /**
     * Only list titles with these protection levels.
     */
    ptlevel?: OneOrMore<"autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    /**
     * How many total pages to return.
     *
     * Defaults to 10.
     */
    ptlimit?: limit;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: ptstart has to be before ptend.
     * - **older**: List newest first (default). Note: ptstart has to be later than ptend.
     *
     * Defaults to `older`.
     */
    ptdir?: "newer" | "older";
    /**
     * Start listing at this protection timestamp.
     */
    ptstart?: timestamp;
    /**
     * Stop listing at this protection timestamp.
     */
    ptend?: timestamp;
    /**
     * Which properties to get:
     *
     * - **timestamp**: Adds the timestamp of when protection was added.
     * - **user**: Adds the user that added the protection.
     * - **userid**: Adds the user ID that added the protection.
     * - **comment**: Adds the comment for the protection.
     * - **parsedcomment**: Adds the parsed comment for the protection.
     * - **expiry**: Adds the timestamp of when the protection will be lifted.
     * - **level**: Adds the protection level.
     *
     * Defaults to `timestamp` and `level`.
     */
    ptprop?: OneOrMore<
        "comment" | "expiry" | "level" | "parsedcomment" | "timestamp" | "user" | "userid"
    >;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    ptcontinue?: string;
}

/**
 * Get a list provided by a QueryPage-based special page.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage
 */
export interface ApiQueryQueryPageParams extends ApiQueryParams {
    /**
     * The name of the special page. Note, this is case-sensitive.
     */
    qppage?:
        | "Ancientpages"
        | "BrokenRedirects"
        | "Deadendpages"
        | "DisambiguationPageLinks"
        | "DisambiguationPages"
        | "DoubleRedirects"
        | "Fewestrevisions"
        | "GadgetUsage"
        | "GloballyWantedFiles"
        | "LintTemplateErrors"
        | "ListDuplicatedFiles"
        | "Listredirects"
        | "Lonelypages"
        | "Longpages"
        | "MediaStatistics"
        | "MostGloballyLinkedFiles"
        | "Mostcategories"
        | "Mostimages"
        | "Mostinterwikis"
        | "Mostlinked"
        | "Mostlinkedcategories"
        | "Mostlinkedtemplates"
        | "Mostrevisions"
        | "OrphanedTimedText"
        | "Shortpages"
        | "Uncategorizedcategories"
        | "Uncategorizedimages"
        | "Uncategorizedpages"
        | "Uncategorizedtemplates"
        | "UnconnectedPages"
        | "Unusedcategories"
        | "Unusedimages"
        | "Unusedtemplates"
        | "Unwatchedpages"
        | "Wantedcategories"
        | "Wantedfiles"
        | "Wantedpages"
        | "Wantedtemplates"
        | "Withoutinterwiki";
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     *
     * Defaults to 0.
     */
    qpoffset?: number;
    /**
     * Number of results to return.
     *
     * Defaults to 10.
     */
    qplimit?: limit;
}

/**
 * Get a set of random pages.
 *
 * Pages are listed in a fixed sequence, only the starting point is random. This means that if, for example, `Main Page` is the first random page in the list, `List of fictional monkeys` will **always** be second, `List of people on stamps of Vanuatu` third, etc.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random
 */
export interface ApiQueryRandomParams extends ApiQueryParams {
    /**
     * Return pages in these namespaces only.
     */
    rnnamespace?: namespace | namespace[] | "*";
    /**
     * How to filter for redirects.
     *
     * Defaults to `nonredirects`.
     */
    rnfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * Limit to pages with at least this many bytes.
     */
    rnminsize?: number;
    /**
     * Limit to pages with at most this many bytes.
     */
    rnmaxsize?: number;
    /**
     * Filter pages that have the specified content model.
     */
    rncontentmodel?: string;
    /**
     * Use `rnfilterredir=redirects` instead.
     *
     * @deprecated
     */
    rnredirect?: boolean;
    /**
     * Limit how many random pages will be returned.
     *
     * Defaults to 1.
     */
    rnlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    rncontinue?: string;
}

/**
 * List the pages of a certain list.
 *
 * This module has three modes of operation. With the `rlelists` parameter, it returns the pages in the given list(s). With the `rlechangedsince` parameter, it returns all list entries from any list of the current user which have been changed since the given date. (This is meant for device sync and, unlike the other modes, includes deleted entries, although not entries of deleted lists.) Without any parameters, it returns all entries from all lists of the current user. The `rleprojects` parameter can be used with any mode to limit results to specific projects.
 *
 * @private
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
 */
export interface ReadingListsApiQueryReadingListEntriesParams extends ApiQueryParams {
    /**
     * The list IDs for which to return pages. Optional. If not specified, returns entries from all lists.
     */
    rlelists?: number | number[];
    /**
     * Project identifiers to filter by. Values can be `@local`, canonical project URLs such as {@link https://en.wikipedia.org `https://en.wikipedia.org`}, or wiki IDs such as `enwiki`. Optional. If not specified, returns entries from all projects.
     */
    rleprojects?: string | string[];
    /**
     * Show list entries that have been changed since this timestamp. Must be after the current timestamp.
     */
    rlechangedsince?: timestamp;
    /**
     * Property to sort by. `name` cannot be used together with `rlechangedsince`. Defaults to `updated` when `rlechangedsince` is set, and to `name` otherwise.
     *
     * - **name**: Article title. (Project name is ignored. Sorting is by binary value; e.g. any uppercase ASCII character will sort before any lowercase one.)
     * - **updated**: Last update timestamp.
     */
    rlesort?: "name" | "updated";
    /**
     * Sort direction: `ascending` (A to Z, oldest to newest) or `descending`.
     *
     * Defaults to `ascending`.
     */
    rledir?: "ascending" | "descending";
    /**
     * Number of result items to return.
     *
     * Defaults to 10.
     */
    rlelimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    rlecontinue?: string;
}

/**
 * List or filter the user's reading lists and show metadata about them.
 *
 * This module has four modes of operation. With the `rllist` parameter, it returns information about the specified list. With the `rlchangedsince` parameter, it returns all lists of the current user which have been changed since the given date. (This is meant for device sync and, unlike the other modes, includes deleted lists. Only changes to list metadata are considered, not changes to list items.) With the `rlproject` and `rltitle` parameters, it returns all lists that include that page. Without any of those parameters, it returns all lists.
 *
 * @private
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
 */
export interface ReadingListsApiQueryReadingListsParams extends ApiQueryParams {
    /**
     * List ID.
     */
    rllist?: number;
    /**
     * Project of the page to filter on. Must be used together with `rltitle`. Will only return lists which include this project and title.
     */
    rlproject?: string;
    /**
     * Title of the page to filter on. Must be used together with `rlproject`. Will only return lists which include this project and title.
     */
    rltitle?: string;
    /**
     * Show lists that have been changed since this timestamp. Must be after the current timestamp. Clients should use the timestamp returned in the `readinglists-synctimestamp` field from an earlier call if they want to ensure that no changes are missed, and should be prepared to receive changes that have already been returned in an earlier response, and handle them in an idempotent way.
     */
    rlchangedsince?: timestamp;
    /**
     * Property to sort by. Ignored when `rlproject` and `rltitle` is set (results are returned in DB order). Defaults to `updated` when `rlchangedsince` is set, and to `name` otherwise.
     *
     * - **name**: List name. (Sorting is by binary value; e.g. any uppercase ASCII character will sort before any lowercase one.)
     * - **updated**: Last update timestamp. (Updates include list metadata changes but not changes to list items.)
     */
    rlsort?: "name" | "updated";
    /**
     * Sort direction: `ascending` (A to Z, oldest to newest) or `descending`. Ignored when `rlproject` and `rltitle` is set.
     *
     * Defaults to `ascending`.
     */
    rldir?: "ascending" | "descending";
    /**
     * Number of result items to return.
     *
     * Defaults to 10.
     */
    rllimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    rlcontinue?: string;
}

/**
 * Enumerate recent changes.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges
 */
export interface ApiQueryRecentChangesParams extends ApiQueryParams {
    /**
     * The timestamp to start enumerating from.
     */
    rcstart?: timestamp;
    /**
     * The timestamp to end enumerating.
     */
    rcend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: rcstart has to be before rcend.
     * - **older**: List newest first (default). Note: rcstart has to be later than rcend.
     *
     * Defaults to `older`.
     */
    rcdir?: "newer" | "older";
    /**
     * Filter changes to only these namespaces.
     */
    rcnamespace?: namespace | namespace[] | "*";
    /**
     * Only list changes by this user.
     */
    rcuser?: string;
    /**
     * Don't list changes by this user.
     */
    rcexcludeuser?: string;
    /**
     * Only list changes tagged with this tag.
     */
    rctag?: string;
    /**
     * Include additional pieces of information:
     *
     * - **user**: Adds the user responsible for the edit and tags if they are an IP. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: Adds the user ID responsible for the edit. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **comment**: Adds the comment for the edit. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Adds the parsed comment for the edit. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **flags**: Adds flags for the edit.
     * - **timestamp**: Adds timestamp of the edit.
     * - **title**: Adds the page title of the edit.
     * - **ids**: Adds the page ID, recent changes ID and the new and old revision ID.
     * - **sizes**: Adds the new and old page length in bytes.
     * - **redirect**: Tags edit if page is a redirect.
     * - **patrolled**: Tags patrollable edits as being patrolled or unpatrolled.
     * - **loginfo**: Adds log information (log ID, log type, etc) to log entries.
     * - **tags**: Lists tags for the entry.
     * - **sha1**: Adds the content checksum for entries associated with a revision. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **oresscores**: Adds ORES scores for the entry.
     *
     * Defaults to `title`, `timestamp`, and `ids`.
     */
    rcprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "loginfo"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "redirect"
        | "sha1"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    /**
     * Show only items that meet these criteria. For example, to see only minor edits done by logged-in users, set rcshow=minor|!anon.
     *
     * When using `oresreview` or `!oresreview`, revisions without a score (e.g. very old revisions) are considered as not needing review even if they would need review if scored.
     */
    rcshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!redirect"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "redirect"
        | "unpatrolled"
    >;
    /**
     * How many total changes to return.
     *
     * Defaults to 10.
     */
    rclimit?: limit;
    /**
     * Which types of changes to show.
     *
     * Defaults to `edit`, `new`, `log`, and `categorize`.
     */
    rctype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    /**
     * Only list changes which are the latest revision.
     */
    rctoponly?: boolean;
    /**
     * Filter entries to those related to a page.
     */
    rctitle?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    rccontinue?: string;
    /**
     * When being used as a generator, generate revision IDs rather than titles. Recent change entries without associated revision IDs (e.g. most log entries) will generate nothing.
     */
    rcgeneraterevisions?: boolean;
    /**
     * Only list changes that touch the named slot.
     */
    rcslot?: "main";
}

/**
 * Returns all redirects to the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects
 */
export interface ApiQueryBacklinkspropParams extends ApiQueryParams {
    /**
     * Which properties to get:
     *
     * - **pageid**: Page ID of each redirect.
     * - **title**: Title of each redirect.
     * - **fragment**: Fragment of each redirect, if any.
     *
     * Defaults to `pageid` and `title`.
     */
    rdprop?: OneOrMore<"fragment" | "pageid" | "title">;
    /**
     * Only include pages in these namespaces.
     *
     * **Note:** Due to {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgMiserMode miser mode}, using this may result in fewer than `rdlimit` results returned before continuing; in extreme cases, zero results may be returned.
     */
    rdnamespace?: namespace | namespace[] | "*";
    /**
     * Show only items that meet these criteria:
     *
     * - **fragment**: Only show redirects with a fragment.
     * - **!fragment**: Only show redirects without a fragment.
     */
    rdshow?: OneOrMore<"!fragment" | "fragment">;
    /**
     * How many redirects to return.
     *
     * Defaults to 10.
     */
    rdlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    rdcontinue?: string;
}

/**
 * Get revision information.
 *
 * May be used in several ways:
 *
 * - Get data about a set of pages (last revision), by setting titles or pageids.
 * - Get revisions for one given page, by using titles or pageids with start, end, or limit.
 * - Get data about a set of revisions by setting their IDs with revids.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions
 */
export interface ApiQueryRevisionsParams extends ApiQueryParams {
    /**
     * Which properties to get for each revision:
     *
     * - **ids**: The ID of the revision.
     * - **flags**: Revision flags (minor).
     * - **timestamp**: The timestamp of the revision.
     * - **user**: User that made the revision. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: User ID of the revision creator. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **size**: Length (bytes) of the revision.
     * - **slotsize**: Length (bytes) of each revision slot.
     * - **sha1**: SHA-1 (base 16) of the revision. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **slotsha1**: SHA-1 (base 16) of each revision slot. If the content has been revision deleted, a `sha1hidden` property will be returned.
     * - **contentmodel**: Content model ID of each revision slot.
     * - **comment**: Comment by the user for the revision. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Parsed comment by the user for the revision. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **content**: Content of each revision slot. If the content has been revision deleted, a `texthidden` property will be returned. For performance reasons, if this option is used, `rvlimit` is enforced to 50.
     * - **tags**: Tags for the revision.
     * - **roles**: List content slot roles that exist in the revision.
     * - **parsetree**: Deprecated. Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} or {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. The XML parse tree of revision content (requires content model `wikitext`). For performance reasons, if this option is used, `rvlimit` is enforced to 50.
     * - **flagged**: Flagged status of the revision.
     * - **oresscores**: ORES scores for the revision.
     *
     * Defaults to `ids`, `timestamp`, `flags`, `comment`, and `user`.
     */
    rvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flagged"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    /**
     * Which revision slots to return data for, when slot-related properties are included in `rvprops`. If omitted, data from the `main` slot will be returned in a backwards-compatible format.
     */
    rvslots?: OneOrMore<"main"> | "*";
    /**
     * Limit how many revisions will be returned. If `rvprop=content`, `rvprop=parsetree`, `rvdiffto` or `rvdifftotext` is used, the limit is 50. If `rvparse` is used, the limit is 1.
     */
    rvlimit?: limit;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} instead. Expand templates in revision content (requires rvprop=content).
     *
     * @deprecated
     */
    rvexpandtemplates?: boolean;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/expandtemplates `action=expandtemplates`} or {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. Generate XML parse tree for revision content (requires rvprop=content).
     *
     * @deprecated
     */
    rvgeneratexml?: boolean;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/parse `action=parse`} instead. Parse revision content (requires `rvprop=content`). For performance reasons, if this option is used, `rvlimit` is enforced to 1.
     *
     * @deprecated
     */
    rvparse?: boolean;
    /**
     * Only retrieve the content of the section with this identifier.
     */
    rvsection?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Revision ID to diff each revision to. Use `prev`, `next` and `cur` for the previous, next and current revision respectively. For performance reasons, if this option is used, `rvlimit` is enforced to 50.
     *
     * @deprecated
     */
    rvdiffto?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Text to diff each revision to. Only diffs a limited number of revisions. Overrides `rvdiffto`. If `rvsection` is set, only that section will be diffed against this text. For performance reasons, if this option is used, `rvlimit` is enforced to 50.
     *
     * @deprecated
     */
    rvdifftotext?: string;
    /**
     * Use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/compare `action=compare`} instead. Perform a pre-save transform on the text before diffing it. Only valid when used with `rvdifftotext`.
     *
     * @deprecated
     */
    rvdifftotextpst?: boolean;
    /**
     * Serialization format used for `rvdifftotext` and expected for output of content.
     *
     * @deprecated
     */
    rvcontentformat?: string;
    /**
     * Start enumeration from the timestamp of the revision with this ID. The revision must exist, but need not belong to this page.
     */
    rvstartid?: number;
    /**
     * Stop enumeration at the timestamp of the revision with this ID. The revision must exist, but need not belong to this page.
     */
    rvendid?: number;
    /**
     * From which revision timestamp to start enumeration.
     */
    rvstart?: timestamp;
    /**
     * Enumerate up to this timestamp.
     */
    rvend?: timestamp;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: rvstart has to be before rvend.
     * - **older**: List newest first (default). Note: rvstart has to be later than rvend.
     *
     * Defaults to `older`.
     */
    rvdir?: "newer" | "older";
    /**
     * Only include revisions made by user.
     */
    rvuser?: string;
    /**
     * Exclude revisions made by user.
     */
    rvexcludeuser?: string;
    /**
     * Only list revisions tagged with this tag.
     */
    rvtag?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    rvcontinue?: string;
}

/**
 * Perform a full text search.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search
 */
export interface ApiQuerySearchParams extends ApiQueryParams {
    /**
     * Search for page titles or content matching this value. You can use the search string to invoke special search features, depending on what the wiki's search backend implements.
     */
    srsearch?: string;
    /**
     * Search only within these namespaces.
     *
     * Defaults to 0.
     */
    srnamespace?: namespace | namespace[] | "*";
    /**
     * How many total pages to return.
     *
     * Defaults to 10.
     */
    srlimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     *
     * Defaults to 0.
     */
    sroffset?: number;
    /**
     * Query independent profile to use (affects ranking algorithm).
     *
     * - **classic**: Ranking based on the number of incoming links, some templates, page language and recency (templates/language/recency may not be activated on this wiki).
     * - **classic_noboostlinks**: Ranking based on some templates, page language and recency when activated on this wiki.
     * - **empty**: Ranking based solely on query dependent features (for debug only).
     * - **wsum_inclinks**: Weighted sum based on incoming links
     * - **wsum_inclinks_pv**: Weighted sum based on incoming links and weekly pageviews
     * - **popular_inclinks_pv**: Ranking based primarily on page views
     * - **popular_inclinks**: Ranking based primarily on incoming link counts
     * - **mlr-1024rs**: Weighted sum based on incoming links and weekly pageviews
     * - **mlr-1024rs-next**: Weighted sum based on incoming links and weekly pageviews
     * - **growth_underlinked**: Internal rescore profile used in GrowthExperiments link recommendations for prioritizing articles which do not yet have enough links. This is a no-op when Link Recommendations are disabled.
     * - **engine_autoselect**: Let the search engine decide on the best profile to use.
     *
     * Defaults to `engine_autoselect`.
     */
    srqiprofile?:
        | "classic"
        | "classic_noboostlinks"
        | "empty"
        | "engine_autoselect"
        | "growth_underlinked"
        | "mlr-1024rs"
        | "mlr-1024rs-next"
        | "popular_inclinks"
        | "popular_inclinks_pv"
        | "wsum_inclinks"
        | "wsum_inclinks_pv";
    /**
     * Query dependent profile to use (affects ranking algorithm).
     *
     * - **default**: (no description)
     * - **perfield_builder**: (no description)
     * - **perfield_builder_relaxed**: (no description)
     * - **perfield_builder_title_filter**: (no description)
     * - **engine_autoselect**: Let the search engine decide on the best profile to use.
     *
     * Defaults to `engine_autoselect`.
     */
    srqdprofile?:
        | "default"
        | "engine_autoselect"
        | "perfield_builder"
        | "perfield_builder_relaxed"
        | "perfield_builder_title_filter";
    /**
     * Which type of search to perform.
     */
    srwhat?: "nearmatch" | "text" | "title";
    /**
     * Which metadata to return.
     *
     * Defaults to `totalhits`, `suggestion`, and `rewrittenquery`.
     */
    srinfo?: OneOrMore<"rewrittenquery" | "suggestion" | "totalhits">;
    /**
     * Which properties to return:
     *
     * - **size**: Adds the size of the page in bytes.
     * - **wordcount**: Adds the word count of the page.
     * - **timestamp**: Adds the timestamp of when the page was last edited.
     * - **snippet**: Adds a snippet of the page, with query term highlighting markup.
     * - **titlesnippet**: Adds the page title, with query term highlighting markup.
     * - **redirecttitle**: Adds the title of the matching redirect.
     * - **redirectsnippet**: Adds the title of the matching redirect, with query term highlighting markup.
     * - **sectiontitle**: Adds the title of the matching section.
     * - **sectionsnippet**: Adds the title of the matching section, with query term highlighting markup.
     * - **isfilematch**: Adds a boolean indicating if the search matched file content.
     * - **categorysnippet**: Adds the matching category name, with query term highlighting markup.
     * - **score**: Deprecated. Ignored.
     * - **hasrelated**: Deprecated. Ignored.
     * - **extensiondata**: Adds extra data generated by extensions.
     *
     * Defaults to `size`, `wordcount`, `timestamp`, and `snippet`.
     */
    srprop?: OneOrMore<
        | "categorysnippet"
        | "extensiondata"
        | "isfilematch"
        | "redirectsnippet"
        | "redirecttitle"
        | "sectionsnippet"
        | "sectiontitle"
        | "size"
        | "snippet"
        | "timestamp"
        | "titlesnippet"
        | "wordcount"
        | "hasrelated"
        | "score"
    >;
    /**
     * Include interwiki results in the search, if available.
     */
    srinterwiki?: boolean;
    /**
     * Enable internal query rewriting. Some search backends can rewrite the query into another which is thought to provide better results, for instance by correcting spelling errors.
     */
    srenablerewrites?: boolean;
    /**
     * Set the sort order of returned results.
     *
     * Defaults to `relevance`.
     */
    srsort?:
        | "create_timestamp_asc"
        | "create_timestamp_desc"
        | "incoming_links_asc"
        | "incoming_links_desc"
        | "just_match"
        | "last_edit_asc"
        | "last_edit_desc"
        | "none"
        | "random"
        | "relevance"
        | "title_natural_asc"
        | "title_natural_desc"
        | "user_random";
}

/**
 * Return general information about the site.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Siteinfo
 */
export interface ApiQuerySiteinfoParams extends ApiQueryParams {
    /**
     * Which information to get:
     *
     * - **general**: Overall system information.
     * - **namespaces**: List of registered namespaces and their canonical names.
     * - **namespacealiases**: List of registered namespace aliases.
     * - **specialpagealiases**: List of special page aliases.
     * - **magicwords**: List of magic words and their aliases.
     * - **interwikimap**: Returns interwiki map (optionally filtered, optionally localised by using `siinlanguagecode`).
     * - **dbrepllag**: Returns database server with the highest replication lag.
     * - **statistics**: Returns site statistics.
     * - **usergroups**: Returns user groups and the associated permissions.
     * - **autocreatetempuser**: Returns configuration for the automatic creation of temporary user accounts (also known as IP masking).
     * - **clientlibraries**: Returns client-side libraries installed on the wiki
     * - **libraries**: Returns libraries installed on the wiki.
     * - **extensions**: Returns extensions installed on the wiki.
     * - **fileextensions**: Returns list of file extensions (file types) allowed to be uploaded.
     * - **rightsinfo**: Returns wiki rights (license) information if available.
     * - **restrictions**: Returns information on available restriction (protection) types.
     * - **languages**: Returns a list of languages MediaWiki supports (optionally localised by using `siinlanguagecode`).
     * - **languagevariants**: Returns a list of language codes for which {@link https://www.mediawiki.org/wiki/Special:MyLanguage/LanguageConverter LanguageConverter} is enabled, and the variants supported for each.
     * - **skins**: Returns a list of all enabled skins (optionally localised by using `siinlanguagecode`, otherwise in the content language).
     * - **extensiontags**: Returns a list of parser extension tags.
     * - **functionhooks**: Returns a list of magic word IDs for {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Magic_words#Parser_functions parser functions}.
     * - **showhooks**: Returns a list of all subscribed hooks (contents of {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgHooks `$wgHooks`}).
     * - **variables**: Returns a list of magic word IDs for {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Magic_words#Variables magic variables}.
     * - **doubleunderscores**: Returns a list of magic word IDs for {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Magic_words#Behavior_switches behavior switches}.
     * - **protocols**: Returns a list of protocols that are allowed in external links.
     * - **defaultoptions**: Returns the default values for user preferences.
     * - **uploaddialog**: Returns the upload dialog configuration.
     * - **autopromote**: Returns the automatic promotion configuration.
     * - **autopromoteonce**: Returns the automatic promotion configuration that are only done once.
     * - **copyuploaddomains**: Returns the list of allowed copy upload domains
     * - **crosssiteajaxdomains**: Returns the list of allowed CORS domains
     * - **sbom**: Returns a Software Bill of Materials (SBOM) for the MediaWiki installation in the CycloneDX 1.6 format.
     *
     * Defaults to `general`.
     */
    siprop?: OneOrMore<
        | "autocreatetempuser"
        | "autopromote"
        | "autopromoteonce"
        | "clientlibraries"
        | "copyuploaddomains"
        | "crosssiteajaxdomains"
        | "dbrepllag"
        | "defaultoptions"
        | "doubleunderscores"
        | "extensions"
        | "extensiontags"
        | "fileextensions"
        | "functionhooks"
        | "general"
        | "interwikimap"
        | "languages"
        | "languagevariants"
        | "libraries"
        | "magicwords"
        | "namespacealiases"
        | "namespaces"
        | "protocols"
        | "restrictions"
        | "rightsinfo"
        | "sbom"
        | "showhooks"
        | "skins"
        | "specialpagealiases"
        | "statistics"
        | "uploaddialog"
        | "usergroups"
        | "variables"
    >;
    /**
     * Return only local or only nonlocal entries of the interwiki map.
     */
    sifilteriw?: "!local" | "local";
    /**
     * List all database servers, not just the one lagging the most.
     */
    sishowalldb?: boolean;
    /**
     * Lists the number of users in user groups.
     */
    sinumberingroup?: boolean;
    /**
     * Language code for localised language names (best effort) and skin names.
     */
    siinlanguagecode?: string;
}

/**
 * Shows sitewide pageview data (daily pageview totals for each of the last `pvisdays` days).
 *
 * The result format is date (Ymd) => count.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
 */
export interface PageViewInfoApiQuerySiteViewsParams extends ApiQueryParams {
    /**
     * The metric to use for counting views. Depending on what backend is used, not all metrics might be supported. You can use the siteinfo API ({@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Bsiteinfo action=query&meta=siteinfo}) to check which ones are supported, under `pageviewservice-supported-metrics` / _module name_ (`siteviews`, `mostviewed`, etc.)
     *
     * - **pageviews**: Plain pageviews.
     * - **uniques**: Unique visitors.
     *
     * Defaults to `pageviews`.
     */
    pvismetric?: "pageviews" | "uniques";
    /**
     * The number of days to show.
     *
     * Defaults to 60.
     */
    pvisdays?: number;
}

/**
 * Returns file information for stashed files.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Stashimageinfo
 */
export interface ApiQueryStashImageInfoParams extends ApiQueryParams {
    /**
     * Key that identifies a previous upload that was stashed temporarily.
     */
    siifilekey?: string | string[];
    /**
     * Alias for siifilekey, for backward compatibility.
     *
     * @deprecated
     */
    siisessionkey?: string | string[];
    /**
     * Which file information to get:
     *
     * - **timestamp**: Adds timestamp for the uploaded version.
     * - **canonicaltitle**: Adds the canonical title of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **url**: Gives URL to the file and the description page. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **size**: Adds the size of the file in bytes and the height, width and page count (if applicable).
     * - **dimensions**: Alias for size.
     * - **sha1**: Adds SHA-1 hash for the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **mime**: Adds MIME type of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **thumbmime**: Adds MIME type of the image thumbnail (requires url and param siiurlwidth). If the file has been revision deleted, a `filehidden` property will be returned.
     * - **thumburls**: Adds thumbnail URLs of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **metadata**: Lists Exif metadata for the version of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **commonmetadata**: Lists file format generic metadata for the version of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **extmetadata**: Lists formatted metadata combined from multiple sources. Results are HTML formatted. If the file has been revision deleted, a `filehidden` property will be returned.
     * **Note:** This is an expensive property to request, and should be avoided unless you need it. When using it, you should request only a few results at a time to avoid too much load.
     *
     * - **bitdepth**: Adds the bit depth of the version. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **badfile**: Adds whether the file is on the {@link https://www.mediawiki.org/wiki/MediaWiki:Bad_image_list MediaWiki:Bad image list}
     *
     * Defaults to `timestamp` and `url`.
     */
    siiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "metadata"
        | "mime"
        | "sha1"
        | "size"
        | "thumbmime"
        | "thumburls"
        | "timestamp"
        | "url"
    >;
    /**
     * If siiprop=url is set, a URL to an image scaled to this width will be returned.
     * For performance reasons if this option is used, no more than 50 scaled images will be returned.
     *
     * Defaults to -1.
     */
    siiurlwidth?: number;
    /**
     * Similar to siiurlwidth.
     *
     * Defaults to -1.
     */
    siiurlheight?: number;
    /**
     * A handler specific parameter string. For example, PDFs might use `page15-100px`. `siiurlwidth` must be used and be consistent with `siiurlparam`.
     *
     * Defaults to an empty string.
     */
    siiurlparam?: string;
}

/**
 * List change tags.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tags
 */
export interface ApiQueryTagsParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    tgcontinue?: string;
    /**
     * The maximum number of tags to list.
     *
     * Defaults to 10.
     */
    tglimit?: limit;
    /**
     * Which properties to get:
     *
     * - **displayname**: Adds the displayed name of the tag. This property will be omitted for hidden tags.
     * - **description**: Adds the description of the tag.
     * - **hitcount**: Adds the number of revisions and log entries that have this tag.
     * - **defined**: Indicate whether the tag is defined (see `source`).
     * - **source**: Gets the sources of the tag definition, which may include `software` for software-defined tags and `manual` for tags that may be applied manually by users.
     * - **active**: Whether the tag is still being applied by the software, or may still be applied by users.
     *
     * Defaults to an empty string.
     */
    tgprop?: OneOrMore<
        "active" | "defined" | "description" | "displayname" | "hitcount" | "source"
    >;
}

/**
 * Returns all pages transcluded on the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates
 */
export interface ApiQueryLinksParams extends ApiQueryParams {
    /**
     * Show templates in these namespaces only.
     */
    tlnamespace?: namespace | namespace[] | "*";
    /**
     * How many templates to return.
     *
     * Defaults to 10.
     */
    tllimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    tlcontinue?: string;
    /**
     * Only list these templates. Useful for checking whether a certain page uses a certain template.
     */
    tltemplates?: string | string[];
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    tldir?: "ascending" | "descending";
}

/**
 * Gets tokens for data-modifying actions.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tokens
 */
export interface ApiQueryTokensParams extends ApiQueryParams {
    /**
     * Types of token to request.
     *
     * Defaults to `csrf`.
     */
    type?:
        | OneOrMore<
              | "createaccount"
              | "csrf"
              | "deleteglobalaccount"
              | "login"
              | "patrol"
              | "rollback"
              | "setglobalaccountstatus"
              | "userrights"
              | "watch"
          >
        | "*";
}

/**
 * Enumerate all existing tracking categories defined in {@link https://www.mediawiki.org/wiki/Special:TrackingCategories Special:TrackingCategories}. A tracking category exists if it contains pages or if its category page exists.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Trackingcategories
 */
export interface ApiQueryTrackingCategoriesParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    tccontinue?: string;
    /**
     * Search for all existing tracking category titles that match the provided tracking category name (as defined by "message name" on {@link https://www.mediawiki.org/wiki/Special:TrackingCategories Special:TrackingCategories}.)
     */
    tctrackingcatname?: string | string[];
    /**
     * Only return existing tracking categories with at least this many members.
     */
    tcmin?: number;
    /**
     * Only return existing tracking categories with at most this many members.
     */
    tcmax?: number;
    /**
     * How many tracking categories to return.
     *
     * Defaults to 10.
     */
    tclimit?: limit;
    /**
     * Which properties to get:
     *
     * - **size**: Adds number of pages in the tracking category.
     * - **hidden**: Tags tracking categories that are hidden with `__HIDDENCAT__`.
     *
     * Defaults to an empty string.
     */
    tcprop?: OneOrMore<"hidden" | "size">;
}

/**
 * Find all pages that transclude the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin
 */
export interface ApiQueryBacklinkspropParams extends ApiQueryParams {
    /**
     * Which properties to get:
     *
     * - **pageid**: Page ID of each page.
     * - **title**: Title of each page.
     * - **redirect**: Flag if the page is a redirect.
     *
     * Defaults to `pageid`, `title`, and `redirect`.
     */
    tiprop?: OneOrMore<"pageid" | "redirect" | "title">;
    /**
     * Only include pages in these namespaces.
     */
    tinamespace?: namespace | namespace[] | "*";
    /**
     * Show only items that meet these criteria:
     *
     * - **redirect**: Only show redirects.
     * - **!redirect**: Only show non-redirects.
     */
    tishow?: OneOrMore<"!redirect" | "redirect">;
    /**
     * How many to return.
     *
     * Defaults to 10.
     */
    tilimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    ticontinue?: string;
}

/**
 * Get transcode status for a given file page.
 */
export interface TimedMediaHandlerApiTranscodeStatusParams extends ApiQueryParams {}

/**
 * Get pages for which there are unread notifications for the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
 */
export interface NotificationsApiEchoUnreadNotificationPagesParams extends ApiQueryParams {
    /**
     * List of wikis to fetch pages with unread notifications from (defaults to only current wiki).
     *
     * Defaults to `enwiki`.
     */
    unpwikis?: string | string[];
    /**
     * Group talk pages together with their subject page, and group notifications not associated with a page together with the current user's user page.
     */
    unpgrouppages?: boolean;
    /**
     * The maximum number of pages to return.
     *
     * Defaults to 10.
     */
    unplimit?: limit;
}

/**
 * Get all edits by a user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Usercontribs
 */
export interface ApiQueryUserContribsParams extends ApiQueryParams {
    /**
     * The maximum number of contributions to return.
     *
     * Defaults to 10.
     */
    uclimit?: limit;
    /**
     * The start timestamp to return from, i.e. revisions before this timestamp.
     */
    ucstart?: timestamp;
    /**
     * The end timestamp to return to, i.e. revisions after this timestamp.
     */
    ucend?: timestamp;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    uccontinue?: string;
    /**
     * The users to retrieve contributions for. Cannot be used with `ucuserids`, `ucuserprefix`, or `uciprange`.
     */
    ucuser?: string | string[];
    /**
     * The user IDs to retrieve contributions for. Cannot be used with `ucuser`, `ucuserprefix`, or `uciprange`.
     */
    ucuserids?: number | number[];
    /**
     * Retrieve contributions for all users whose names begin with this value. Cannot be used with `ucuser`, `ucuserids`, or `uciprange`.
     */
    ucuserprefix?: string;
    /**
     * The CIDR range to retrieve contributions for. Cannot be used with `ucuser`, `ucuserprefix`, or `ucuserids`.
     */
    uciprange?: string;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: ucstart has to be before ucend.
     * - **older**: List newest first (default). Note: ucstart has to be later than ucend.
     *
     * Defaults to `older`.
     */
    ucdir?: "newer" | "older";
    /**
     * Only list contributions in these namespaces.
     */
    ucnamespace?: namespace | namespace[] | "*";
    /**
     * Include additional pieces of information:
     *
     * - **ids**: Adds the page ID and revision ID.
     * - **title**: Adds the title and namespace ID of the page.
     * - **timestamp**: Adds the timestamp of the edit.
     * - **comment**: Adds the comment of the edit. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Adds the parsed comment of the edit. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **size**: Adds the new size of the edit.
     * - **sizediff**: Adds the size delta of the edit against its parent.
     * - **flags**: Adds flags of the edit.
     * - **patrolled**: Tags patrolled edits.
     * - **tags**: Lists tags for the edit.
     * - **oresscores**: Adds ORES scores for the edit.
     *
     * Defaults to `ids`, `title`, `timestamp`, `comment`, `size`, and `flags`.
     */
    ucprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "size"
        | "sizediff"
        | "tags"
        | "timestamp"
        | "title"
    >;
    /**
     * Show only items that meet these criteria, e.g. non minor edits only: `ucshow=!minor`.
     *
     * If `ucshow=patrolled` or `ucshow=!patrolled` is set, revisions older than {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgRCMaxAge `$wgRCMaxAge`} (2592000 seconds) won't be shown.
     *
     * When using `oresreview` or `!oresreview`, revisions without a score (e.g. very old revisions) are considered as not needing review even if they would need review if scored.
     */
    ucshow?: OneOrMore<
        | "!autopatrolled"
        | "!minor"
        | "!new"
        | "!oresreview"
        | "!patrolled"
        | "!top"
        | "autopatrolled"
        | "minor"
        | "new"
        | "oresreview"
        | "patrolled"
        | "top"
    >;
    /**
     * Only list revisions tagged with this tag.
     */
    uctag?: string;
    /**
     * Only list changes which are the latest revision.
     *
     * @deprecated
     */
    uctoponly?: boolean;
}

/**
 * Get information about the current user.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Userinfo
 */
export interface ApiQueryUserInfoParams extends ApiQueryParams {
    /**
     * Which pieces of information to include:
     *
     * - **blockinfo**: Tags if the current user is blocked, by whom, and for what reason.
     * - **hasmsg**: Adds a tag `messages` if the current user has pending messages.
     * - **groups**: Lists all the groups the current user belongs to.
     * - **groupmemberships**: Lists groups that the current user has been explicitly assigned to, including the expiry date of each group membership.
     * - **implicitgroups**: Lists all the groups the current user is automatically a member of.
     * - **rights**: Lists all the rights the current user has.
     * - **changeablegroups**: Lists the groups the current user can add to and remove from.
     * - **options**: Lists all preferences the current user has set.
     * - **editcount**: Adds the current user's edit count.
     * - **ratelimits**: Lists all rate limits applying to the current user.
     * - **theoreticalratelimits**: Lists all rate limits that would apply to the current user if they were not exempt from all ratelimits based on user rights or ip.
     * - **email**: Adds the user's email address and email authentication date.
     * - **realname**: Adds the user's real name.
     * - **acceptlang**: Echoes the `Accept-Language` header sent by the client in a structured format.
     * - **registrationdate**: Adds the user's registration date.
     * - **unreadcount**: Adds the count of unread pages on the user's watchlist (maximum 999; returns `1000+` if more).
     * - **watchlistlabels**: Adds watchlist labels the user has set up.
     * - **centralids**: Adds the central IDs and attachment status for the user.
     * - **latestcontrib**: Adds the date of user's latest contribution.
     * - **cancreateaccount**: Indicates whether the user is allowed to create accounts. To check whether some specific account can be created, use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Busers `action=query&list=users&usprop=cancreate`}.
     */
    uiprop?:
        | OneOrMore<
              | "acceptlang"
              | "blockinfo"
              | "cancreateaccount"
              | "centralids"
              | "changeablegroups"
              | "editcount"
              | "email"
              | "groupmemberships"
              | "groups"
              | "hasmsg"
              | "implicitgroups"
              | "latestcontrib"
              | "options"
              | "ratelimits"
              | "realname"
              | "registrationdate"
              | "rights"
              | "theoreticalratelimits"
              | "unreadcount"
              | "watchlistlabels"
          >
        | "*";
    /**
     * With `uiprop=centralids`, indicate whether the user is attached with the wiki identified by this ID.
     */
    uiattachedwiki?: string;
}

/**
 * Get information about a list of users.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Users
 */
export interface ApiQueryUsersParams extends ApiQueryParams {
    /**
     * Which pieces of information to include:
     *
     * - **blockinfo**: Tags if the user is blocked, by whom, and for what reason.
     * - **groups**: Lists all the groups each user belongs to.
     * - **groupmemberships**: Lists groups that each user has been explicitly assigned to, including the expiry date of each group membership.
     * - **implicitgroups**: Lists all the groups a user is automatically a member of.
     * - **rights**: Lists all the rights each user has.
     * - **editcount**: Adds the user's edit count.
     * - **registration**: Adds the user's registration timestamp.
     * - **emailable**: Tags if the user can and wants to receive email through {@link https://www.mediawiki.org/wiki/Special:EmailUser Special:Emailuser}.
     * - **gender**: Tags the gender of the user. Returns "male", "female", or "unknown".
     * - **centralids**: Adds the central IDs and attachment status for the user.
     * - **cancreate**: Indicates whether an account for valid but unregistered usernames can be created. To check whether the current user can perform the account creation, use {@link https://www.mediawiki.org/wiki/Special:ApiHelp/query%2Buserinfo `action=query&meta=userinfo&uiprop=cancreateaccount`}.
     * - **tempexpired**: Indicates whether the temporary account has expired or not. If account isn't temporary, null is returned.
     */
    usprop?: OneOrMore<
        | "blockinfo"
        | "cancreate"
        | "centralids"
        | "editcount"
        | "emailable"
        | "gender"
        | "groupmemberships"
        | "groups"
        | "implicitgroups"
        | "registration"
        | "rights"
        | "tempexpired"
    >;
    /**
     * With `usprop=centralids`, indicate whether the user is attached with the wiki identified by this ID.
     */
    usattachedwiki?: string;
    /**
     * A list of users to obtain information for.
     */
    ususers?: string | string[];
    /**
     * A list of user IDs to obtain information for.
     */
    ususerids?: number | number[];
}

/**
 * Extends imageinfo to include video source (derivatives) information
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Videoinfo
 */
export interface TimedMediaHandlerApiQueryVideoInfoParams extends ApiQueryParams {
    /**
     * Which file information to get:
     *
     * - **timestamp**: Adds timestamp for the uploaded version.
     * - **user**: Adds the user who uploaded each file version. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: Add the ID of the user that uploaded each file version. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **comment**: Comment on the version. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Parse the comment on the version. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **canonicaltitle**: Adds the canonical title of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **url**: Gives URL to the file and the description page. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **size**: Adds the size of the file in bytes and the height, width and page count (if applicable).
     * - **dimensions**: Alias for size.
     * - **sha1**: Adds SHA-1 hash for the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **mime**: Adds MIME type of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **thumbmime**: Adds MIME type of the image thumbnail (requires url and param viurlwidth). If the file has been revision deleted, a `filehidden` property will be returned.
     * - **thumburls**: Adds thumbnail URLs of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **mediatype**: Adds the media type of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **metadata**: Lists Exif metadata for the version of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **commonmetadata**: Lists file format generic metadata for the version of the file. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **extmetadata**: Lists formatted metadata combined from multiple sources. Results are HTML formatted. If the file has been revision deleted, a `filehidden` property will be returned.
     * **Note:** This is an expensive property to request, and should be avoided unless you need it. When using it, you should request only a few results at a time to avoid too much load.
     *
     * - **archivename**: Adds the filename of the archive version for non-latest versions. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **bitdepth**: Adds the bit depth of the version. If the file has been revision deleted, a `filehidden` property will be returned.
     * - **uploadwarning**: Used by the Special:Upload page to get information about an existing file. Not intended for use outside MediaWiki core.
     * - **badfile**: Adds whether the file is on the {@link https://www.mediawiki.org/wiki/MediaWiki:Bad_image_list MediaWiki:Bad image list}
     * - **derivatives**: Adds an array of the different format and quality versions of an audio or video file that are available.
     * - **timedtext**: Adds an array of the subtitles, captions and descriptions of an audio or video file that are available.
     *
     * Defaults to `timestamp` and `user`.
     */
    viprop?: OneOrMore<
        | "archivename"
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "derivatives"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "thumbmime"
        | "thumburls"
        | "timedtext"
        | "timestamp"
        | "uploadwarning"
        | "url"
        | "user"
        | "userid"
    >;
    /**
     * How many file revisions to return per file.
     *
     * Defaults to 1.
     */
    vilimit?: limit;
    /**
     * Timestamp to start listing from.
     */
    vistart?: timestamp;
    /**
     * Timestamp to stop listing at.
     */
    viend?: timestamp;
    /**
     * If viprop=url is set, a URL to an image scaled to this width will be returned.
     * For performance reasons if this option is used, no more than 50 scaled images will be returned.
     *
     * Defaults to -1.
     */
    viurlwidth?: number;
    /**
     * Similar to viurlwidth.
     *
     * Defaults to -1.
     */
    viurlheight?: number;
    /**
     * Version of metadata to use. If `latest` is specified, use latest version. Defaults to `1` for backwards compatibility.
     *
     * Defaults to `1`.
     */
    vimetadataversion?: string;
    /**
     * What language to fetch extmetadata in. This affects both which translation to fetch, if multiple are available, as well as how things like numbers and various values are formatted.
     *
     * Defaults to `en`.
     */
    viextmetadatalanguage?: string;
    /**
     * If translations for extmetadata property are available, fetch all of them.
     */
    viextmetadatamultilang?: boolean;
    /**
     * If specified and non-empty, only these keys will be returned for viprop=extmetadata.
     */
    viextmetadatafilter?: string | string[];
    /**
     * A handler specific parameter string. For example, PDFs might use `page15-100px`. `viurlwidth` must be used and be consistent with `viurlparam`.
     *
     * Defaults to an empty string.
     */
    viurlparam?: string;
    /**
     * If `badfilecontexttitleprop=badfile` is set, this is the page title used when evaluating the {@link https://www.mediawiki.org/wiki/MediaWiki:Bad_image_list MediaWiki:Bad image list}
     */
    vibadfilecontexttitle?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    vicontinue?: string;
    /**
     * Look only for files in the local repository.
     */
    vilocalonly?: boolean;
}

/**
 * Get recent changes to pages in the current user's watchlist.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist
 */
export interface ApiQueryWatchlistParams extends ApiQueryParams {
    /**
     * Include multiple revisions of the same page within given timeframe.
     */
    wlallrev?: boolean;
    /**
     * The timestamp to start enumerating from.
     */
    wlstart?: timestamp;
    /**
     * The timestamp to end enumerating.
     */
    wlend?: timestamp;
    /**
     * Filter changes to only the given namespaces.
     */
    wlnamespace?: namespace | namespace[] | "*";
    /**
     * Only list changes by this user.
     */
    wluser?: string;
    /**
     * Don't list changes by this user.
     */
    wlexcludeuser?: string;
    /**
     * In which direction to enumerate:
     *
     * - **newer**: List oldest first. Note: wlstart has to be before wlend.
     * - **older**: List newest first (default). Note: wlstart has to be later than wlend.
     *
     * Defaults to `older`.
     */
    wldir?: "newer" | "older";
    /**
     * How many total results to return per request.
     *
     * Defaults to 10.
     */
    wllimit?: limit;
    /**
     * Which additional properties to get:
     *
     * - **ids**: Adds revision IDs and page IDs.
     * - **title**: Adds title of the page.
     * - **flags**: Adds flags for the edit.
     * - **user**: Adds the user who made the edit. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **userid**: Adds user ID of whoever made the edit. If the user has been revision deleted, a `userhidden` property will be returned.
     * - **comment**: Adds comment of the edit. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **parsedcomment**: Adds parsed comment of the edit. If the comment has been revision deleted, a `commenthidden` property will be returned.
     * - **timestamp**: Adds timestamp of the edit.
     * - **patrol**: Tags edits that are patrolled.
     * - **sizes**: Adds the old and new lengths of the page.
     * - **notificationtimestamp**: Adds timestamp of when the user was last notified about the edit.
     * - **loginfo**: Adds log information where appropriate.
     * - **tags**: Lists tags for the entry.
     * - **expiry**: Adds the expiry time.
     * - **labels**: Adds watchlist labels associated with the entry.
     * - **oresscores**: Adds ORES scores for the edit.
     *
     * Defaults to `ids`, `title`, and `flags`.
     */
    wlprop?: OneOrMore<
        | "comment"
        | "expiry"
        | "flags"
        | "ids"
        | "labels"
        | "loginfo"
        | "notificationtimestamp"
        | "oresscores"
        | "parsedcomment"
        | "patrol"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    /**
     * Show only items that meet these criteria. For example, to see only minor edits done by logged-in users, set wlshow=minor|!anon.
     *
     * When using `oresreview` or `!oresreview`, revisions without a score (e.g. very old revisions) are considered as not needing review even if they would need review if scored.
     */
    wlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "unread"
    >;
    /**
     * Which types of changes to show:
     *
     * - **edit**: Regular page edits.
     * - **new**: Page creations.
     * - **log**: Log entries.
     * - **external**: External changes.
     * - **categorize**: Category membership changes.
     *
     * Defaults to `edit`, `new`, `log`, and `categorize`.
     */
    wltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    /**
     * Only list changes with these watchlist label IDs.
     */
    wllabels?: number | number[];
    /**
     * Used along with wltoken to access a different user's watchlist.
     */
    wlowner?: string;
    /**
     * A security token (available in the user's {@link https://www.mediawiki.org/wiki/Special:Preferences#mw-prefsection-watchlist preferences}) to allow access to another user's watchlist.
     *
     * Sensitive parameter.
     */
    wltoken?: string;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    wlcontinue?: string;
}

/**
 * Get all pages on the current user's watchlist.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw
 */
export interface ApiQueryWatchlistRawParams extends ApiQueryParams {
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    wrcontinue?: string;
    /**
     * Only list pages in the given namespaces.
     */
    wrnamespace?: namespace | namespace[] | "*";
    /**
     * How many total results to return per request.
     *
     * Defaults to 10.
     */
    wrlimit?: limit;
    /**
     * Which additional properties to get:
     *
     * - **changed**: Adds timestamp of when the user was last notified about the edit.
     */
    wrprop?: OneOrMore<"changed">;
    /**
     * Only list items that meet these criteria.
     */
    wrshow?: OneOrMore<"!changed" | "changed">;
    /**
     * Used along with wrtoken to access a different user's watchlist.
     */
    wrowner?: string;
    /**
     * A security token (available in the user's {@link https://www.mediawiki.org/wiki/Special:Preferences#mw-prefsection-watchlist preferences}) to allow access to another user's watchlist.
     *
     * Sensitive parameter.
     */
    wrtoken?: string;
    /**
     * The direction in which to list.
     *
     * Defaults to `ascending`.
     */
    wrdir?: "ascending" | "descending";
    /**
     * Title (with namespace prefix) to begin enumerating from.
     */
    wrfromtitle?: string;
    /**
     * Title (with namespace prefix) to stop enumerating at.
     */
    wrtotitle?: string;
}

/**
 * Returns all entity IDs used in the given pages.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API#wbentityusage
 */
export interface WikibaseClientApiPropsEntityUsageParams extends ApiQueryParams {
    /**
     * Properties to add to the result.
     *
     * - **url**: If enabled url of entity will be added
     */
    wbeuprop?: OneOrMore<"url">;
    /**
     * Only return entity IDs that used this aspect.
     *
     * - **S**: The entity's sitelinks are used
     * - **L**: The entity's label is used
     * - **D**: The entity's description is used
     * - **T**: The title of the local page corresponding to the entity is used
     * - **C**: Statements from the entity are used
     * - **X**: All aspects of an entity are or may be used
     * - **O**: Something else about the entity is used. This currently implies alias usage and explicit checks for entity existence.
     */
    wbeuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    /**
     * Only return page that used these entities.
     */
    wbeuentities?: string | string[];
    /**
     * How many entity usages to return.
     *
     * Defaults to 10.
     */
    wbeulimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    wbeucontinue?: string;
}

/**
 * Returns all pages that use the given entity IDs.
 *
 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API
 */
export interface WikibaseClientApiListEntityUsageParams extends ApiQueryParams {
    /**
     * Properties to add to the result.
     *
     * - **url**: If enabled the url of the entity will be added to the result.
     */
    wbleuprop?: OneOrMore<"url">;
    /**
     * Only return entity IDs that used this aspect.
     *
     * - **S**: The entity's sitelinks are used
     * - **L**: The entity's label is used
     * - **D**: The entity's description is used
     * - **T**: The title of the local page corresponding to the entity is used
     * - **C**: Statements from the entity are used
     * - **X**: All aspects of an entity are or may be used
     * - **O**: Something else about the entity is used. This currently implies alias usage and explicit checks for entity existence.
     */
    wbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    /**
     * Entities that have been used.
     */
    wbleuentities?: string | string[];
    /**
     * How many entity usages to return.
     *
     * Defaults to 10.
     */
    wbleulimit?: limit;
    /**
     * When more results are available, use this to continue. More detailed information on how to continue queries {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Continue can be found on mediawiki.org}.
     */
    wbleucontinue?: string;
}

/**
 * Get information about the Wikibase client and the associated Wikibase repository.
 */
export interface WikibaseClientApiClientInfoParams extends ApiQueryParams {
    /**
     * Which properties to get:
     *
     * - **url**: Base URL, script path and article path of the Wikibase repository.
     * - **siteid**: The siteid of this site.
     *
     * Defaults to `url` and `siteid`.
     */
    wbprop?: OneOrMore<"siteid" | "url">;
}

/**
 * Enumerate all wiki sets.
 */
export interface CentralAuthApiQueryWikiSetsParams extends ApiQueryParams {
    /**
     * The name of the wiki set to start from.
     */
    wsfrom?: string;
    /**
     * What pieces of information to include:
     *
     * - **type**: Opt-in based (includes only specified wikis) or opt-out based (includes all wikis except specified).
     * - **wikisincluded**: The wikis that are included in this wiki set.
     * - **wikisnotincluded**: The wikis that are not included in this wiki set.
     */
    wsprop?: OneOrMore<"type" | "wikisincluded" | "wikisnotincluded">;
    /**
     * How many wiki sets to return.
     *
     * Defaults to 10.
     */
    wslimit?: limit;
    /**
     * Order results by name.
     */
    wsorderbyname?: boolean;
}
