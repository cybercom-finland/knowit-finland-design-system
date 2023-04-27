import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { InputLabel } from './InputLabel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/InputLabel',
  component: InputLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<typeof InputLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InputLabel> = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Default Input label',
};

export const Bold = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bold.args = {
  children: 'Bold label',
  bold: true,
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  children: 'Label for disabled input',
  disabled: true,
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  children: 'Label for input with error',
  error: true,
};
