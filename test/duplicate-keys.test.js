const YAML = require("yaml")
const fs = require("fs")
const { expect } = require('@jest/globals');


describe("No Duplicate Keys", () => {
    // Read all files in locales...
    fs.readdirSync("./locales").forEach(localeFile => {
        test(`No duplicate keys for ${localeFile}`, () => {
            const file = fs.readFileSync(`./locales/${localeFile}`, 'utf8')
            const en = YAML.parse(file)
        })
    });
    
    

    
});

// test("No Duplicate Keys all files", async () => {
//     // Read all files in locales...
//     const file = fs.readFileSync('./locales/en.yaml', 'utf8')
//     const en = YAML.parse(file)

//     expect()
// });