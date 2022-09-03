import React, {useMemo, useState} from "react";

export default {
    title: 'hooks/useState',
}

function generateDate() {
    return 1000000000;
}

export const Example1 = () => {
    console.log('Example1')
    //const initValue = useMemo(generateDate,[]);
    const [counter, setCounter] = useState(generateDate)
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
export const Example2 = () => {
    console.log('Example2')
    const [counter, setCounter] = useState(1)
    const changer = (state: number) => state + 1
    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}