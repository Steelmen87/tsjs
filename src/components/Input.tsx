import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (value: string) => void
}
const Input: React.FC<InputPropsType> = ({title, setTitle}) => {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <input
            value={title}
            onChange={e => onChangeValue(e)}
        />
    );
};

export default Input;