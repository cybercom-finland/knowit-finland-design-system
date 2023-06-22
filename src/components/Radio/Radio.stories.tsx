import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
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
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=863-14347&t=7YcjYbFLEXoGg9Ih-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533-87808&t=7YcjYbFLEXoGg9Ih-4',
      },
    ],
  },
  decorators: [withDesign],
} as Meta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Radio> = (args) => {
  return <Radio {...args} value="value" name="test" />;
};
/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});

/**
 * Small variant
 */
export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

/**
 * Disabled
 */
export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  disabled: true,
};
