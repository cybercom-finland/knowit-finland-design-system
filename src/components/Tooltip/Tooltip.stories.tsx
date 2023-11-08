import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  render: (args) => (
    <div style={{ padding: 200 }}>
      <Tooltip {...args}>
        <Button label='Hover over this button to show a tooltip' />
      </Tooltip>
    </div>
  ),
  args: {
    showArrow: true,
    initiallyOpen: false,
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
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

/**
 * Basic example of Tooltip
 */
export const BasicExample: Story = {};

/**
 * Tooltip with long text
 */
export const LongText: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque etodio sed est pellentesque gravida sit amet at orci.',
  },
};
