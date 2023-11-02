import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Tabs } from './Tabs';
import { Tab } from './Tab';
import styled from 'styled-components';
import { pxToRem } from '../../shared';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2450-19467&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2453-19833&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
    ],
  },
} as Meta<typeof Tabs>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tabs> = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Tabs {...args} value={value} onChange={handleChange}>
      <Tab label='Tab one' />
      <Tab label='Tab two' />
      <Tab label='Tab tree' />
      <Tab label='Tab four' />
    </Tabs>
  );
};

const Wrapper = styled.div`
  width: ${pxToRem(400)};
`;

const ScrollTabTemplate: StoryFn<typeof Tabs> = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Wrapper>
      <Tabs {...args} value={value} onChange={handleChange}>
        <Tab selected label='Tab one' />
        <Tab label='Tab two' />
        <Tab label='Tab tree' />
        <Tab label='Tab four' />
        <Tab label='Tab five' />
        <Tab label='Tab six' />
      </Tabs>
    </Wrapper>
  );
};

const DisabledTemplate: StoryFn<typeof Tabs> = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Tabs {...args} value={value} onChange={handleChange}>
      <Tab label='Tab one' />
      <Tab disabled label='Tab two' />
      <Tab label='Tab tree' />
      <Tab label='Tab four' />
    </Tabs>
  );
};

/**
 * Basic example of tabs
 */
export const BasicTabs = Template.bind({});

/**
 * Tab list with scroll
 */
export const TabsWithScroll = ScrollTabTemplate.bind({});

/**
 * Tabs with disabled tab
 */
export const DisabledTabs = DisabledTemplate.bind({});
