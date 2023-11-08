import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { Link } from '../Link';
import { MdHome } from 'react-icons/md';
import { Typography } from '../Typography';

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  render: (args) => (
    <Breadcrumb
      aria-label='breadcrumbs-component'
      homeLink={<MdHome />}
      {...args}
    >
      <Link>Link</Link>
      <Link>Link</Link>
      <Link>Link</Link>
      <Typography variant='p2'>Current page</Typography>
    </Breadcrumb>
  ),
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=3174-14094&mode=design&t=PvrCSicTlqUTUDne-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=3217-16470&mode=design&t=PvrCSicTlqUTUDne-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

/**
 * Basic example of a Breadcrumb
 */
export const BasicExample: Story = {};
