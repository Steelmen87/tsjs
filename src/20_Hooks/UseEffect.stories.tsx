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
export const SimpleIntervalExample = () => {
    const [hour, setHour] = useState('')
    const [min, setMin] = useState('')
    const [sec, setSec] = useState('')

    useEffect(() => {

        const int = setInterval(() => {
            const date = new Date()
            const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            setHour(String(h))
            setMin(String(m))
            setSec(String(s))
        }, 1000)
    }, [])

    return <>
        {hour === '' ? '': `${hour}:${min}:${sec}`}
    </>
}
