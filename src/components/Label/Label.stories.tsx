import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = { component: Label };
export default meta;

type Story = StoryObj<typeof Label>;

/**
 * Basics example of Label
 */
export const BasicExample: Story = {
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

/**
 * Disabled Label
 */
export const Disabled: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    children: 'Label for disabled input',
    disabled: true,
  },

  parameters: {
    ...BasicExample.parameters,
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
  ...BasicExample,
  args: {
    ...BasicExample.args,
    children: 'Label for input with error',
    error: true,
  },
};

/**
 * Label with error and disabled states
 */
export const ErrorDisabled: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    children: 'Label for input with error',
    error: true,
    disabled: true,
  },
};

/**
 * Required Label
 */
export const Required: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    children: 'Label for input with required',
    required: true,
  },
};
