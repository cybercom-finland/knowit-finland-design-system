import React from 'react';
import { Meta } from '@storybook/react';

import { Link } from './Link';
import { MdOpenInNew } from 'react-icons/md';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Link',
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
  args: {},
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
} as Meta<typeof Link>;

export const BasicExample = {
  args: {
    children: 'Link',
  },
};

export const EndIcon = {
  args: {
    children: 'Link with end icon',
    endIcon: <MdOpenInNew />,
  },
};
