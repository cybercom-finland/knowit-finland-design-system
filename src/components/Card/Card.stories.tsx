import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { styled } from 'styled-components';
import { pxToRem } from '../../shared';

const meta: Meta<typeof Card> = {
  component: Card,
  render: (args) => (
    <Card
      {...args}
      header={
        <ExampleCardHeader
          role='presentation'
          src='https://www.knowit.fi/contentassets/daecdbb1dff5420689ca9951ad352cce/knowit-microsoft-solutions-partner.png'
        />
      }
    />
  ),
  args: {
    variant: 'rectangle',
    category: 'Uutiset',
    title:
      'Knowitille tunnustusta Microsoft Cloud - turvallisuusratkaisujen osaajana',
    content:
      'Pilvipalveluiden suosion kasvaessa yrityksiltä ja organisaatioilta edellytetään kestäviä ja turvallisia ratkaisuja palvelun koko elinkaaren ajan. Siksi olemme erityisen iloisia saadessamme kertoa saavuttaneemme Microsoftin Cloud Security –erikoistumisen, joka kertoo kyvykkyydestämme auttaa asiakkaitamme alati kasvavien tietoturvauhkien ehkäisyssä.',
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
};
export default meta;

type Story = StoryObj<typeof Card>;

const exampleCardDimensions = {
  height: pxToRem(150),
};

const ExampleCardHeader = styled.img`
  width: 100%;
  height: ${exampleCardDimensions.height};
`;

/**
 * Basic example of a Card component
 */
export const BasicExample: Story = {};

/**
 * Card component with rounded edges
 */
export const Rounded: Story = {
  args: {
    variant: 'rounded',
  },
};
