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

const LongTextTemplate: StoryFn<typeof List> = (args) => (
  <List {...args}>
    <ListItem
      {...args}
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
        {...args}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.'
      />
      <ListItem
        {...args}
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

/**
 * Default
 */
export const Default = Template.bind({});

/**
 * Demonstrate how long text is wrapped
 */
export const LongText = LongTextTemplate.bind({});
