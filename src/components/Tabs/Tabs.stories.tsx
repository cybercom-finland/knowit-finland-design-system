import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { pxToRem } from '../../shared';

const meta: Meta<typeof Tabs> = { component: Tabs };
export default meta;

type Story = StoryObj<typeof Tabs>;

/**
 * Basic example of Tabs component
 */
export const BasicExample: Story = {
  render: (args) => {
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
        <Tab label='Tab five' />
        <Tab label='Tab six' />
      </Tabs>
    );
  },
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
};

export const TabsWithScroll: Story = {
  ...BasicExample,
  args: {
    style: { width: pxToRem(400) },
  },
};

export const DisabledTabs: Story = {
  render: (args) => {
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
  },
};
