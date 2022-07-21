import React, {ChangeEvent, useState} from 'react';

type FullInputType ={
    setMessage:(str:string)=> void
}

const FullInput:React.FC<FullInputType> = ({setMessage}) => {
    let [value, setValue] = useState('')
    const addMessage = () => {
        setMessage(value)
        setValue('')
    }

    const onHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <div>
                <input value={value} onChange={onHandler}/>
                <button onClick={addMessage}>+</button>
            </div>
        </div>
    );
};

export default FullInput;