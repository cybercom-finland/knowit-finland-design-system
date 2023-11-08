import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    disabled: false,
    error: false,
    required: false,
    children: 'Default label',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1732-24287&t=l6zGzl4XQt6kgMfa-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1737-24334&t=l6zGzl4XQt6kgMfa-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

/**
 * Basics example of Label
 */
export const BasicExample: Story = {};

/**
 * Disabled Label
 */
export const Disabled: Story = {
  args: {
    children: 'Label for disabled input',
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
};

/**
 * Label error state
 */
export const Error: Story = {
  args: {
    children: 'Label for input with error',
    error: true,
  },
};

/**
 * Label with error and disabled states
 */
export const ErrorDisabled: Story = {
  args: {
    children: 'Label for input with error',
    error: true,
    disabled: true,
  },
};

/**
 * Required Label
 */
export const Required: Story = {
  args: {
    children: 'Label for input with required',
    required: true,
  },
};
