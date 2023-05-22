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
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
