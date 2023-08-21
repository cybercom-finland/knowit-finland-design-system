import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Card, CardProps } from './Card';
import { styled } from 'styled-components';
import { pxToRem } from '../../shared';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
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
} as Meta<typeof Card>;

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
const ExampleCard = ({ ...restProps }: CardProps) => {
  return (
    <Card
      {...restProps}
      header={<ExampleBoxContents />}
      category='Uutiset'
      title='Knowitille tunnustusta Microsoft Cloud -turvallisuusratkaisujen osaajana'
      content='Pilvipalveluiden suosion kasvaessa yrityksiltä ja organisaatioilta edellytetään kestäviä ja turvallisia ratkaisuja palvelun koko elinkaaren ajan. Siksi olemme erityisen iloisia saadessamme kertoa saavuttaneemme Microsoftin Cloud Security –erikoistumisen, joka kertoo kyvykkyydestämme auttaa asiakkaitamme alati kasvavien tietoturvauhkien ehkäisyssä.'
    ></Card>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Card> = (args) => (
  <ExampleCard {...args}></ExampleCard>
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
