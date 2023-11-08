import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CircularLoadingIndicator } from './CircularLoadingIndicator';
import styled from 'styled-components';

const meta: Meta<typeof CircularLoadingIndicator> = {
  component: CircularLoadingIndicator,
  args: {
    size: 'medium',
    title: 'Loading indicator',
    indicatorSeverity: 'default',
    determinate: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2270-17650&mode=design&t=x4qhswzfNNGYojft-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2282-17703&mode=design&t=GVRVDuSQjIPEmCj3-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof CircularLoadingIndicator>;

const ComponentWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
`;

/**
 * Basic Loading indicator
 */
export const BasicExample: Story = {};

/**
 * Different siszes of Loading indicator
 */
export const Sizes = {
  render: (args) => (
    <ComponentWrapper>
      <CircularLoadingIndicator title='large' size={'large'} {...args} />
      <CircularLoadingIndicator title='medium' size={'medium'} {...args} />
      <CircularLoadingIndicator title='small' size={'small'} {...args} />
    </ComponentWrapper>
  ),
};

/**
 * Loading indicator severities
 */
export const IndicatorSeverity = {
  render: (args) => (
    <ComponentWrapper>
      <CircularLoadingIndicator
        {...args}
        title='default'
        indicatorSeverity={'default'}
      />
      <CircularLoadingIndicator
        {...args}
        title='success'
        indicatorSeverity={'success'}
      />
      <CircularLoadingIndicator
        {...args}
        title='warning'
        indicatorSeverity={'warning'}
      />
      <CircularLoadingIndicator
        {...args}
        title='error'
        indicatorSeverity={'error'}
      />
      <CircularLoadingIndicator
        {...args}
        title='info'
        indicatorSeverity={'info'}
      />
    </ComponentWrapper>
  ),

  args: {
    progress: 75,
    determinate: true,
    size: 'large',
  },
};

/**
 * Determinate
 */
export const Info50PercentDeterminate = {
  args: {
    progress: 50,
    determinate: true,
    indicatorSeverity: 'info',
  },
};

/**
 * Negative value
 */
export const NegativePercent = {
  args: {
    progress: -1000,
    determinate: true,
  },
};

/**
 * Value above 100
 */
export const Above100Percent = {
  args: {
    progress: 1000,
    determinate: true,
  },
};
