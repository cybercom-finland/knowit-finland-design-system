import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Paragraph = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Paragraph.args = {
  variant: 'p1',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis arcu, finibus vitae pharetra at, semper eget quam. Nulla et purus in purus congue malesuada eget venenatis lorem. Quisque eget enim mattis, ornare mi gravida, molestie quam. Vivamus consectetur dui nec ipsum cursus, non ornare dui auctor. Donec ante ipsum, porta non mattis sit amet, malesuada ac velit. Nunc ut iaculis nisl. Vivamus ut lectus lectus.',
};

export const Caption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Caption.args = {
  variant: 'caption',
  children: 'Caption',
};

export const Header1 = Template.bind({});
Header1.args = {
  variant: 'h1',
  children: 'Header 1',
};

export const Header2 = Template.bind({});
Header2.args = {
  variant: 'h2',
  children: 'Header 2',
};

export const Header3 = Template.bind({});
Header3.args = {
  variant: 'h3',
  children: 'Header 3',
};

export const Header4 = Template.bind({});
Header4.args = {
  variant: 'h4',
  children: 'Header 4',
};
