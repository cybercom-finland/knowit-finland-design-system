// .storybook/test-runner.ts

import type { TestRunnerConfig } from '@storybook/test-runner';

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
    // Add your configuration here.
  },
  /* Hook to execute after a story is rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postRender(page, context) {
    // Add your configuration here.
  },
};

module.exports = config;
