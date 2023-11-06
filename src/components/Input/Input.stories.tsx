import React from 'react';
import { Meta } from '@storybook/react';

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
} as Meta<typeof Input>;

export const BasicExample = {};

export const Outlined = {
  args: {
    variant: 'outlined',
  },

  parameters: {
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
  },
};

export const OutlinedError = {
  args: {
    variant: 'outlined',
    error: true,
  },

  parameters: Outlined.parameters,
};

export const OutlinedEndIcon = {
  args: {
    variant: 'outlined',
    endIcon: <MdLock size={pxToRem(24)} />,
  },

  parameters: Outlined.parameters,
};

export const OutlinedWithContent = {
  args: {
    variant: 'outlined',
  },

  parameters: Outlined.parameters,

  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox');
    await userEvent.type(input, 'Hello Knowit!');
    await expect(input).toHaveValue('Hello Knowit!');
  },
};

export const OutlinedRequired = {
  args: {
    variant: 'outlined',
    required: true,
  },

  parameters: Outlined.parameters,
};

export const Filled = {
  args: {
    variant: 'filled',
  },

  parameters: {
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
  },
};

export const FilledError = {
  args: {
    variant: 'filled',
    error: true,
  },

  parameters: Filled.parameters,
};

export const FilledEndIcon = {
  args: {
    variant: 'filled',
    endIcon: <MdLock size={pxToRem(24)} />,
  },

  parameters: Filled.parameters,
};
