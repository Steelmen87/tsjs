import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import AccordionItems from "./AccordionItems";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: AccordionItems,
} as ComponentMeta<typeof AccordionItems>;

export const Accordion_Items: ComponentStory<typeof AccordionItems> = (args) => {
    const items = [{title:'one',value:1},{title:'two',value:2}, {title:'thee',value:3}]
    let [collapsed, setCollapsed] = useState(false)
    return <AccordionItems onClick={ action('value')} items={items} setCollapsed={()=>setCollapsed(!collapsed)} titleValue={'Accordion'} collapsed={collapsed}/>
};
