import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    onChange: jest.fn(),
    checked: false,
    label: 'Label',
    disabled: false,
    indeterminate: false,
    size: 'large',
    required: false,
    value: 'Example value',
    helperText: '',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: true },
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=799%3A13731&t=aZ3vwdu5JAJD0sQm-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A85558&t=aZ3vwdu5JAJD0sQm-1',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

/**
 * Basic example of a Checkbokx
 */
export const BasicExample: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the checkbox is enabled as it should be
    await waitFor(() => expect(canvas.getByTestId('checkbox')).toBeEnabled());

    // Click the checkbox to change state and test that the onChange event is working
    await userEvent.click(canvas.getByTestId('checkbox'));
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
  },
};

/**
 * Disabled checkbox
 */
export const Disabled: Story = {
  args: {
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

    // Check that the checkbox is disabled as it should be
    await userEvent.click(canvas.getByTestId('checkbox'));
    await waitFor(() => expect(canvas.getByTestId('checkbox')).toBeDisabled);
  },
};

/**
 * Small Checkbox
 */
export const Small = {
  args: {
    size: 'small',
  },
};

/**
 * With helper text
 */
export const HelperText = {
  args: {
    helperText: 'Helper text',
  },
};
