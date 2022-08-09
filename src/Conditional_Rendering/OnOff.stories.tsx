import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Components/OnOff',
    component: OnOff,

} as ComponentMeta<typeof OnOff>;


export const OnOffControlT: ComponentStory<typeof OnOff> = (args) => <OnOff state={true} setState={action('on of clicked')}/>;
export const OnOffControlF: ComponentStory<typeof OnOff> = (args) => <OnOff state={false} setState={action('on of clicked')}/>;
export const ModeChangeOnOff: ComponentStory<typeof OnOff> = (args) => {
    let [state, setState] = useState(false)
    return <OnOff state={state} setState={setState}/>;
}
