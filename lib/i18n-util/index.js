const i18n = require('i18n')
const YAML = require('yaml')
const path = require("path")

const { transliterate } = require("transliteration")

const nonLatinPattern = /[^\u0000-\u007F]+/;

const needsRomanization = (text) => {
    // Regex pattern to match non-Latin characters
    return nonLatinPattern.test(text);
}

module.exports.baseLocale = "en"
module.exports.missingKeys = []
i18n.configure({
    directory: path.join(__dirname, '../../locales'),
    defaultLocale: this.baseLocale,
    extension: '.yaml',
    updateFiles: false,
    parser: YAML,
    missingKeyFn: function (locale, value) {
        module.exports.missingKeys.push(
            {
                locale: locale,
                key: value
            }
        )
        return value
    }
})

module.exports.locales = i18n.getLocales()

// TODO: Generate keys from the base language...
const BaseLocaleKeys = Object.keys(i18n.getCatalog(this.baseLocale))

// const translations = i18n.__l(baseLocale)

BaseLocaleKeys.forEach(baseLocaleKey => {
    // Check all the base keys so we know if all the locales support this key...
    i18n.__h(baseLocaleKey)
})

module.exports.romanize = (text) => {
    return needsRomanization(text)  ? transliterate(text) : text;
}

module.exports.getText = (locale, key, substitution = null) => {
    if (BaseLocaleKeys.includes(key)) {
        // Check if substitions need to be made...
        return i18n.__(
            {
                phrase: key,
                locale: locale
            }, 
            substitution
        );
    } else {
        // User requested a phrase we don't know
        return `+404-${key}-${locale}`
    }
    
}