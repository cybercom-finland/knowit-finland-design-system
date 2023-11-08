import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';
import { MdOpenInNew } from 'react-icons/md';

const meta: Meta<typeof Link> = {
  component: Link,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Link',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=2128%3A17467&t=w4eALOOXPsJLrQjt-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=2128%3A17484&t=w4eALOOXPsJLrQjt-1',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

/**
 * Basic example of Link component
 */
export const BasicExample: Story = {};

/**
 * Link with end icon
 */
export const EndIcon: Story = {
  args: {
    children: 'Link with end icon',
    endIcon: <MdOpenInNew />,
  },
};
