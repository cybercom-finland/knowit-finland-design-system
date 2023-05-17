import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { HelperText } from './HelperText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/HelperText',
  component: HelperText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<typeof HelperText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof HelperText> = (args) => <HelperText {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Default',
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
Disabled.parameters = {
  a11y: {
    config: {
      // Element has disabled attribute for screen readers, so contrast can be ignored
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  children: 'With error',
  error: true,
};
