import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
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
  decorators: [withDesign],
} as Meta<typeof CircularLoadingIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CircularLoadingIndicator> = (args) => (
  <CircularLoadingIndicator {...args} />
);

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

/**
 * Default variant
 */
export const DefaultVariant = Template.bind({});
DefaultVariant.args = {
  size: 'medium',
  title: 'default variant',
};

/**
 * Different indicator sizes
 */
export const Sizes = SizesTemplate.bind({});

/**
 * Different indicator styles
 */
export const IndicatorSeverity = StylesTemplate.bind({});
IndicatorSeverity.args = {
  progress: 75,
  determinate: true,
  size: 'large',
};
/**
 * Indicator title, shown on hover
 */
export const IndicatorTitle = Template.bind({});
IndicatorTitle.args = {
  progress: 100,
  determinate: true,
  indicatorSeverity: 'success',
  title: 'Indicator title',
};
/**
 * Success, 100%, determinate
 */
export const Success100PercentDeterminate = Template.bind({});
Success100PercentDeterminate.args = {
  progress: 100,
  determinate: true,
  indicatorSeverity: 'success',
};

/**
 * Error, 33%, determinate
 */
export const Error33PercentDeterminate = Template.bind({});
Error33PercentDeterminate.args = {
  progress: 33,
  determinate: true,
  indicatorSeverity: 'error',
};

/**
 * Info, 50%, determinate
 */
export const Info50PercentDeterminate = Template.bind({});
Info50PercentDeterminate.args = {
  progress: 50,
  determinate: true,
  indicatorSeverity: 'info',
};

/**
 * Warning, indeterminate
 */
export const WarningIndeterminate = Template.bind({});
WarningIndeterminate.args = {
  determinate: false,
  indicatorSeverity: 'warning',
};

/**
 * Negative value (below 0%)
 */
export const NegativePercent = Template.bind({});
NegativePercent.args = {
  progress: -1000,
  determinate: true,
};

/**
 * Value above 100%
 */
export const Above100Percent = Template.bind({});
Above100Percent.args = {
  progress: 1000,
  determinate: true,
};
