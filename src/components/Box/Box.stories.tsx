import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Box, BoxProps } from './Box';
import { styled } from 'styled-components';
import { pxToRem } from '../../shared';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
} as Meta<typeof Box>;

const exampleBoxDimensions = {
  width: pxToRem(200),
  height: pxToRem(100),
};

const ExampleBoxContents = styled.div`
  width: ${exampleBoxDimensions.width};
  height: ${exampleBoxDimensions.height};
`;

/*
 * Example Dialog story
 */
const ExampleBox = ({ ...restProps }: BoxProps) => {
  return (
    <Box {...restProps}>
      <ExampleBoxContents />
    </Box>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Box> = (args) => (
  <ExampleBox {...args}></ExampleBox>
);

export const BasicExample = {
  render: Template,
};

export const Rounded = {
  render: Template,

  args: {
    variant: 'rounded',
  },
};
