import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            "react-hooks/exhaustive-deps": "off",
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        // Packages `react` related packages come first.
                        ["^react", "^\\w", "^@hookform", "^@reduxjs"],
                        // npm packages
                        // Anything that starts with a letter (or digit or underscore), or `@` followed by a letter.
                        // ['^\\w'],
                        // Internal packages.
                        ["^@(/.*|$)"],
                        ["^@/.*/store(/.*|$)"],
                        ["^@/.*/ui(/.*|$)"],
                        ["^@/.*/lib(/.*|$)"],
                        ["^@/.*/utils(/.*|$)"],
                        ["^@/.*/hooks(/.*|$)"],
                        ["^@/.*/services(/.*|$)"],
                        ["^@/.*/providers(/.*|$)"],
                        ["^@/.*/configs(/.*|$)"],
                        ["^@/.*/types(/.*|$)"],
                        ["^@/.*/consts(/.*|$)"],
                        ["^@/.*/api(/.*|$)"],
                        ["^@/.*/components(/.*|$)"],
                        ["^@/.*/assets(/.*|$)"],
                        // public | types | components | global styles (assets)
                        ["^/public(/.*|$)"],
                        // Side effect imports.
                        ["^\\u0000"],
                        // Parent imports. Put `..` last.
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        // Other relative imports. Put same-folder imports and `.` last.
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        // Style imports.
                        ["^.+\\.?(scss)$"],
                    ],
                },
            ],
        },
    },
]);
