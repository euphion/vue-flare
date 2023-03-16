module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    quotes: ["error", "single"],
    semi: ["error", "never"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-useless-catch": ["warn"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-empty-interface": "off",
    "vue/component-definition-name-casing": ["error", "kebab-case"],
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-unused-components": ["warn"],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3
      },
      "multiline": {
        "max": 1
      }
    }]
  }
}
