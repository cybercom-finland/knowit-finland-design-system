import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DatePicker } from './DatePicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: true },
  },
  args: {
    label: 'Label',
    width: 300,
    placeholder: 'Default input',
    helperText: 'Helper text',
    variant: 'outlined',
    disabled: false,
    error: false,
    readOnly: false,
    required: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=856%3A12316&t=yxcfGeLv7tAJWSzy-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A86357&t=yxcfGeLv7tAJWSzy-1',
      },
    ],
  },
} as Meta<typeof DatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DatePicker> = (args) => <DatePicker {...args} />;

/**
 * Outlined
 */
export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

/**
 * Filled
 */
export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  variant: 'filled',
};

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
