import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Theme } from './Theme';
import { Button } from '../Button';
import { lightTheme } from '../../shared';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Utils/Theme',
  component: Theme,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Theme>;

export const LightTheme = {
  args: {
    theme: 'light',
    children: <Button variant='outlined' label='Themed button' />,
  },
};

export const DarkTheme = {
  args: {
    theme: 'dark',
    children: <Button variant='outlined' label='Themed button' />,
  },
};

export const CustomTheme = {
  args: {
    theme: lightTheme,
    children: <Button variant='outlined' label='Themed button' />,
  },
};
