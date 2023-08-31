import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Accordion, AccordionProps } from './Accordion';
import { styled } from 'styled-components';
import { pxToRem } from '../../shared';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Accordion',
  component: Accordion,
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
  decorators: [withDesign],
} as Meta<typeof Accordion>;

const exampleAccordionDimensions = {
  width: pxToRem(200),
  height: pxToRem(100),
};

const ExampleAccordionContents = styled.div`
  width: ${exampleAccordionDimensions.width};
  height: ${exampleAccordionDimensions.height};
`;

/*
 * Example Dialog story
 */
const ExampleAccordion = ({ ...restProps }: AccordionProps) => {
  return (
    <Accordion {...restProps}>
      <ExampleAccordionContents />
    </Accordion>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Accordion> = (args) => (
  <ExampleAccordion {...args}></ExampleAccordion>
);

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});

/**
 * Rounded variant
 */
export const Rounded = Template.bind({});
Rounded.args = {
  variant: 'rounded',
};
