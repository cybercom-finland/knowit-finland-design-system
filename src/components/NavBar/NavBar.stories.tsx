import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { NavBar } from './NavBar';
import { KnowitLogo } from '../KnowitLogo';
import { MdMenu } from 'react-icons/md';
import { IconButton } from '../IconButton';

const meta: Meta<typeof NavBar> = {
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
};
export default meta;

type Story = StoryObj<typeof NavBar>;

/**
 * Basic example of NavBar
 */
export const BasicExample: Story = {};

const MenuComponent = () => {
  return (
    <IconButton size='large' aria-label='Open menu'>
      <MdMenu />
    </IconButton>
  );
};

/**
 * NavBar with logo
 */
export const Logo: Story = {
  args: {
    logo: <KnowitLogo height={28} />,
  },
};

/**
 * NavBar with menu
 */
export const Menu: Story = {
  args: {
    menu: <MenuComponent />,
  },
};

/**
 * NavBar with menu and logo
 */
export const LogoAndMenu: Story = {
  args: {
    logo: <KnowitLogo height={28} />,
    menu: <MenuComponent />,
  },
};
