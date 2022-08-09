import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from "./Select";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

export const Template_Select: ComponentStory<typeof Select> = (args) => {
    const [value,setValue] = useState('')
    const items = [{title:'one',value:1},{title:'two',value:2}, {title:'thee',value:3}]
    const setValueChange = (val:string) =>{
        setValue(val)
    }
   return  <Select value={value} items={items} onChange={setValueChange}/>
};
