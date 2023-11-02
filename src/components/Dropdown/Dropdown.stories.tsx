import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Dropdown, DropdownOption } from './Dropdown';
import { MdInfo } from 'react-icons/md';
import { pxToRem } from '../../shared';

const TemplateOptions: DropdownOption[] = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/DropdownMenu',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    placeholder: 'Default Dropdown menu',
    label: 'Label',
    helperText: 'Helper text',
    error: false,
    required: false,
    width: 300,
    options: TemplateOptions,
  },
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

export const BasicExample = {};

export const Outlined = {
  render: Template,

  args: {
    variant: 'outlined',
  },

  parameters: {
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
  },
};

export const OutlinedError = {
  render: Template,

  args: {
    variant: 'outlined',
    error: true,
  },

  parameters: Outlined.parameters,
};

export const OutlinedEndIcon = {
  render: Template,

  args: {
    variant: 'outlined',
    endIcon: <MdInfo size={pxToRem(24)} />,
  },
};

export const Filled = {
  render: Template,

  args: {
    variant: 'filled',
  },

  parameters: {
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
  },
};

export const FilledError = {
  render: Template,

  args: {
    variant: 'filled',
    error: true,
  },

  parameters: Filled.parameters,
};

export const FilledEndIcon = {
  render: Template,

  args: {
    variant: 'filled',
    endIcon: <MdInfo size={pxToRem(24)} />,
  },

  parameters: Filled.parameters,
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true,
  },

  parameters: {
    a11y: {
      config: {
        // Element has disabled attribute for screen readers, so contrast can be ignored
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Component should be disabled
    await userEvent.click(canvas.getByTestId('dropdown'));
    expect(canvas.getByTestId('dropdown')).toBeDisabled();
  },
};

export const ChangeValueTest = {
  render: Template,

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Component should be enabled
    await userEvent.click(canvas.getByTestId('dropdown'));
    expect(canvas.getByTestId('dropdown')).toBeEnabled;

    // Try switching between options and see that the displayed value is reflected correctly
    fireEvent.change(canvas.getByTestId('dropdown'), { target: { value: 2 } });
    await userEvent.click(canvas.getByDisplayValue('Two'));
    fireEvent.change(canvas.getByTestId('dropdown'), { target: { value: 1 } });
    await userEvent.click(canvas.getByDisplayValue('One'));
  },
};
