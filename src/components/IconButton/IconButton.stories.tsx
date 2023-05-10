import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { IconButton } from './IconButton';
import { MdAdd } from 'react-icons/md';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    size: 'medium',
    disabled: false,
    'aria-label': 'Add descriptive text for action',
  },
  decorators: [withDesign],
} as Meta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

/**
 * Default
 */
export const Default = Template.bind({});
Default.args = {
  children: <MdAdd />,
};

Default.parameters = {
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
};

/**
 * Large
 */
export const Large = Template.bind({});

Large.args = {
  size: 'large',
  children: <MdAdd />,
};

Large.parameters = Default.parameters;

/**
 * Disabled
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: <MdAdd />,
};

Disabled.parameters = Default.parameters;

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
  expect(canvas.getByRole('button')).toBeDisabled();
};

/**
 * Button clicked
 */
export const ButtonClicked = Template.bind({});
ButtonClicked.args = {
  onClick: () => {
    alert('Button clicked');
  },
};

ButtonClicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};