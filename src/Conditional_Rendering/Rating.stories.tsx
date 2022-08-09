import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Rating from './Rating';

export default {
    title: 'Components/Rating',
    component: Rating,

} as ComponentMeta<typeof Rating>;

export const Template: ComponentStory<typeof Rating> = (args) => <Rating />;
