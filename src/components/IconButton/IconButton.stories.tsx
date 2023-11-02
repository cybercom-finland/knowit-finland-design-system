import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

import { IconButton } from './IconButton';
import { MdAdd } from 'react-icons/md';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: true },
  },
  args: {
    size: 'medium',
    disabled: false,
    'aria-label': 'Add descriptive text for action',
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
} as Meta<typeof IconButton>;

export const BasicExample = {
  args: {
    children: <MdAdd />,
  },
};

export const Large = {
  args: {
    size: 'large',
    children: <MdAdd />,
  },
};

export const ButtonClicked = {
  args: {
    children: <MdAdd />,
    onClick: jest.fn(),
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: <MdAdd />,
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
