module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "node"],
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "node",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    // Add your own rules here
  },
};
