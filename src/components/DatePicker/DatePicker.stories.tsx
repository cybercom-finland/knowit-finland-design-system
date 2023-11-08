import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { pxToRem } from '../../shared';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  argTypes: {
    onChange: { action: true },
  },
  args: {
    label: 'Label',
    placeholder: 'Default input',
    helperText: 'Helper text',
    variant: 'filled',
    disabled: false,
    error: false,
    readOnly: false,
    required: false,
    style: {
      width: pxToRem(300),
    },
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=856%3A12316&t=yxcfGeLv7tAJWSzy-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A86357&t=yxcfGeLv7tAJWSzy-1',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

/**
 * Filled example
 */
export const Filled: Story = {};

/**
 * Outlined example
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};
