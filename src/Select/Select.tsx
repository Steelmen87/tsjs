import React from 'react';

type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}
const Select = ({value, items, onChange}: SelectPropsType) => {
    const onClickHandler = (title: string) => {
        onChange(title)
    }
    return (
        <div>
            <div>{value}</div>
            {items.map((i, index) =>
                <div key={index}
                     onClick={() => onClickHandler(i.title)}>
                    {i.title}</div>)}
        </div>
    );
};

export default Select;