import { Meta, StoryObj } from '@storybook/react';

import { Search } from './Search';
import { pxToRem } from '../../shared';

const meta: Meta<typeof Search> = { component: Search };
export default meta;

type Story = StoryObj<typeof Search>;

/**
 * Outlined variant of Search field
 */
export const Outlined: Story = {
  argTypes: {
    onChange: { action: true },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Search...',
    disabled: false,
    variant: 'outlined',
    style: {
      width: pxToRem(300),
    },
    required: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=875%3A17785&t=XP17dFGaaegn1hFH-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A88161&t=XP17dFGaaegn1hFH-1',
      },
    ],
  },
};

/**
 * Filled variant of Search field
 */
export const Filled = {
  ...Outlined,
  args: {
    ...Outlined.args,
    variant: 'filled',
  },
};
