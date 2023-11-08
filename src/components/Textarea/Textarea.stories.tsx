import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Textarea } from './Textarea';
import { MdLock } from 'react-icons/md';
import { pxToRem } from '../../shared';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  args: {
    variant: 'outlined',
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
export default meta;

type Story = StoryObj<typeof Textarea>;

/**
 * Outlined variant of Textarea
 */
export const Outlined: Story = {};

/**
 * Textarea error state
 */
export const OutlinedError: Story = {
  args: {
    error: true,
  },
};

/**
 * Textarea with end icon
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
    const textarea = within(canvasElement).getByRole('textbox');
    await userEvent.type(textarea, 'Hello Knowit!');
    await expect(textarea).toHaveValue('Hello Knowit!');
  },
};

/**
 * Filled variant of Textarea
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
