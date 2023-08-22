import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Tab } from './Tab';
import { MdClose } from 'react-icons/md';
import { IconButton } from '../IconButton';

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
  decorators: [withDesign],
} as Meta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tab> = (args) => (
  <Tab {...args}>
    <div>TEST</div>
  </Tab>
);
const ActiveTab: StoryFn<typeof Tab> = (args) => (
  <Tab active {...args}>
    <div>TEST</div>
  </Tab>
);
const WithIconTab: StoryFn<typeof Tab> = (args) => (
  <Tab active {...args}>
    <IconButton>
      <MdClose />
    </IconButton>
  </Tab>
);

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});

/**
 * Active variant
 */
export const ActiveVariant = ActiveTab.bind({});

/**
 * With IconButton
 */
export const WithIcon = WithIconTab.bind({});
