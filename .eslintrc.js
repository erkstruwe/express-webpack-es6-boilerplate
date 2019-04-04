module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jasmine": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2018,
    },
    "plugins": [
        "jasmine",
    ],
    "rules": {
        "indent": [
            "error",
            4,
        ],
        "quotes": [
            "error",
            "double",
        ],
        "semi": [
            "error",
            "never",
        ],
    },
    "overrides": [
        {
            files: ["server/**/*"],
            rules: {
                "no-console": 0,
            },
        },
    ],
}
