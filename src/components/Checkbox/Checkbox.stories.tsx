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
    label: 'Value',
    helperText: 'Helper text',
    disabled: false,
    indeterminate: false,
    size: 'large',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=799%3A13731&t=aZ3vwdu5JAJD0sQm-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A85558&t=aZ3vwdu5JAJD0sQm-1',
      },
    ],
  },
  decorators: [withDesign],
} as Meta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});

/**
 * Disabled
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

/**
 * Small checkbox
 */
export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
/**
 * With no helper text
 */
export const NoHelperText = Template.bind({});
NoHelperText.args = {
  helperText: undefined,
};