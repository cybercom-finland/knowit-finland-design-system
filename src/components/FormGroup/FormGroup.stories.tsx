import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { FormGroup } from './FormGroup';
import { Radio } from '../Radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  args: {
    label: 'Label',
    helperText: 'Helper text',
    direction: 'horizontal',
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=863-14347&t=7YcjYbFLEXoGg9Ih-4',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533-87808&t=7YcjYbFLEXoGg9Ih-4',
      },
    ],
  },
  decorators: [withDesign],
} as Meta<typeof FormGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof FormGroup> = (args) => {
  return (
    <FormGroup
      label='label'
      helperText='Helper Text'
      direction={args.direction}
    >
      <Radio {...args} value='value' name='test' />
      <Radio {...args} value='value2' name='test' />
      <Radio {...args} value='valu3' name='test' />
    </FormGroup>
  );
};

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
};
