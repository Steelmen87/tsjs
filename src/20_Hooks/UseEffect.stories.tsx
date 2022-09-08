import React, {useEffect, useState} from "react";

export default {
    title: 'hooks/useEffect',
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')
    useEffect(() => {
        console.log('SimpleExample every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect  only first render - componentDidMount')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])
    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
    </>
}

const setTimeFunction = (num: number) => num < 10 ? "0" + num : num

export const SimpleIntervalExample = () => {
    const [date, setData] = useState(new Date())

    useEffect(() => {
        const int = setInterval(() => {
            setData(new Date())
            console.log('t')
        }, 1000)
        return () => {
            clearInterval(int)
        }
    }, [])

    return <>
        {`${setTimeFunction(date.getHours())}:${setTimeFunction(date.getMinutes())}:${setTimeFunction(date.getSeconds())}`}
    </>
}
