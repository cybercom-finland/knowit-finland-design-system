import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { LinearLoadingIndicator } from './LinearLoadingIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/LinearLoadingIndicator',
  component: LinearLoadingIndicator,
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2158-18132&mode=design&t=WdazPvcApBl7ozFP-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2168-18215&mode=design&t=WdazPvcApBl7ozFP-4',
      },
    ],
  },
  decorators: [withDesign],
} as Meta<typeof LinearLoadingIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof LinearLoadingIndicator> = (args) => (
  <LinearLoadingIndicator {...args} />
);

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});

/**
 * Success, 33%, determinate
 */
export const Success100PercentDeterminate = Template.bind({});
Success100PercentDeterminate.args = {
  progress: 100,
  determinate: true,
  indicatorStyle: 'success',
};

/**
 * Error, 33%, determinate
 */
export const Error33PercentDeterminate = Template.bind({});
Error33PercentDeterminate.args = {
  progress: 33,
  determinate: true,
  indicatorStyle: 'error',
};

/**
 * Info, 50%, determinate
 */
export const Info50PercentDeterminate = Template.bind({});
Info50PercentDeterminate.args = {
  progress: 50,
  determinate: true,
  indicatorStyle: 'info',
};

/**
 * Warning, indeterminate
 */
export const WarningIndeterminate = Template.bind({});
WarningIndeterminate.args = {
  determinate: false,
  indicatorStyle: 'warning',
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
