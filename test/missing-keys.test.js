const YAML = require("yaml")
const fs = require("fs")
const { expect } = require('@jest/globals');
const i18nUtil = require("../lib/i18n-util")


test("Missing Keys", () => {
    // Read all files in locales...
    
    expect(i18nUtil.missingKeys).not.toBeNull()
    expect(i18nUtil.missingKeys).not.toBeUndefined()
    expect(i18nUtil.missingKeys).toStrictEqual([])
});