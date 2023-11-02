import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Sidebar, SidebarProps } from './Sidebar';
import { IconButton } from '../IconButton';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import { pxToRem } from '../../shared';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  args: {
    overlay: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2755-16191&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2757-16212&mode=design&t=dl8DfP2GTSxVMB11-4',
      },
    ],
  },
} as Meta<typeof Sidebar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const IconButtonComponent = () => {
  return (
    <IconButton size='large' aria-label='Close menu'>
      <MdClose />
    </IconButton>
  );
};
const ListComponent = () => {
  return (
    <ul>
      <li>List item</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  );
};
const Wrapper = styled.div<SidebarProps>`
  height: ${pxToRem(450)};
`;
const Template: StoryFn<typeof Sidebar> = (args) => (
  <Wrapper>
    <Sidebar {...args} />
  </Wrapper>
);

/**
 * Default variant
 */
export const DefaultVariant = Template.bind({});

/**
 * Sidebar with overlay, content and icon button in header
 */
export const OverlayContentIcon = Template.bind({});
OverlayContentIcon.args = {
  overlay: true,
  sidebarContent: <ListComponent />,
  headerContent: <IconButtonComponent />,
};

/**
 * Sidebar with overlay
 */
export const Overlay = Template.bind({});
Overlay.args = {
  overlay: true,
};

/**
 * Sidebar with content
 */
export const SidebarContent = Template.bind({});
SidebarContent.args = {
  sidebarContent: <ListComponent />,
};

/**
 * Sidebar with icon button in header
 */
export const HeaderContent = Template.bind({});
HeaderContent.args = {
  headerContent: <IconButtonComponent />,
};
