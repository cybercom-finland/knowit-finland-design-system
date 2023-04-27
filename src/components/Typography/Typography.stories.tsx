import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Typography } from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
  decorators: [withDesign],
} as Meta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {
  variant: 'h1',
  children: 'Heading1',
};

Heading1.storyName = 'Typography';

Heading1.parameters = {
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
};
