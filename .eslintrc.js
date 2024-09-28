module.exports = {
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "universe/shared/typescript-analysis",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    files: ["*.ts", "*.tsx", "*.d.ts"],
    project: "./tsconfig.json",
  },
  plugins: ["typescript-sort-keys", "prettier"],
  rules: {
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    "no-void": ["error", { allowAsStatement: true }],
    "prettier/prettier": "error",
  },
};
