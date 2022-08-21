import React, {useMemo, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Select} from "../Select/Select";

export default {
    title: 'useMemo/exm',
    component: Select,
} as ComponentMeta<typeof Select>;

export const Select_UseMemoStories: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('none')
    const items = [{title: 'Moscow', value: 1}, {title: 'Minsk', value: 2}, {title: 'Kiev', value: 3}]

    const filterItems = useMemo(() => items.filter(i => i.title.toLowerCase().indexOf('m') > -1), [items])
    return <Select value={value} items={filterItems} onChange={setValue}/>
};