import React, {useState} from 'react';
import s from './Select.module.css'
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
    const [visible, setVisible] = useState(false)
    const onClickHandler = (title: string) => {
        onChange(title)
        Deactivate()
    }
    const Activate = () => {
        setVisible(!visible)
    }
    const Deactivate = () => {
        setVisible(false)
    }
    return (
        <div>
            <div
                className={s.main}
                onClick={Activate}>
                {value}
            </div>
            {visible && items.map((i, index) =>
                <div
                    className={s.items}
                    key={index} onClick={() => onClickHandler(i.title)}>
                    {i.title}
                </div>)
            }
        </div>
    );
};

export default Select;