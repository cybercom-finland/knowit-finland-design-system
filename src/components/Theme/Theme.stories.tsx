import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Theme } from './Theme';
import { Button } from '../Button';
import { lightTheme } from '../../shared';

const meta: Meta<typeof Theme> = {
  title: 'Utils/Theme',
  component: Theme,
};
export default meta;

type Story = StoryObj<typeof Theme>;

/**
 * Light theme example
 */
export const LightTheme: Story = {
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

/**
 * Dark theme example
 */
export const DarkTheme: Story = {
  ...LightTheme,
  args: {
    theme: 'dark',
    children: <Button variant='outlined' label='Themed button' />,
  },
};

/**
 * Custom theme example
 */
export const CustomTheme: Story = {
  ...LightTheme,
  args: {
    theme: lightTheme,
    children: <Button variant='outlined' label='Themed button' />,
  },
};
