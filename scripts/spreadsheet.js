const YAML = require("yaml")
const fs = require("fs")

if (process.argv[2]) {
    const baseLangFile = fs.readFileSync('./locales/en.yaml', 'utf8')
    const baseLanguage = YAML.parse(baseLangFile)

    var output = `key;en;${process.argv[2]}\n`

    const keys = Object.keys(baseLanguage)

    for (const key in baseLanguage) {
        if (Object.hasOwnProperty.call(baseLanguage, key)) {
            const string = baseLanguage[key];
            
            output += `${key};${string};\n`
        }
    }

    fs.writeFileSync(`./spreadsheets/${process.argv[2]}.csv`, output)
    

} else {
    console.log("Please give use a language we should translate into")
}