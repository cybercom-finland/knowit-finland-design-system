import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Popup } from './Popup';
import { Button } from '../Button';

const meta: Meta<typeof Popup> = {
  component: Popup,
  render: (args) => (
    <div style={{ padding: 200 }}>
      <Popup {...args}>
        <Button label='Click me' />
      </Popup>
    </div>
  ),
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
};
export default meta;

type Story = StoryObj<typeof Popup>;

/**
 * Basic example of Popup component
 */
export const BasicExample: Story = {};

/**
 * Example of initially open Popup
 */
export const InitiallyOpen: Story = {
  args: {
    initiallyOpen: true,
  },
};

/**
 * Popup with long text
 */
export const LongText: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque etodio sed est pellentesque gravida sit amet at orci.',
  },
};
