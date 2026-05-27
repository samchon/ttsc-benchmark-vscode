import type { ITtscLintConfig } from "@ttsc/lint";

// Mirrors the legacy ESLint rule list (eslint.config.js → `rules`) for an
// apples-to-apples lint comparison. Severities match legacy ("warn") so the
// source remains clean — the legacy benchmark runs with `--quiet`, suppressing
// warnings; ttsc-lint with all rules at "warn" likewise measures full
// rule-walk time without triggering an early exit on violations.
//
// Rules excluded because @ttsc/lint does not ship them as built-ins:
// - no-buffer-constructor (Node-specific, not in our registry)
// - no-duplicate-imports (handled by typescript/consistent-type-imports
//   semantics rather than a standalone rule)
// - no-restricted-globals (option-heavy, no general default)
// - local/* (project-specific eslint-plugin-local rules)
export default {
  format: {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    trailingComma: "all",
  },
  rules: {
    eqeqeq: "warn",
    "prefer-const": "warn",
    "no-caller": "warn",
    "no-case-declarations": "warn",
    "no-debugger": "warn",
    "no-duplicate-case": "warn",
    "no-eval": "warn",
    "no-async-promise-executor": "warn",
    "no-new-wrappers": "warn",
    "no-sparse-arrays": "warn",
    "no-throw-literal": "warn",
    "no-unsafe-finally": "warn",
    "no-unused-labels": "warn",
    "no-misleading-character-class": "warn",
    "no-var": "warn",
    // Disable format/print-width — its line-breaking decisions diverge from
    // prettier 3 on multi-arg call boundary cases. The two branches must hold
    // byte-identical sources, so we drop the format rule that disagrees.
    "format/print-width": "off",
  },
} satisfies ITtscLintConfig;
