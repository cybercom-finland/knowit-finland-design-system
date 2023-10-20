import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    // Shaping the stories through args composition.
    showArrow: true,
    content: 'Example Tooltip content',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=790-15542&mode=design&t=CX7vD9P6YQtwJF9w-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=1538-93439&mode=design&t=CX7vD9P6YQtwJF9w-4',
      },
    ],
  },
} as Meta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tooltip> = (args) => {
  return (
    <div style={{ padding: 200 }}>
      <Tooltip {...args}>
        <Button label='Hover over this button to show a tooltip' />
      </Tooltip>
    </div>
  );
};

/**
 * Default (no arrows)
 */
export const Default = Template.bind({});

/**
 * Long text
 */
export const LongText = Template.bind({});
LongText.args = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque etodio sed est pellentesque gravida sit amet at orci.',
};
