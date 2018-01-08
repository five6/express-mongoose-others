module.exports = {
    extends: "eslint:recommended",
    env: {
        browser: true,
        jquery: true,
        es6: false,
    },
    globals: {
        "$": false,
        EventBus : false,
        Vue : false,
        T : false,
        "_" : false
    },
    rules:{
        "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }]
    }
};