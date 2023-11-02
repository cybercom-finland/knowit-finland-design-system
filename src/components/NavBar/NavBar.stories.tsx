import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { NavBar } from './NavBar';
import { KnowitLogo } from '../KnowitLogo';
import { MdMenu } from 'react-icons/md';
import { IconButton } from '../IconButton';

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
} as Meta<typeof NavBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NavBar> = (args) => <NavBar {...args} />;

/**
 * Default Navbar
 */
export const Default = Template.bind({});

/**
 * Medium Navbar
 */
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

const MenuComponent = () => {
  <IconButton size='large' aria-label='Open menu'>
    <MdMenu />
  </IconButton>;
};

/**
 * Navbar with logo and menu
 */
export const LogoAndMenu = Template.bind({});
LogoAndMenu.args = {
  logo: <KnowitLogo />,
  menu: MenuComponent,
};

/**
 * Navbar with logo
 */
export const Logo = Template.bind({});
Logo.args = {
  logo: <KnowitLogo />,
};

/**
 * Navbar with menu
 */
export const Menu = Template.bind({});
Menu.args = {
  menu: MenuComponent,
};
