import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  variant: 'filled',
  text: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  text: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  text: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Button',
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'Button',
};
