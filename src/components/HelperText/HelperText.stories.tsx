import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { HelperText } from './HelperText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/HelperText',
  component: HelperText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    disabled: false,
    error: false,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1786-46172&t=pA0zQRDio9CNoA6H-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1786-46189&t=pA0zQRDio9CNoA6H-4',
      },
    ],
  },
} as Meta<typeof HelperText>;

export const BasicExample = {
  args: {
    children: 'Default',
  },
};

export const Disabled = {
  args: {
    children: 'Disabled',
    disabled: true,
  },

  parameters: {
    a11y: {
      config: {
        // Element has disabled attribute for screen readers, so contrast can be ignored
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
};

export const Error = {
  args: {
    children: 'With error',
    error: true,
  },
};

export const ErrorDisabled = {
  args: {
    children: 'With error',
    error: true,
    disabled: true,
  },
};
