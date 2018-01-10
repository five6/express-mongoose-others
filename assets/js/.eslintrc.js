module.exports = {
    extends: "eslint:recommended",
    env: {
        browser: true,
        jquery: true,
        es6: false,
    },
    globals: {
        "$": false,
        "QC":false,
        WB2:false,
        EventBus : false,
        Vue : false,
        T : false,
        "_" : false
    },
    rules:{
        "no-console": "off",
        "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }]
    }
};