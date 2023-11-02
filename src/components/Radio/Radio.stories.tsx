import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Radio } from './Radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Radio',
  component: Radio,
  args: {
    label: 'Label',
    disabled: false,
    width: 300,
    size: 'large',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=2741-23950&mode=design&t=A3IqwwUZHdRICtBn-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=2741-23973&mode=design&t=A3IqwwUZHdRICtBn-4',
      },
    ],
  },
} as Meta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Radio> = (args) => {
  return <Radio {...args} value='value' name='test' />;
};

export const BasicExample = {
  render: Template,
};

export const Small = {
  render: Template,

  args: {
    size: 'small',
  },
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true,
  },
};
