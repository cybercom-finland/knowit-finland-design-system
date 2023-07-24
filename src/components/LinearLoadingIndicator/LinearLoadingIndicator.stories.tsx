import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { LinearLoadingIndicator } from './LinearLoadingIndicator';
import { LoadingIndicatorStyle } from './styles';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/LinearLoadingIndicator',
  component: LinearLoadingIndicator,
  argTypes: {
    indicatorStyle: {
      control: {
        type: 'radio',
        labels: {
          0: 'Default',
          1: 'Success',
          2: 'Warning',
          3: 'Error',
          4: 'Info',
        },
      },
    },
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1617-18316&t=n5YOe4QFyTaCSzxP-0',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1617-18316&t=n5YOe4QFyTaCSzxP-0',
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
  indicatorStyle: LoadingIndicatorStyle.Success,
};

/**
 * Error, 33%, determinate
 */
export const Error33PercentDeterminate = Template.bind({});
Error33PercentDeterminate.args = {
  progress: 33,
  determinate: true,
  indicatorStyle: LoadingIndicatorStyle.Error,
};

/**
 * Info, 50%, determinate
 */
export const Info50PercentDeterminate = Template.bind({});
Info50PercentDeterminate.args = {
  progress: 50,
  determinate: true,
  indicatorStyle: LoadingIndicatorStyle.Info,
};

/**
 * Warning, indeterminate
 */
export const WarningIndeterminate = Template.bind({});
WarningIndeterminate.args = {
  determinate: false,
  indicatorStyle: LoadingIndicatorStyle.Warning,
};
