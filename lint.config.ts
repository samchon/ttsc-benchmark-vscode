import type { ITtscLintConfig } from "@ttsc/lint";

export default {
  files: ["src/**/*.ts"],
  // Also list `**/*.json` so the format command's `fileIsIgnoredByEntry`
  // path sees the explicit ignore. The format-rule upgrade in
  // `formatCommandResolver.ResolveRules` only consults `ignores`, not
  // `files`, so a JSON file pulled into the program by
  // `resolveJsonModule` (e.g. `extensions/theme-defaults/themes/*.json`
  // imported from `src/vs/workbench/test/browser/componentFixtures/
  // fixtureUtils.ts`) would otherwise be reformatted with TypeScript
  // rules — `trailingComma: "all"` turns the trailing `}` into `};`,
  // which then makes the next `ttsc -p src/tsconfig.json --noEmit` fail
  // on those JSON files.
  ignores: ["**/*.d.ts", "**/*.json"],
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
