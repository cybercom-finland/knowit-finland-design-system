import { Meta, StoryObj } from '@storybook/react';

import { HelperText } from './HelperText';

const meta: Meta<typeof HelperText> = {
  component: HelperText,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Default',
    disabled: false,
    error: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1786-46172&t=pA0zQRDio9CNoA6H-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1786-46189&t=pA0zQRDio9CNoA6H-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof HelperText>;

/**
 * Basic example of HelperText
 */
export const BasicExample: Story = {};

/**
 * Disabled HelperText
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled',
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
 * HelperText with error state
 */
export const Error: Story = {
  args: {
    children: 'With error',
    error: true,
  },
};

/**
 * HelperText with error and disabled state
 */
export const ErrorDisabled: Story = {
  args: {
    children: 'With error',
    error: true,
    disabled: true,
  },
};
