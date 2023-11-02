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

export const BasicExample = {};

export const Medium = {
  args: {
    size: 'medium',
  },
};

const MenuComponent = () => {
  <IconButton size='large' aria-label='Open menu'>
    <MdMenu />
  </IconButton>;
};

export const LogoAndMenu = {
  args: {
    logo: <KnowitLogo />,
    menu: MenuComponent,
  },
};

export const Logo = {
  args: {
    logo: <KnowitLogo />,
  },
};

export const Menu = {
  args: {
    menu: MenuComponent,
  },
};
