import React from "react";
import { GlobalStyle } from "../src/shared/global";
// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // Optional selector to inspect
    element: '#root',
    config: {
      rules: [
        {
          // The autocomplete rule will not run based on the CSS selector provided
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // Setting the enabled option to false will disable checks for this particular rule on all stories.
          id: 'image-alt',
          enabled: false,
        },
      ],
    },
    // Axe's options parameter
    options: {},
    // Optional flag to prevent the automatic check
    manual: true,
  },
}