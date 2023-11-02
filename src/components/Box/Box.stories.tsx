import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { styled } from 'styled-components';
import { pxToRem } from '../../shared';

const exampleBoxDimensions = {
  width: pxToRem(200),
  height: pxToRem(100),
};

const ExampleBoxContents = styled.div`
  width: ${exampleBoxDimensions.width};
  height: ${exampleBoxDimensions.height};
`;

const meta: Meta<typeof Box> = { component: Box };
export default meta;

type Story = StoryObj<typeof Box>;

/**
 * Example of a Box with some content
 */
export const BasicExample: Story = {
  render: (args) => (
    <Box {...args}>
      <ExampleBoxContents />
    </Box>
  ),
  args: {
    variant: 'rectangle',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2873%3A3795&mode=design&t=AjKcl0zg1pKHLGEU-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2876%3A3808&mode=design&t=AjKcl0zg1pKHLGEU-1',
      },
    ],
  },
};

/**
 * Example of a rounded Box
 */
export const Rounded = {
  ...BasicExample,

  args: {
    variant: 'rounded',
  },
};
