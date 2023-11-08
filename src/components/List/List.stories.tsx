import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';

const meta: Meta<typeof List> = {
  component: List,
  render: (args) => (
    <List {...args}>
      <ListItem text='Berries' expandable expanded>
        <ListItem text='Strawberry' />
        <ListItem text='Blueberry' />
        <ListItem text='Blackberry' />
      </ListItem>
      <ListItem text='Fruits' expandable>
        <ListItem text='Yellow' expandable>
          <ListItem text='Banana' />
          <ListItem text='Pineapple' />
        </ListItem>
        <ListItem text='Red' expandable>
          <ListItem text='Apple' />
          <ListItem text='Peach' />
        </ListItem>
      </ListItem>
      <ListItem text='Potato' />
    </List>
  ),
  argTypes: {
    children: {
      control: 'object',
    },
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2669-18946&mode=design&t=Ja0iChxOXQ0eT24I-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2669-19704&mode=design&t=Ja0iChxOXQ0eT24I-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof List>;

/**
 * Badic example of List component
 */
export const BasicExample: Story = {};
