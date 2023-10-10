module.exports = {
    parser: "@babel/eslint-parser",
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        // js
        "eslint:recommended",
        // vue
       // "plugin:vue/vue3-essential", // Lv1
        "plugin:vue/vue3-strongly-recommended", //Lv2
        //"plugin:vue/vue3-recommended", //Lv3

    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "parser": "@babel/eslint-parser",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
