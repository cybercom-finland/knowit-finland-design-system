import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Theme } from './Theme';
import { Button } from '../Button';
import { lightTheme } from '../../shared';

const meta: Meta<typeof Theme> = {
  title: 'Utils/Theme',
  component: Theme,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
  args: {
    theme: 'light',
    children: <Button variant='outlined' label='Themed button' />,
  },
};
export default meta;

type Story = StoryObj<typeof Theme>;

/**
 * Light theme example
 */
export const LightTheme: Story = {};

/**
 * Dark theme example
 */
export const DarkTheme: Story = {
  args: {
    theme: 'dark',
  },
};

/**
 * Custom theme example
 */
export const CustomTheme: Story = {
  args: {
    theme: lightTheme,
  },
};
