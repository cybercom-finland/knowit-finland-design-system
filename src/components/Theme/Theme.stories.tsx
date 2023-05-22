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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Theme> = (args) => <Theme {...args} />;

/**
 * Light themed
 */
export const LightTheme = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightTheme.args = {
  theme: 'light',
  children: <Button variant="outlined" label="Themed button" />,
};

/**
 * Dark themed
 */
export const DarkTheme = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkTheme.args = {
  theme: 'dark',
  children: <Button variant="outlined" label="Themed button" />,
};

/**
 * Custom themed
 */
export const CustomTheme = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomTheme.args = {
  theme: lightTheme,
  children: <Button variant="outlined" label="Themed button" />,
};
