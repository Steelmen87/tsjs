import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,

} as ComponentMeta<typeof Accordion>;

export const Accordion_False: ComponentStory<typeof Accordion> = (args) => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion setCollapsed={()=>setCollapsed(!collapsed)} titleValue={'Accordion'} collapsed={collapsed}/>
};
