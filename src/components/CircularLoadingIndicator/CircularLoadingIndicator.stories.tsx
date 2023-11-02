import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CircularLoadingIndicator } from './CircularLoadingIndicator';
import styled from 'styled-components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/LoadingIndicators/CircularLoadingIndicator',
  component: CircularLoadingIndicator,
  args: {
    size: 'large',
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
} as Meta<typeof CircularLoadingIndicator>;

const ComponentWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
`;
const SizesTemplate: StoryFn<typeof CircularLoadingIndicator> = () => (
  <ComponentWrapper>
    <CircularLoadingIndicator title='large' size={'large'} />
    <CircularLoadingIndicator title='medium' size={'medium'} />
    <CircularLoadingIndicator title='small' size={'small'} />
  </ComponentWrapper>
);

const StylesTemplate: StoryFn<typeof CircularLoadingIndicator> = (args) => (
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
);

export const BasicExample = {
  args: {
    size: 'medium',
    title: 'default variant',
  },
};

export const Sizes = {
  render: SizesTemplate,
};

export const IndicatorSeverity = {
  render: StylesTemplate,

  args: {
    progress: 75,
    determinate: true,
    size: 'large',
  },
};

export const IndicatorTitle = {
  args: {
    progress: 100,
    determinate: true,
    indicatorSeverity: 'success',
    title: 'Indicator title',
  },
};

export const Success100PercentDeterminate = {
  args: {
    progress: 100,
    determinate: true,
    indicatorSeverity: 'success',
  },
};

export const Error33PercentDeterminate = {
  args: {
    progress: 33,
    determinate: true,
    indicatorSeverity: 'error',
  },
};

export const Info50PercentDeterminate = {
  args: {
    progress: 50,
    determinate: true,
    indicatorSeverity: 'info',
  },
};

export const WarningIndeterminate = {
  args: {
    determinate: false,
    indicatorSeverity: 'warning',
  },
};

export const NegativePercent = {
  args: {
    progress: -1000,
    determinate: true,
  },
};

export const Above100Percent = {
  args: {
    progress: 1000,
    determinate: true,
  },
};
