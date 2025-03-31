import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      ...require("eslint-config-prettier").rules, // Disable conflicting ESLint rules
      "prettier/prettier": "error", // Enforce Prettier formatting
    },
  },
];

export default eslintConfig;