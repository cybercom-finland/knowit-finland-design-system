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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {
  variant: 'h1',
  children: 'Heading1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  children: 'Heading2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
  children: 'Heading3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'h4',
  children: 'Heading4',
};

export const Paragraph1 = Template.bind({});
Paragraph1.args = {
  variant: 'p1',
  children: 'Paragraph1',
};

export const Paragraph2 = Template.bind({});
Paragraph2.args = {
  variant: 'p2',
  children: 'Paragraph2',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'Caption',
};

export const DefaultVariant = Template.bind({});
DefaultVariant.args = {
  children: 'Variant arg not specified',
};
