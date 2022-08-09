import React, {useState} from 'react';

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
    const [visible, setVisible] = useState(true)
    const onClickHandler = (title: string) => {
        onChange(title)
        Deactivate()
    }
    const Activate = () => {
        setVisible(true)
    }
    const Deactivate = () => {
        setVisible(false)
    }
    return (
        <div>
            <div onBlur={Deactivate} onClick={Activate}>{value}</div>
            {visible && items.map((i, index) =>
                <div key={index}
                     onClick={() => onClickHandler(i.title)}>
                    {i.title}</div>)}
        </div>
    );
};

export default Select;