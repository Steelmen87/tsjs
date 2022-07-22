import React, {useState} from 'react';
import './App.css';
import FullInput from "./components/FullInput";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])
    let [value, setValue] = useState('')
    const onSetMessage = (value: string) => {
        setMessage([...message, {message: value}])
        setValue('')
    }
    const callBackForButton = () => {
        onSetMessage(value)
    }
    return (
        <div className="App">
            {/*<FullInput
                setMessage={onSetMessage}
            />*/}
            <Input title={value} setTitle={setValue}/>
            <Button callBack={callBackForButton} name={'+'}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
