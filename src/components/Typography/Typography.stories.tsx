import { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  args: {
    align: 'left',
  },
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1155-15667&t=jaciSdrjiv4kZ1qN-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=1466-85449&t=jaciSdrjiv4kZ1qN-4',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading4',
  },
};

export const Paragraph1: Story = {
  args: {
    variant: 'p1',
    children: 'Paragraph1',
  },
};

export const Paragraph2: Story = {
  args: {
    variant: 'p2',
    children: 'Paragraph2',
  },
};
