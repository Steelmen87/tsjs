import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Cleanup from "./Cleanup";

export default {
    title: 'hooks/Cleanup',
    component: Cleanup,
} as ComponentMeta<typeof Cleanup>;

export const Template: ComponentStory<typeof Cleanup> = (args) => {
    return <Cleanup/>
};
