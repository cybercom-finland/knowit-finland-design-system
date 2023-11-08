import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Input } from './Input';
import { MdLock } from 'react-icons/md';
import { pxToRem } from '../../shared';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    variant: 'outlined',
    placeholder: 'Default input',
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    error: false,
    readOnly: false,
    required: false,
    type: 'text',
    style: {
      width: pxToRem(300),
    },
  },
  argTypes: {
    value: { control: 'text' },
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
export default meta;

type Story = StoryObj<typeof Input>;

/**
 * Example of Outlined variant
 */
export const Outlined: Story = {};

/**
 * Error state example
 */
export const OutlinedError: Story = {
  args: {
    error: true,
  },
};

/**
 * End icon example
 */
export const OutlinedEndIcon: Story = {
  args: {
    endIcon: <MdLock size={pxToRem(24)} />,
  },
};

/**
 * Interaction fill content test
 */
export const OutlinedWithContent: Story = {
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('textbox');
    await userEvent.type(input, 'Hello Knowit!');
    await expect(input).toHaveValue('Hello Knowit!');
  },
};

/**
 * Example of required field
 */
export const OutlinedRequired: Story = {
  args: {
    required: true,
  },
};

/**
 * Example of Filled variant
 */
export const Filled: Story = {
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
