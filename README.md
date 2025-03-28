[![NPM version](https://img.shields.io/npm/v/types-mediawiki-api.svg)](https://www.npmjs.com/package/types-mediawiki-api)

# types-mediawiki-api

This package provides typings for API request parameters for the [MediaWiki Action API](https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page). API endpoints defined in MediaWiki core and by a number of common extensions (the ones enabled on English Wikipedia) are covered. This package originated from types-mediawiki (split out in v2).

[![Download stats](https://nodei.co/npm/types-mediawiki-api.png?downloads=true&downloadRank=true)](https://nodei.co/npm/types-mediawiki-api/)

## Usage

Installation:
```bash
npm i types-mediawiki-api
```

Import example:

```ts
import type { ApiEditPageParams, ApiParseParams } from "types-mediawiki-api";
```

Since these are just type imports, they don't generate any JavaScript.
