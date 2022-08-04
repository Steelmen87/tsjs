import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import OnOff from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,

} as ComponentMeta<typeof OnOff>;

export const Template: ComponentStory<typeof OnOff> = (args) => <OnOff />;
