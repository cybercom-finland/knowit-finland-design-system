import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';

import { Checkbox } from './Checkbox';
import { MdAdd } from 'react-icons/md';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: true },
  },
  args: {
    label: 'Checkbox',
    disabled: false,
    indeterminate: false,
    checked: false,
  },
  decorators: [withDesign],
} as Meta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

/**
 * Outlined
 */
export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

Outlined.parameters = {
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
};

/**
 * Outlined with end icon
 */
export const OutlinedWithEndIcon = Template.bind({});
OutlinedWithEndIcon.args = {
  variant: 'outlined',
  endIcon: <MdAdd />,
};

OutlinedWithEndIcon.parameters = Outlined.parameters;

/**
 * Filled
 */
export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  variant: 'filled',
};

Filled.parameters = {
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
};

/**
 * Text
 */
export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

Text.parameters = {
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
};

/**
 * Outlined checkbox clicked
 */
export const OutlinedClicked = Template.bind({});
OutlinedClicked.args = {
  variant: 'outlined',
  onClick: jest.fn(),
};

OutlinedClicked.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('checkbox'));
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};

/**
 * Outlined checkbox disabled
 */
export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  variant: 'outlined',
  disabled: true,
};

OutlinedDisabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('checkbox'));
  expect(canvas.getByRole('checkbox')).toBeDisabled();
};

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
