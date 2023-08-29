import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { NotificationCarousel } from './NotificationCarousel';

export default {
  title: 'Components/NotificationCarousel',
  component: NotificationCarousel,
  args: {
    // Shaping the stories through args composition.
    carouselItems: [
      { title: 'First notification' },
      {
        title: 'Second notification',
        message: 'Should disappear in 10 seconds',
        duration: 10000,
      },
      { title: 'Third notification' },
    ],
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
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  maxHeight: '225px', // Limit the height so that it is demonstrated how partially hidden notification becomes visible when other notification(s) disappear before it
};
