const i18nUtil = require("./lib/i18n-util")

module.exports.getText = i18nUtil.getText

console.log("Basic: ", this.getText(
    "en",
    "lowBalancePleaseIncrease",
    {
        balance: 100,
        currencyTicker: "ZAR",
        requestedAmount: 110
    }
    
))