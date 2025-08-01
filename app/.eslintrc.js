// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "simple-import-sort",
    "@typescript-eslint",
    "eslint-plugin-react-compiler",
    "deprecate",
  ],
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    "react-compiler/react-compiler": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-console": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w", "^@emotion"],
          // Arize packages.
          ["^(@arizeai)(/.*|$)"],
          // internal packages.
          ["^(@phoenix)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"],
        ],
      },
    ],
    "deprecate/import": [
      "error",
      {
        name: "Accordion",
        module: "@arizeai/components",
        use: "import { DisclosureGroup, Disclosure, DisclosureTrigger, DisclosurePanel } from '@phoenix/components'",
      },
      {
        name: "Button",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Icon",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Icons",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "View",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Flex",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Text",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Heading",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "theme",
        module: "@arizeai/components",
      },
      {
        name: "RadioGroup",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Radio",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "TextField",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "TextArea",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Slider",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Label",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Counter",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Tabs",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Alert",
        module: "@arizeai/components",
        use: "@phoenix/components",
      },
      {
        name: "Picker",
        module: "@arizeai/components",
        use: "import { Select, SelectValue, SelectItem } from '@phoenix/components'",
      },
      {
        name: "CompactSearchField",
        module: "@arizeai/components",
        use: "import { SearchField, Input } from '@phoenix/components'",
      },
      {
        name: "Dialog",
        module: "@arizeai/components",
        use: "import { Dialog } from '@phoenix/components'",
      },
      {
        name: "DialogTrigger",
        module: "@arizeai/components",
        use: "import { DialogTrigger } from '@phoenix/components'",
      },
      {
        name: "TooltipTrigger",
        module: "@arizeai/components",
        use: "import { TooltipTrigger } from '@phoenix/components'",
      },
      {
        name: "TriggerWrap",
        module: "@arizeai/components",
        use: "import { TriggerWrap } from '@phoenix/components'",
      },
      {
        name: "HelpTooltip",
        module: "@arizeai/components",
        use: "Tooltip or RichTooltip from @phoenix/components",
      },
      {
        name: "ActionTooltip",
        module: "@arizeai/components",
        use: "Tooltip or RichTooltip from @phoenix/components",
      },
      {
        name: "ProgressCircle",
        module: "@arizeai/components",
        use: "import { ProgressCircle } from '@phoenix/components'",
      },
      {
        name: "DialogContainer",
        module: "@arizeai/components",
        use: "import { DialogContainer } from '@phoenix/components'",
      },
      {
        name: "ProgressBar",
        module: "@arizeai/components",
        use: "import { ProgressBar } from '@phoenix/components'",
      },
      {
        name: "Breadcrumbs",
        module: "@arizeai/components",
        use: "import { Breadcrumbs } from '@phoenix/components'",
      },
      {
        name: "BreadcrumbItem",
        module: "@arizeai/components",
        use: "import { Breadcrumb } from '@phoenix/components'",
      },
      {
        name: "List",
        module: "@arizeai/components",
        use: "import { List } from '@phoenix/components'",
      },
      {
        name: "ListItem",
        module: "@arizeai/components",
        use: "import { ListItem } from '@phoenix/components'",
      },
      {
        name: "Card",
        module: "@arizeai/components",
        use: "import { Card } from '@phoenix/components'",
      },
      {
        name: "EmptyGraphic",
        module: "@arizeai/components",
      },
    ],
    "no-duplicate-imports": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
