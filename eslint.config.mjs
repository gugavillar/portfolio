import { fixupConfigRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/prismicio-types.d.ts"],
}, ...fixupConfigRules(compat.extends(
    "@rocketseat/eslint-config/next",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "next/core-web-vitals",
)), {
    languageOptions: {
        globals: {
            JSX: true,
        },
    },

    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",

        "import/order": ["error", {
            groups: [
                "builtin",
                "external",
                "internal",
                ["parent", "sibling"],
                ["object", "type"],
                "index",
            ],

            pathGroups: [{
                pattern: "{react,react-dom/**,next,next/**}",
                group: "external",
                position: "before",
            }, {
                pattern: "{@/components,@/components/Icons}",
                group: "internal",
                position: "before",
            }, {
                pattern: "{@prismicio/**,@prismicio/*,@/prismicio,@/prismic-types}",
                group: "external",
                position: "before",
            }],

            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "always",

            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        }],
    },
}];