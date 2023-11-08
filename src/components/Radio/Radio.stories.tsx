import { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = { component: Radio };
export default meta;

type Story = StoryObj<typeof Radio>;

/**
 * Basic example of Radio button
 */
export const BasicExample: Story = {
  args: {
    label: 'Label',
    disabled: false,
    size: 'large',
    required: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=2741-23950&mode=design&t=A3IqwwUZHdRICtBn-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=2741-23973&mode=design&t=A3IqwwUZHdRICtBn-4',
      },
    ],
  },
};

/**
 * Small variant of Radio button
 */
export const Small: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    size: 'small',
  },
};

/**
 * Disabled Radio button
 */
export const Disabled: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    disabled: true,
  },
};
