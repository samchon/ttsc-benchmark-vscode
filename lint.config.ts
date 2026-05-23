import type { ITtscLintConfig } from "@ttsc/lint";

export default {
  files: ["src/**/*.ts"],
  ignores: ["**/*.d.ts"],
  format: {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    trailingComma: "all",
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    eqeqeq: "error",
    "object-shorthand": "error",
    "no-useless-rename": "error",
    "prefer-as-const": "error",
    "prefer-namespace-keyword": "error",
    // Disable format/print-width: its line-breaking decisions diverge from
    // prettier 3 on multi-arg call boundary cases (e.g. an 80-column call
    // that prettier keeps inline but ttsc-lint re-breaks across 4-5 lines).
    // The two branches must hold byte-identical sources, so we drop the
    // rule that disagrees with prettier.
    "format/print-width": "off",
  },
} satisfies ITtscLintConfig;
