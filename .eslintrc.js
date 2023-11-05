module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", "/dist/**"],
  rules: {
    // "prettier/prettier": [ // from fastify // ??
    //   "error",
    //   {
    //     "printWidth": 120,
    //     "tabWidth": 2,
    //     "semi": false,
    //     "singleQuote": true,
    //     "trailingComma": "none"
    //   },
    //   {
    //     "userPrettierRc": true
    //   }
    // ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-use-before-define": ["warn"],
    "@typescript-eslint/type-annotation-spacing": ["error", { "before": false, "after": true }],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "camelcase": "error",
    "semi": [2, "never"],
    "object-shorthand": ["error", "always"],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "key-spacing": [
      "error",
      {
        "mode": "strict",
        "afterColon": true,
        "beforeColon": false
      }
    ],
    "indent": [
      "error",
      2,
      {
        "FunctionDeclaration": { "parameters": "first" },
        "ImportDeclaration": 1,
        "SwitchCase": 1,
        "ignoredNodes": ["PropertyDefinition"]
      }
    ],
    "no-implicit-coercion": 2,
    "no-nested-ternary": 2,
    "no-var": 2,
    "no-use-before-define": "off",
    "eol-last": ["error", "always"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "space-infix-ops": "error",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "comma-dangle": ["error", "never"],
    "padded-blocks": ["error", "never"]
  },
}
