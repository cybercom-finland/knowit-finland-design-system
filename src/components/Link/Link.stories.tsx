import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

/**
 * Default
 */
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Link',
};

/**
 * With end icon
 */
export const EndIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EndIcon.args = {
  children: 'Link with end icon',
  endIcon: <MdOpenInNew />,
};
