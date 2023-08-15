import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { NavBar } from './NavBar';
import { KnowitLogo } from '../KnowitLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NavBar',
  component: NavBar,
  args: {
    size: 'small',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2626-18676&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2628-18986&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
    ],
  },
  decorators: [withDesign],
} as Meta<typeof NavBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NavBar> = (args) => {
  return <NavBar size={args.size} logo={<KnowitLogo />}></NavBar>;
};

/**
 * Navbar
 */
export const Navbar = Template.bind({});
