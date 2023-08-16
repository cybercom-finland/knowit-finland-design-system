import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { CircularLoadingIndicator } from './CircularLoadingIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/CircularLoadingIndicator',
    component: CircularLoadingIndicator,
    parameters: {
        design: [
            {
                name: 'light',
                type: 'figma',
                url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2158-18132&mode=design&t=WdazPvcApBl7ozFP-4',
            },
            {
                name: 'dark',
                type: 'figma',
                url: 'https://www.figma.com/file/qUvylGh5ubOWlpqlplVORt/IZ-Design-System---%F0%9F%9A%80-Live?type=design&node-id=2168-18215&mode=design&t=WdazPvcApBl7ozFP-4',
            },
        ],
    },
    decorators: [withDesign],
} as Meta<typeof CircularLoadingIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CircularLoadingIndicator> = (args) => (
    <CircularLoadingIndicator {...args} />
);

/**
 * Default variant (not specified)
 */
export const DefaultVariant = Template.bind({});