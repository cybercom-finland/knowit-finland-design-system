import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Dropdown, Option } from './Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    variant: 'outlined',
    placeholder: 'Default Dropdown',
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    error: false,
    width: 300,
    options: [],
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Dropdown>;

const TemplateOptions: Option[] = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
  { label: 'Four', value: 4 },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [current, setCurrent] = useState<number | undefined>(undefined);
  const { options, value, onSelect, ...props } = args;
  return (
    <Dropdown
      options={options.length > 0 ? options : TemplateOptions}
      value={current}
      onSelect={(e) => setCurrent(Number(e.target.value))}
      {...props}
    />
  );
};

/**
 * Outlined
 */
export const Outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  variant: 'outlined',
};

Outlined.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?node-id=909-16258&t=mzQvfJTebebtBWNj-4',
  },
};
