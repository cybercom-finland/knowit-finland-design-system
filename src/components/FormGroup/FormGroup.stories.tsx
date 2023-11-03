import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormGroup } from './FormGroup';
import { Radio } from '../Radio';

const meta: Meta<typeof FormGroup> = { component: FormGroup };
export default meta;

type Story = StoryObj<typeof FormGroup>;

/**
 * Basic example of Radio group
 */
export const BasicRadioGroup: Story = {
  render: (args) => (
    <FormGroup
      label='label'
      helperText='Helper Text'
      direction={args.direction}
    >
      <Radio label='Label 1' value='value' name='test' />
      <Radio label='Label 2' value='value2' name='test' />
      <Radio label='Label 3' value='valu3' name='test' />
    </FormGroup>
  ),
  args: {
    label: 'Label',
    helperText: 'Helper text',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=863-14347&t=7YcjYbFLEXoGg9Ih-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533-87808&t=7YcjYbFLEXoGg9Ih-4',
      },
    ],
  },
};

/**
 * Vertical Radio group example
 */
export const VerticalRadioGroup: Story = {
  ...BasicRadioGroup,

  args: {
    ...BasicRadioGroup.args,
    direction: 'vertical',
  },
};
