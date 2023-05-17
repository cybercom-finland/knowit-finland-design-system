import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Label } from './Label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    disabled: false,
    error: false,
    required: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1732-24287&t=l6zGzl4XQt6kgMfa-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1737-24334&t=l6zGzl4XQt6kgMfa-4',
      },
    ],
  },
} as Meta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

/**
 * Default
 */
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Default label',
};

/**
 * Disabled
 */
export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  children: 'Label for disabled input',
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

/**
 * Error
 */
export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  children: 'Label for input with error',
  error: true,
};

/**
 * Required
 */
export const Required = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Required.args = {
  children: 'Label for input with required',
  required: true,
};
