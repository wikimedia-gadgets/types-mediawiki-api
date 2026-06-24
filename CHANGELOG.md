## Unreleased

- Updated types.
- Added JSdoc to interfaces and properties.
- Fixed some extensible enumerated types being too specific, specifically:
    - Codex icons (such as `ApiQueryCodexIconsParams.names`),
    - Content formats (such as `ApiEditPageParams.contentformat`),
    - Content models (such as `ApiEditPageParams.contentmodel`),
    - Language codes (such as `ApiSetPageLanguageParams.lang`),
    - Tags (such as `ApiTagParams.add`),
    - User groups (such as `ApiUserrightsParams.add`), and
    - User rights (such as `ApiQueryAllUsersParams.aurights`).
- Fixed `ApiFeedRecentChangesParams.tagfilter` allowing string arrays.

## 2.0.0

- Initial release after split from `types-mediawiki`. No changes in code (same as `types-mediawiki` v1.10.11).
