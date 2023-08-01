import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Notification } from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=115-822&t=Sqsc6C6hpOMk2cxq-0',
      },
      {
        name: 'dark',
        type: 'figma',
        url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/%F0%9F%AA%81-Playground---IZ-Design-System?type=design&node-id=115-822&t=Sqsc6C6hpOMk2cxq-0',
      },
    ],
  },
} as Meta<typeof Notification>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Notification> = (args) => (
  <Notification {...args} />
);

/**
 * Default
 */
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  message: 'Notification message',
  title: 'Notification title',
  notificationStyle: 'success',
};
