import { Meta, StoryObj } from '@storybook/react';
import { NotificationCarousel } from './NotificationCarousel';

const meta: Meta<typeof NotificationCarousel> = {
  component: NotificationCarousel,
  args: {
    // Shaping the stories through args composition.
    carouselItems: [
      {
        title: 'First notification',
        closeButtonAriaLabel: 'Close the first notification',
      },
      {
        title: 'Second notification',
        message: 'Should disappear in 10 seconds',
        duration: 10000,
        closeButtonAriaLabel: 'Close the second notification',
      },
      {
        title: 'Third notification',
        closeButtonAriaLabel: 'Close the third notification',
      },
    ],
    maxNotifications: 2,
  },
  parameters: {
    design: [
      {
        name: 'light',
        type: 'figma',
        url: '',
      },
      {
        name: 'dark',
        type: 'figma',
        url: '',
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof NotificationCarousel>;

/**
 * Basic example of NotificationCrousel
 */
export const BasicExample: Story = {};
