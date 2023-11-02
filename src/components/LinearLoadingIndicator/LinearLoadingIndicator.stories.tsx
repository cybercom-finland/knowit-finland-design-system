import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { LinearLoadingIndicator } from './LinearLoadingIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/LoadingIndicators/LinearLoadingIndicator',
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
} as Meta<typeof LinearLoadingIndicator>;

export const BasicExample = {};

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
