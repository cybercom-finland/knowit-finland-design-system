import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Card } from './Card';
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
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2904%3A3824&mode=design&t=HMwxT6caAX4pJ0g2-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2992%3A15730&mode=design&t=HMwxT6caAX4pJ0g2-1',
      },
    ],
  },
  decorators: [withDesign],
} as Meta<typeof Card>;

const exampleCardDimensions = {
  height: pxToRem(150),
};

const ExampleCardHeader = styled.img`
  width: 100%;
  height: ${exampleCardDimensions.height};
`;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Card> = (args) => (
  <Card
    {...args}
    header={
      <ExampleCardHeader src='https://www.knowit.fi/contentassets/daecdbb1dff5420689ca9951ad352cce/knowit-microsoft-solutions-partner.png' />
    }
    category='Uutiset'
    title='Knowitille tunnustusta Microsoft Cloud - turvallisuusratkaisujen osaajana'
    content='Pilvipalveluiden suosion kasvaessa yrityksiltä ja organisaatioilta edellytetään kestäviä ja turvallisia ratkaisuja palvelun koko elinkaaren ajan. Siksi olemme erityisen iloisia saadessamme kertoa saavuttaneemme Microsoftin Cloud Security –erikoistumisen, joka kertoo kyvykkyydestämme auttaa asiakkaitamme alati kasvavien tietoturvauhkien ehkäisyssä.'
  />
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
