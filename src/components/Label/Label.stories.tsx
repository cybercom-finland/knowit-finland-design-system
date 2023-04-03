import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from './Label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Default label',
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
