import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    // Shaping the stories through args composition.
    arrowUp: false,
    arrowDown: false,
    arrowLeft: false,
    arrowRight: false,
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
  return <Tooltip {...args}>Example tooltip text</Tooltip>;
};

const LongTextTemplate: StoryFn<typeof Tooltip> = (args) => {
  return (
    <Tooltip {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat
      volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat,
      mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi
      lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat.
      Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio.
      Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non
      volutpat nisi lorem eu dolor.
    </Tooltip>
  );
};

/**
 * Default (no arrows)
 */
export const Default = Template.bind({});

/**
 * Arrow up
 */
export const ArrowUp = Template.bind({});
ArrowUp.args = { arrowUp: true };

/**
 * Arrow down
 */
export const ArrowDown = Template.bind({});
ArrowDown.args = { arrowDown: true };

/**
 * Arrow left
 */
export const ArrowLeft = Template.bind({});
ArrowLeft.args = { arrowLeft: true };

/**
 * Arrow right
 */
export const ArrowRight = Template.bind({});
ArrowRight.args = { arrowRight: true };

/**
 * All arrows
 */
export const AllArrows = Template.bind({});
AllArrows.args = {
  arrowUp: true,
  arrowDown: true,
  arrowLeft: true,
  arrowRight: true,
};

/**
 * Very long text, arrow right
 */
export const LongText = LongTextTemplate.bind({});
LongText.args = { arrowRight: true };
