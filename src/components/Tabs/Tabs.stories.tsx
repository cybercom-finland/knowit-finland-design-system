import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Tabs, TabsProps } from './Tabs';
import { Tab } from '../Tab';
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
  decorators: [withDesign],
} as Meta<typeof Tabs>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args} aria-label='Example tabs component'>
    <Tab>
      <div>Tab</div>
    </Tab>
  </Tabs>
);
const ActiveTabTemplate: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args} aria-label='Example tabs component'>
    <Tab active>
      <div>Tab</div>
    </Tab>
    <Tab>
      <div>Tab</div>
    </Tab>
    <Tab>
      <div>Tab</div>
    </Tab>
  </Tabs>
);
const Wrapper = styled.div<TabsProps>`
  width: ${pxToRem(400)};
`;
const ScrollTabTemplate: StoryFn<typeof Tabs> = (args) => (
  <Wrapper>
    <Tabs {...args} aria-label='Example tabs component'>
      <Tab active>
        <div>Tab</div>
      </Tab>
      <Tab>
        <div>Tab</div>
      </Tab>
      <Tab>
        <div>Tab</div>
      </Tab>
      <Tab>
        <div>Tab</div>
      </Tab>
      <Tab>
        <div>Tab</div>
      </Tab>
      <Tab>
        <div>Tab</div>
      </Tab>
    </Tabs>
  </Wrapper>
);

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});

/**
 * Tab list with active tab
 */
export const ActiveTab = ActiveTabTemplate.bind({});

/**
 * Tab list with scroll
 */
export const TabsWithScroll = ScrollTabTemplate.bind({});
