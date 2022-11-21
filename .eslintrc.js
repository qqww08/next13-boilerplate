module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "prettier",
  ],
  rules: {
    "no-use-before-define": 0,
    "import/prefer-default-export": 0,
    "react/jsx-no-useless-fragment": 0,
    "no-restricted-exports": 0,
    "import/extensions": 0,
    "react/jsx-filename-extension": 0,
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", ["parent", "sibling"], "index", "object"],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
