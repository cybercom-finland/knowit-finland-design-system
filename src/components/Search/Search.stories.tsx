import { Meta } from '@storybook/react';

import { Search } from './Search';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Search',
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: true },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Search...',
    disabled: false,
    width: 300,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=875%3A17785&t=XP17dFGaaegn1hFH-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A88161&t=XP17dFGaaegn1hFH-1',
      },
    ],
  },
} as Meta<typeof Search>;

export const BasicExample = {};

export const Outlined = {
  args: {
    variant: 'outlined',
  },
};

export const Filled = {
  args: {
    variant: 'filled',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
