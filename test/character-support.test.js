const YAML = require("yaml")
const fs = require("fs")
const { expect } = require('@jest/globals');
const i18nUtil = require("../lib/i18n-util")


describe("Make sure character set is utf-8", () => {
    // Read all files in locales...
    test(`equal and slash`, () => {
        expect(i18nUtil.getText("en", "enterPinToSend", {amountText: "1 sats /(1 sats = 0.00000001 BTC)", receiver: "yourself"})).toBe("Enter your Machankura PIN to send 1 sats /(1 sats = 0.00000001 BTC) to yourself:")
    })
});

// test("No Duplicate Keys all files", async () => {
//     // Read all files in locales...
//     const file = fs.readFileSync('./locales/en.yaml', 'utf8')
//     const en = YAML.parse(file)

//     expect()
// });