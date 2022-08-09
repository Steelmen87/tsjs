import React, {useState} from 'react';
import {ComponentMeta, ComponentStory, Story} from '@storybook/react';
import Accordion, {AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

const GetCategory = (CategoryName:'Colors'|'Event'|'Main') => ({
    table: {
        category: CategoryName
    }
})


export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategory('Colors')
        },
        titleValue: {
            ...GetCategory('Event')
        },
        setCollapsed: {
            ...GetCategory('Event')
        },
        collapsed: {
            ...GetCategory('Event')
        }

    }

} as ComponentMeta<typeof Accordion>;


const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
export const Accordion_False: ComponentStory<typeof Accordion> = (args) => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion setCollapsed={()=>setCollapsed(!collapsed)} titleValue={'Accordion'} collapsed={collapsed}/>
};

export const Accordion_Collapsed = Template.bind({})
Accordion_Collapsed.args = {
    setCollapsed: action('setCollapsed'),
    titleValue: 'Accordion',
    collapsed: false,
}

export const Accordion_UnCollapsed = Template.bind({})

Accordion_UnCollapsed.args = {
    setCollapsed: action('setCollapsed'),
    titleValue: 'Accordion',
    collapsed: true
}


export const MyChangeAcc: Story<AccordionPropsType> = (args) => {
    let [collapsed, setCollapsed] = useState(false)
    const callBack = () => {
        setCollapsed(!collapsed)
    }
    return <Accordion  {...args} setCollapsed={callBack} collapsed={collapsed}/>
}
MyChangeAcc.args = {
    titleValue: 'MyChangeAcc',
    color: 'black'
}