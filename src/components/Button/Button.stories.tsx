import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    text: 'Button',
    size: 'medium',
    disabled: false,
  },
  decorators: [withDesign],
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

/**
 * Outlined
 */
export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

Outlined.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16265&t=mzQvfJTebebtBWNj-4',
  },
};

/**
 * Filled
 */
export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  variant: 'filled',
};

Filled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16264&t=mzQvfJTebebtBWNj-4',
  },
};

/**
 * Text
 */
export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

Text.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16266&t=mzQvfJTebebtBWNj-4',
  },
};

/**
 * Outlined button clicked
 */
export const OutlinedButtonClicked = Template.bind({});
OutlinedButtonClicked.args = {
  variant: 'outlined',
  onClick: () => {
    alert('Button clicked');
  },
};

OutlinedButtonClicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

/**
 * Outlined button disabled
 */
export const OutlinedButtonDisabled = Template.bind({});
OutlinedButtonDisabled.args = {
  variant: 'outlined',
  disabled: true,
};

OutlinedButtonDisabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
  expect(canvas.getByRole('button')).toBeDisabled();
};
