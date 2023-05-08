import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Dropdown, DropdownOption } from './Dropdown';
import { MdInfo } from 'react-icons/md';
import { pxToRem } from 'shared';

const TemplateOptions: DropdownOption[] = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    variant: 'outlined',
    placeholder: 'Default Dropdown',
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    error: false,
    width: 300,
    options: TemplateOptions,
  },
  decorators: [withDesign],
} as Meta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Dropdown> = (args) => {
  const [current, setCurrent] = useState<number | undefined>(undefined);
  const { options, ...props } = args;

  return (
    <Dropdown
      {...props}
      options={options}
      value={current}
      onChange={(e) => setCurrent(Number(e.target.value))}
    />
  );
};

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
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1416-80014&t=jaciSdrjiv4kZ1qN-4',
    },
    {
      name: 'dark',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1416-82426&t=jaciSdrjiv4kZ1qN-4',
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
  endIcon: <MdInfo size={pxToRem(24)} />,
};

/**
 * Filled
 */
export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

Filled.parameters = {
  design: [
    {
      name: 'light',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=691-10867&t=jaciSdrjiv4kZ1qN-4',
    },
    {
      name: 'dark',
      type: 'figma',
      url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1416-77602&t=jaciSdrjiv4kZ1qN-4',
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
  endIcon: <MdInfo size={pxToRem(24)} />,
};

FilledEndIcon.parameters = Filled.parameters;
