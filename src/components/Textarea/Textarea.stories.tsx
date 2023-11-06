import React from 'react';
import { Meta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Textarea } from './Textarea';
import { MdLock } from 'react-icons/md';
import { pxToRem } from '../../shared';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    placeholder: 'Default textarea',
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    error: false,
    readOnly: false,
    required: false,
  },
  argTypes: {
    value: { control: 'text' },
  },
} as Meta<typeof Textarea>;

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
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1533-88672&t=BUE6Y8Y5BWD4rDGB-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1533-90178&t=BUE6Y8Y5BWD4rDGB-4',
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
    const textarea = within(canvasElement).getByRole('textbox');
    await userEvent.type(textarea, 'Hello Knowit!');
    await expect(textarea).toHaveValue('Hello Knowit!');
  },
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
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=875-15871&t=BUE6Y8Y5BWD4rDGB-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1533-90049&t=BUE6Y8Y5BWD4rDGB-4',
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
