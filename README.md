[![NPM version](https://img.shields.io/npm/v/types-mediawiki.svg)](https://www.npmjs.com/package/types-mediawiki-api)
![Linter](https://github.com/wikimedia-gadgets/types-mediawiki/workflows/Lint/badge.svg)

# types-mediawiki-api

```bash
npm i types-mediawiki-api
```

This package also provides typings for API request parameters for the [MediaWiki Action API](https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page). API endpoints defined in MediaWiki core and by a number of common extensions (the ones enabled on English Wikipedia) are covered. These aren't exported to the global scope, however. For usage, you need to import them. For example:

```ts
import type { ApiEditPageParams, ApiParseParams } from "types-mediawiki/api_params";
```

Since it is just a type import, it doesn't generate any JavaScript. Hence, such imports can also be used in non-modular applications.

This package originated from types-mediawiki.

[![Download stats](https://nodei.co/npm/types-mediawiki.png?downloads=true&downloadRank=true)](https://nodei.co/npm/types-mediawiki/)

