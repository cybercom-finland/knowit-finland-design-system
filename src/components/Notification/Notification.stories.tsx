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
};

/**
 * Success notification
 */
export const SuccessNotification = Template.bind({});
SuccessNotification.args = {
  title: 'Notification title',
  message: 'Notification message',
  notificationSeverity: 'success',
};

/**
 * Error notification
 */
export const ErrorNotification = Template.bind({});
ErrorNotification.args = {
  title: 'Notification title',
  message: 'Notification message',
  notificationSeverity: 'error',
};

/**
 * With loading indicator
 */
export const WithLoadingIndicator = Template.bind({});
WithLoadingIndicator.args = {
  title: 'Notification title',
  message: 'Notification message',
  notificationSeverity: 'warning',
  showLoadingIndicator: true,
};

/**
 * Very long text
 */
export const VeryLongText = Template.bind({});
VeryLongText.args = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor.',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor.',
  notificationSeverity: 'info',
};

/**
 * Timed notification
 */
export const Timed = Template.bind({});
Timed.args = {
  message: 'Timed notification',
  title: 'Should disappear in 10 seconds',
  duration: 10000,
};
