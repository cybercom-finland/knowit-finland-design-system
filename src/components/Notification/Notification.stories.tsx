import { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta: Meta<typeof Notification> = { component: Notification };
export default meta;

type Story = StoryObj<typeof Notification>;

/**
 * Basic example of Notification component
 */
export const BasicExample: Story = {
  args: {
    message: 'Notification message',
    title: 'Notification title',
    notificationSeverity: 'default',
    showLoadingIndicator: false,
  },
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
};

/**
 * Notification with success state
 */
export const SuccessNotification: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    title: 'Notification title',
    message: 'Notification message',
    notificationSeverity: 'success',
  },
};

/**
 * Notification with error state
 */
export const ErrorNotification: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    title: 'Notification title',
    message: 'Notification message',
    notificationSeverity: 'error',
  },
};

/**
 * Notification with warning state and loading indicator
 */
export const WithLoadingIndicator: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    title: 'Notification title',
    message: 'Notification message',
    notificationSeverity: 'warning',
    showLoadingIndicator: true,
  },
};

/**
 * Notification with long text
 */
export const VeryLongText: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor.',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque non lacus vitae tempus. Nullam at vehicula erat. Aliquam erat volutpat. Pellentesque et fringilla purus, ac blandit odio. Ut volutpat, mauris sed luctus hendrerit, dui nunc sodales erat, non volutpat nisi lorem eu dolor.',
    notificationSeverity: 'info',
  },
};

/**
 * Notification with timed disappear
 */
export const Timed: Story = {
  ...BasicExample,
  args: {
    ...BasicExample.args,
    message: 'Timed notification',
    title: 'Should disappear in 10 seconds',
    duration: 10000,
  },
};
