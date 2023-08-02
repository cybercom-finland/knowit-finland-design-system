import React, { useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Dialog, DialogProps } from './Dialog';
import { DialogHeader } from '../DialogHeader/DialogHeader';
import { DialogContent } from '../DialogContent/DialogContent';
import { DialogFooter } from '../DialogFooter/DialogFooter';
import { Button } from '../../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Dialog',
  component: Dialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: true },
  },
  args: {
    visible: false,
    showContent: true,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=799%3A13731&t=aZ3vwdu5JAJD0sQm-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=1533%3A85558&t=aZ3vwdu5JAJD0sQm-1',
      },
    ],
  },
  decorators: [withDesign],
} as Meta<typeof Dialog>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const DialogWithHooks = ({ visible, ...restProps }: DialogProps) => {
  const [isVisible, setVisible] = useState(visible);

  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  return (
    <Dialog {...restProps} visible={isVisible}>
      <DialogHeader setVisible={setVisible}>Header</DialogHeader>
      <DialogContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
        odio sed est pellentesque gravida sit amet at orci.
      </DialogContent>
      <DialogFooter>
        <Button onClick={() => setVisible(false)} label={'Button'} />
      </DialogFooter>
    </Dialog>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Dialog> = (args) => (
  <DialogWithHooks {...args}></DialogWithHooks>
);

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
