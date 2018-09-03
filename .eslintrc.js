module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "es6": true
    },
    "ecmaFeatures": {
        "modules": true
    },
    "settings": {
        "react": {
        "pragma": "React",
        "version": "15.0"
        }
    },
    "rules": {
        "indent": ["error", 4],
        "id-length": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4]
    }
};
