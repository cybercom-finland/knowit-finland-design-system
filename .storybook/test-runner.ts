// .storybook/test-runner.ts

import type { TestRunnerConfig } from '@storybook/test-runner';

const { injectAxe, checkA11y } = require('axe-playwright');

const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  /* Hook to execute before a story is rendered.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preRender(page, context) {
    // Automate accessibility tests
    await injectAxe(page);
  },
  /* Hook to execute after a story is rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postRender(page, context) {
    // Automate accessibility tests
    await checkA11y(page, '#storybook-root', {
      axeOptions: {
        rules: {
          // Don't test contrast (accessibility) for elements that correctly have disabled attribute
          'color-contrast': {
            enabled: false,
            selector: '[disabled]',
          },
        },
      },
      verbose: false, // Don't make a lot of lines to console about every successful test
    });
  },
};

module.exports = config;
