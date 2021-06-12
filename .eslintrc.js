module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/jsx-no-duplicate-props': "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/display-name": "off",

    }
};
