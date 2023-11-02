import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { KnowitLogo } from './KnowitLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/KnowitLogo',
  component: KnowitLogo,
} as Meta<typeof KnowitLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof KnowitLogo> = () => <KnowitLogo />;

export const Logo = {
  render: Template,
};
