import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

export const Template_Select: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('none')
    const items = [{title: 'Moscow', value: 1}, {title: 'Minsk', value: 2}, {title: 'Kiev', value: 3}]



    return <Select value={value} items={items} onChange={setValue}/>
};
