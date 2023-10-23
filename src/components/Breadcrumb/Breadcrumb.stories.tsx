import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Breadcrumb } from './Breadcrumb';
import { Link } from '../Link';
import { MdHome } from 'react-icons/md';
import { Typography } from '../Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumb,
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
  decorators: [withDesign],
} as Meta<typeof Breadcrumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Breadcrumb> = () => (
  <Breadcrumb aria-label='breadcrumbs-component' homeLink={<MdHome />}>
    <Link>Link</Link>
    <Link>Link</Link>
    <Link>Link</Link>
    <Typography variant='p2'>Current page</Typography>
  </Breadcrumb>
);

/**
 * Default variant
 */
export const DefaultVariant = Template.bind({});
