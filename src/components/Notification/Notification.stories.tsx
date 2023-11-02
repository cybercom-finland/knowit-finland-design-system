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

export const BasicExample = {
  args: {
    message: 'Notification message',
    title: 'Notification title',
  },
};

export const SuccessNotification = {
  args: {
    title: 'Notification title',
    message: 'Notification message',
    notificationSeverity: 'success',
  },
};

export const ErrorNotification = {
  args: {
    title: 'Notification title',
    message: 'Notification message',
    notificationSeverity: 'error',
  },
};

export const WithLoadingIndicator = {
  args: {
    title: 'Notification title',
    message: 'Notification message',
    notificationSeverity: 'warning',
    showLoadingIndicator: true,
  },
};

export const VeryLongText = {
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor.',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor.',
    notificationSeverity: 'info',
  },
};

export const Timed = {
  args: {
    message: 'Timed notification',
    title: 'Should disappear in 10 seconds',
    duration: 10000,
  },
};
