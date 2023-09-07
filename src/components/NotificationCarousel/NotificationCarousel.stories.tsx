import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { NotificationCarousel } from './NotificationCarousel';

export default {
  title: 'Components/NotificationCarousel',
  component: NotificationCarousel,
  args: {
    // Shaping the stories through args composition.
    carouselItems: [
      {
        title: 'First notification',
        closeButtonAriaLabel: 'Close the first notification',
        hidden: false,
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
} as Meta<typeof NotificationCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NotificationCarousel> = (args) => {
  return <NotificationCarousel {...args} />;
};

/**
 * Default
 */
export const Default = Template.bind({});
