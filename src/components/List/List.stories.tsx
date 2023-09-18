import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { List, ListItem } from './List';

export default {
  title: 'Components/List',
  component: List,
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
} as Meta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof List> = (args) => (
  <List>
    <ListItem {...args} text='Berries' expandable expanded>
      <ListItem {...args} text='Strawberry' />
      <ListItem {...args} text='Blueberry' />
      <ListItem {...args} text='Blackberry' />
    </ListItem>
    <ListItem {...args} text='Fruits' expandable>
      <ListItem {...args} text='Yellow' expandable>
        <ListItem {...args} text='Banana' />
        <ListItem {...args} text='Pineapple' />
      </ListItem>
      <ListItem {...args} text='Red' expandable>
        <ListItem {...args} text='Apple' />
        <ListItem {...args} text='Peach' />
      </ListItem>
    </ListItem>
    <ListItem {...args} text='Potato' />
  </List>
);

/**
 * Default
 */
export const Default = Template.bind({});
