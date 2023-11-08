import { Meta, StoryObj } from '@storybook/react';

import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  component: Tab,
  args: {
    label: 'Tab',
    selected: false,
    disabled: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2447-19156&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2450-19345&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Tab>;

/**
 * Basic example of Tab component
 */
export const BasicExample: Story = {};

/**
 * Example of selected Tab
 */
export const Selected: Story = {
  args: {
    selected: true,
  },
};

/**
 * Example of disabled Tab
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
