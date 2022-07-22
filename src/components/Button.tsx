import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}
const Button: React.FC<ButtonPropsType> = ({name, callBack}) => {
    const onHandleClick = () => {
        callBack()
    }
    return (
        <button onClick={onHandleClick}>{name}</button>
    );
};

export default Button;