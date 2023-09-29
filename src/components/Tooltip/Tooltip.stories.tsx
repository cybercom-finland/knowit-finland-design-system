import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { useFloating, useHover, useInteractions } from '@floating-ui/react';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    // Shaping the stories through args composition.
    arrow: 'none',
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

const FloatingTemplate: StoryFn<typeof Tooltip> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <div style={{ height: '120px' }}>
      <div
        style={{ display: 'inline-block' }}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <Button label='Hover over this button to show a tooltip' />
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <Tooltip arrow='top'>Floating tooltip for the button</Tooltip>
        </div>
      )}
    </div>
  );
};

/**
 * Default (no arrows)
 */
export const Default = Template.bind({});

/**
 * Floating tooltip example
 */
export const FloatingTooltip = FloatingTemplate.bind({});

/**
 * Arrow up
 */
export const ArrowUp = Template.bind({});
ArrowUp.args = { arrow: 'top' };

/**
 * Arrow down
 */
export const ArrowDown = Template.bind({});
ArrowDown.args = { arrow: 'bottom' };

/**
 * Arrow left
 */
export const ArrowLeft = Template.bind({});
ArrowLeft.args = { arrow: 'left' };

/**
 * Arrow right
 */
export const ArrowRight = Template.bind({});
ArrowRight.args = { arrow: 'right' };

/**
 * Very long text, arrow right
 */
export const LongText = LongTextTemplate.bind({});
LongText.args = { arrow: 'right' };
