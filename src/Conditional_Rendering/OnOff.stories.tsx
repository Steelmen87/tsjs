import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import OnOff from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,

} as ComponentMeta<typeof OnOff>;

export const Template: ComponentStory<typeof OnOff> = (args) => {
    let [state,setState] = useState(false)
    return <OnOff setState={setState} state={state}/>
};
