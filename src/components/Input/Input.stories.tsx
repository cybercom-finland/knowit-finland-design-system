import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Input } from './Input';
import { MdLock } from 'react-icons/md';
import { pxToRem } from '../../shared';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    placeholder: 'Default input',
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    error: false,
    readOnly: false,
    required: false,
    width: 300,
    type: 'text',
  },
  argTypes: {
    value: { control: 'text' },
  },
  decorators: [withDesign],
} as Meta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

/**
 * Outlined
 */
export const Outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  variant: 'outlined',
};

Outlined.parameters = {
  design: [
    {
      name: 'light',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1406-69891&t=jaciSdrjiv4kZ1qN-4',
    },
    {
      name: 'dark',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1406-73930&t=jaciSdrjiv4kZ1qN-4',
    },
  ],
};

/**
 * Outlined error
 */
export const OutlinedError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinedError.args = {
  variant: 'outlined',
  error: true,
};

OutlinedError.parameters = Outlined.parameters;

/**
 * Outlined end icon
 */
export const OutlinedEndIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinedEndIcon.args = {
  variant: 'outlined',
  endIcon: <MdLock size={pxToRem(24)} />,
};

OutlinedEndIcon.parameters = Outlined.parameters;

/**
 * OutlinedWithInput
 */
export const OutlinedWithContent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinedWithContent.args = {
  variant: 'outlined',
};

OutlinedWithContent.parameters = Outlined.parameters;

OutlinedWithContent.play = async ({ canvasElement }) => {
  const input = within(canvasElement).getByRole('textbox');
  userEvent.type(input, 'Hello Knowit!');
  expect(input).toHaveValue('Hello Knowit!');
};

/**
 * Outlined required
 */
export const OutlinedRequired = Template.bind({});
OutlinedRequired.args = {
  variant: 'outlined',
  required: true,
};

OutlinedRequired.parameters = Outlined.parameters;

/**
 * Filled
 */
export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  variant: 'filled',
};

Filled.parameters = {
  design: [
    {
      name: 'light',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=401-3597&t=jaciSdrjiv4kZ1qN-4',
    },
    {
      name: 'dark',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1406-73745&t=jaciSdrjiv4kZ1qN-4',
    },
  ],
};

/**
 * Filled error
 */
export const FilledError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FilledError.args = {
  variant: 'filled',
  error: true,
};

FilledError.parameters = Filled.parameters;

/**
 * Filled end icon
 */
export const FilledEndIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FilledEndIcon.args = {
  variant: 'filled',
  endIcon: <MdLock size={pxToRem(24)} />,
};

FilledEndIcon.parameters = Filled.parameters;

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
