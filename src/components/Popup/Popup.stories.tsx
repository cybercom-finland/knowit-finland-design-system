import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Popup, PopupProps } from './Popup';
import { styled } from 'styled-components';
import { Button } from '../Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Popup',
  component: Popup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    arrow: 'top',
    title: 'Title',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=856%3A11867&mode=design&t=MMo35C7LdTwAtI8H-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=1537%3A93141&mode=design&t=MMo35C7LdTwAtI8H-1',
      },
    ],
  },
  decorators: [withDesign],
} as Meta<typeof Popup>;

const RightButton = styled(Button)<PopupProps>`
  align-self: end;
`;

/*
 * Example Popup story
 */
const ExamplePopup = ({ children, ...restProps }: PopupProps) => {
  return (
    <Popup {...restProps}>
      {children}
      <RightButton label='Button' />
    </Popup>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Popup> = (args) => (
  <ExamplePopup {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
    odio sed est pellentesque gravida sit amet at orci.
  </ExamplePopup>
);

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
