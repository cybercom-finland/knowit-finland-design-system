import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Dialog } from './Dialog';
import { Label } from '../../Label/Label';
import { DialogHeader } from '../DialogHeader/DialogHeader';
import { DialogContent } from '../DialogContent/DialogContent';
import { DialogFooter } from '../DialogFooter/DialogFooter';
import { Button } from '../../Button';
import { IconButton } from '../../IconButton';
import { MdClose } from 'react-icons/md';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=771%3A13438&mode=design&t=4sawDFpjAz0GxS0z-1',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=1533%3A87059&mode=design&t=4sawDFpjAz0GxS0z-1',
      },
    ],
  },
} as Meta<typeof Dialog>;

/*
 * Example Dialog story
 */
const ExampleDialog = () => {
  return (
    <Dialog aria-label='Example dialog'>
      <DialogHeader>
        <Label>Title</Label>
        <IconButton size='large' aria-label='Close'>
          <MdClose />
        </IconButton>
      </DialogHeader>
      <DialogContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
        odio sed est pellentesque gravida sit amet at orci.
      </DialogContent>
      <DialogFooter>
        <Button size='large' label='Button' aria-label='Button' />
        <Button
          variant='text'
          size='large'
          label='Button'
          aria-label='Button'
        />
      </DialogFooter>
    </Dialog>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Dialog> = () => <ExampleDialog />;

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});
