import React, {useState, KeyboardEvent} from 'react';
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
const SelectSecret = ({value, items, onChange}: SelectPropsType) => {
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
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i<items.length; i++) {
            console.log(e.code)
        }
    }
    return (
        <div>
            <div
                onKeyUp={onKeyUp}
                tabIndex={0}
                className={s.main}
                onClick={Activate}>
                {value}
            </div>
            {visible && items.map((i, index) =>
                <div
                    className={s.items}
                    key={index}
                    onClick={() => onClickHandler(i.title)}>
                    {i.title}
                </div>)
            }
        </div>
    );
};

export const Select = React.memo(SelectSecret);