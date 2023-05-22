import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Checkbox } from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: true },
  },
  args: {
    checked: false,
    label: 'Checkbox',
    helperText: 'helper',
    disabled: false,
    indeterminate: false,
    size: 'large',
  },
  decorators: [withDesign],
} as Meta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

/**
 * Disabled
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  design: [
    {
      name: 'light',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=802%3A13566&t=Td7pgQM4IO7fZ5mL-1',
    },
    {
      name: 'dark',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A85609&t=Td7pgQM4IO7fZ5mL-1',
    },
  ],
};

/**
 * Small checkbox
 */
export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

Small.parameters = {
  design: [
    {
      name: 'light',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=802%3A13043&t=Td7pgQM4IO7fZ5mL-1',
    },
    {
      name: 'dark',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A85628&t=Td7pgQM4IO7fZ5mL-1',
    },
  ],
};

/**
 * With no helper text
 */
export const NoHelperText = Template.bind({});
NoHelperText.args = {
  helperText: undefined,
};

NoHelperText.parameters = {
  design: [
    {
      name: 'light',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=801%3A10641&t=Td7pgQM4IO7fZ5mL-1',
    },
    {
      name: 'dark',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A85644&t=Td7pgQM4IO7fZ5mL-1',
    },
  ],
};

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
