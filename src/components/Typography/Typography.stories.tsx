import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Typography } from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1155-15667&t=jaciSdrjiv4kZ1qN-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1466-85449&t=jaciSdrjiv4kZ1qN-4',
      },
    ],
  },
} as Meta<typeof Typography>;

export const Heading1 = {
  args: {
    variant: 'h1',
    children: 'Heading1',
  },
};

export const Heading2 = {
  args: {
    variant: 'h2',
    children: 'Heading2',
  },
};

export const Heading3 = {
  args: {
    variant: 'h3',
    children: 'Heading3',
  },
};

export const Heading4 = {
  args: {
    variant: 'h4',
    children: 'Heading4',
  },
};

export const Paragraph1 = {
  args: {
    variant: 'p1',
    children: 'Paragraph1',
  },
};

export const Paragraph2 = {
  args: {
    variant: 'p2',
    children: 'Paragraph2',
  },
};

export const Caption = {
  args: {
    variant: 'caption',
    children: 'Caption',
  },
};
