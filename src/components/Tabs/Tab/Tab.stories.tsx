import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Tab } from './Tab';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tabs/Tab',
  component: Tab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2447-19156&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2450-19345&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
    ],
  },
} as Meta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tab> = (args) => <Tab {...args} label='Tab' />;
const ActiveTab: StoryFn<typeof Tab> = (args) => (
  <Tab {...args} selected label='Tab' />
);

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});

/**
 * Active variant
 */
export const ActiveVariant = ActiveTab.bind({});
