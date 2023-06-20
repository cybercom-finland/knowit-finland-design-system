import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { RadioGroup } from './RadioGroup';
import { Radio } from '../Radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  args: {
    label: 'Label',
    helperText: 'Help text',
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
} as Meta<typeof RadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof RadioGroup> = (args) => {
  return (
    <RadioGroup
      label={'label'}
      helperText={'Help Text'}
      direction={args.direction}
    >
      <Radio {...args} value={'value'} name={'test'} />
      <Radio {...args} value={'value2'} name={'test'} />
      <Radio {...args} value={'valu3'} name={'test'} />
    </RadioGroup>
  );
};
/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
