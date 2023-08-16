import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Box, BoxProps } from './Box';
import { styled } from 'styled-components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: true },
  },
  args: {
    variant: 'rounded',
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
  decorators: [withDesign],
} as Meta<typeof Box>;

const exampleBoxDimensions = {
  width: '200px',
  height: '100px',
};

const ExampleBoxContents = styled.div`
  background-color: green;
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

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
