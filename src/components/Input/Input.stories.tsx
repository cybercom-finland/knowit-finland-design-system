import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    variant: 'outlined',
    placeholder: 'Default input',
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    error: false,
    width: 300,
  },
  argTypes: {
    value: { control: 'text' },
  },
  decorators: [withDesign],
} as Meta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

/**
 * Outlined
 */
export const Outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  variant: 'outlined',
};

Outlined.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16258&t=mzQvfJTebebtBWNj-4',
  },
};

/**
 * Outlined error
 */
export const OutlinedError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinedError.args = {
  variant: 'outlined',
  error: true,
};

OutlinedError.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16259&t=mzQvfJTebebtBWNj-4',
  },
};

/**
 * Outlined end icon
 */
export const OutlinedEndIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinedEndIcon.args = {
  variant: 'outlined',
};

OutlinedEndIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16262&t=mzQvfJTebebtBWNj-4',
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
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16256&t=mzQvfJTebebtBWNj-4',
  },
};

/**
 * Filled error
 */
export const FilledError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FilledError.args = {
  variant: 'filled',
  error: true,
};

FilledError.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16260&t=mzQvfJTebebtBWNj-4',
  },
};

/**
 * Filled end icon
 */
export const FilledEndIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FilledEndIcon.args = {
  variant: 'filled',
  error: true,
};

FilledEndIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16263&t=mzQvfJTebebtBWNj-4',
  },
};

/**
 * OutlinedWithInput
 */
export const OutlinedWithContent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinedWithContent.args = {
  variant: 'outlined',
};

OutlinedWithContent.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16258&t=mzQvfJTebebtBWNj-4',
  },
};

OutlinedWithContent.play = async ({ canvasElement }) => {
  const input = within(canvasElement).getByRole('textbox');
  userEvent.type(input, 'Hello Knowit!');
  expect(input).toHaveValue('Hello Knowit!');
};
