import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import tailwindcss from "eslint-plugin-tailwindcss";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextVitals,
  ...tailwindcss.configs["flat/recommended"],
  prettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
