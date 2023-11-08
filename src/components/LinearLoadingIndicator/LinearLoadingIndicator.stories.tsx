import { Meta, StoryObj } from '@storybook/react';

import { LinearLoadingIndicator } from './LinearLoadingIndicator';

const meta: Meta<typeof LinearLoadingIndicator> = {
  component: LinearLoadingIndicator,
  args: {
    indicatorSeverity: 'default',
    determinate: false,
    progress: 0,
  },
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
};
export default meta;

type Story = StoryObj<typeof LinearLoadingIndicator>;

/**
 * Basic example of LinearLoadingIndicator
 */
export const BasicExample: Story = {};

/**
 * LinearLoadingIndicator with determinate success state
 */
export const Success100PercentDeterminate: Story = {
  args: {
    progress: 100,
    determinate: true,
    indicatorSeverity: 'success',
  },
};

/**
 * LinearLoadingIndicator with determinate error state
 */
export const Error33PercentDeterminate: Story = {
  args: {
    progress: 33,
    determinate: true,
    indicatorSeverity: 'error',
  },
};

/**
 * LinearLoadingIndicator with determinate info state
 */
export const Info50PercentDeterminate: Story = {
  args: {
    progress: 50,
    determinate: true,
    indicatorSeverity: 'info',
  },
};

/**
 * LinearLoadingIndicator with indeterminate warning state
 */
export const WarningIndeterminate: Story = {
  args: {
    determinate: false,
    indicatorSeverity: 'warning',
  },
};

/**
 * LinearLoadingIndicator with negative value
 */
export const NegativePercent: Story = {
  args: {
    progress: -1000,
    determinate: true,
  },
};

/**
 * LinearLoadingIndicator with value over 100
 */
export const Above100Percent: Story = {
  args: {
    progress: 1000,
    determinate: true,
  },
};
