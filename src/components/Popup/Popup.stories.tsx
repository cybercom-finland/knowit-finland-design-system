import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Popup, PopupProps } from './Popup';
import { Button } from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Popup',
  component: Popup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    title: 'Title',
    content: 'Example Popup content',
    showArrow: true,
    initiallyOpen: false,
    openWith: 'click',
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
} as Meta<typeof Popup>;

/*
 * Example Popup story
 */
const ExamplePopup = ({ children, ...restProps }: PopupProps) => {
  return (
    <div style={{ padding: 200 }}>
      <Popup {...restProps}>{children}</Popup>
    </div>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Popup> = (args) => (
  <ExamplePopup {...args}>
    <Button label='Click me' />
  </ExamplePopup>
);

export const BasicExample = {
  render: Template,
};

export const InitiallyOpen = {
  render: Template,
  args: { initiallyOpen: true },
};

export const LongText = {
  render: Template,

  args: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque etodio sed est pellentesque gravida sit amet at orci.',
  },
};
