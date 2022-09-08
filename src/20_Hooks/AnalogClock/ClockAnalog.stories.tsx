import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Clock} from "./ClockAnalog";

export default {
    title: 'Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;

export const Template_Clock: ComponentStory<typeof Clock> = (args) => {

    return <Clock/>
};
