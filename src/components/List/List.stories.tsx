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
);

const LongTextTemplate: StoryFn<typeof List> = (args) => (
  <List {...args}>
    <ListItem
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.'
      expandable
    >
      <ListItem
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.'
      />
      <ListItem
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.'
      />
    </ListItem>
  </List>
);

export const BasicExample = {
  render: Template,
};

export const LongText = {
  render: LongTextTemplate,
};
