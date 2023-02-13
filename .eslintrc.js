module.exports = {
    extends: ['@nuxt/eslint-config'],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': ['error', 'never'],
        'vue/html-indent': ['error', 4],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/max-attributes-per-line': 0,
        'vue/multi-word-component-names': 0,
    },
};
