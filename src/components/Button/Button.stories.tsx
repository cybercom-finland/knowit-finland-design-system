import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

import { Button } from './Button';
import { MdAdd } from 'react-icons/md';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: { action: true },
  },
  args: {
    variant: 'filled',
    label: 'Button',
    size: 'medium',
    disabled: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1356-58870&t=jaciSdrjiv4kZ1qN-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1356-61594&t=jaciSdrjiv4kZ1qN-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Basic example of a filled Button component
 */
export const Filled: Story = {};

/**
 * Outlined Button example
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1356-56662&t=jaciSdrjiv4kZ1qN-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1356-61336&t=jaciSdrjiv4kZ1qN-4',
      },
    ],
  },
};

/**
 * Outlined Button with end icon
 */
export const OutlinedWithEndIcon: Story = {
  args: {
    variant: 'outlined',
    endIcon: <MdAdd />,
  },
};

/**
 * Text Button example
 */
export const Text: Story = {
  args: {
    variant: 'text',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=329-2590&t=jaciSdrjiv4kZ1qN-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1356-61078&t=jaciSdrjiv4kZ1qN-4',
      },
    ],
  },
};

/**
 * Click interaction test
 */
export const OutlinedClicked: Story = {
  args: {
    variant: 'outlined',
    onClick: jest.fn(),
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};

/**
 * Disabled button with interaction test
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
    expect(canvas.getByRole('button')).toBeDisabled();
  },
};
