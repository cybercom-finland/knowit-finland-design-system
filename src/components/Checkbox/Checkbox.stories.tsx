import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: true },
  },
  args: {
    checked: false,
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    indeterminate: false,
    size: 'large',
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
} as Meta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
DefaultVariant.args = {
  onChange: jest.fn(),
};

DefaultVariant.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  // Check that the checkbox is enabled as it should be
  await waitFor(() => expect(canvas.getByTestId('checkbox')).toBeEnabled());

  // Click the checkbox to change state and test that the onChange event is working
  await userEvent.click(canvas.getByTestId('checkbox'));
  await waitFor(() => expect(args.onChange).toHaveBeenCalled());
};

/**
 * Disabled
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  a11y: {
    config: {
      // Element has disabled attribute for screen readers, so contrast can be ignored
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Check that the checkbox is disabled as it should be
  await userEvent.click(canvas.getByTestId('checkbox'));
  await waitFor(() => expect(canvas.getByTestId('checkbox')).toBeDisabled);
};

/**
 * Small checkbox
 */
export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

/**
 * With no helper text
 */
export const NoHelperText = Template.bind({});
NoHelperText.args = {
  helperText: undefined,
};
