import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

import { IconButton } from './IconButton';
import { MdAdd } from 'react-icons/md';

const meta: Meta<typeof IconButton> = { component: IconButton };
export default meta;

type Story = StoryObj<typeof IconButton>;

/**
 * Basic example of IconButton
 */
export const BasicExample: Story = {
  argTypes: {
    onClick: { action: true },
  },
  args: {
    size: 'medium',
    disabled: false,
    'aria-label': 'Add descriptive text for action',
    children: <MdAdd />,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1623-20367&t=Iduz1FwfMKfnxndl-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1623-20368&t=Iduz1FwfMKfnxndl-4',
      },
    ],
  },
};

/**
 * Example of Large variant
 */
export const Large: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    size: 'large',
  },
};

/**
 * onClick interaction test
 */
export const ButtonClicked: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
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
 * Example of disabled button
 */
export const Disabled: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
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

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
    expect(canvas.getByRole('button')).toBeDisabled();
  },
};
