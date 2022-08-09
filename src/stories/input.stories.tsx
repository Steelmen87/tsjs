import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input',
};

export const Template = () => <input/>;
export const TemplateTrackerInput = () => {
    const [value, setValue] = useState('')
    return <>
        <input onChange={(e) => setValue(e.currentTarget.value)}/> - {value}
    </>
};
export const GetValueInputButtonPress = () => {
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = ref.current as HTMLInputElement;
        setValue(el.value)
    }
    return <>
        <input ref={ref}/>
        <button onClick={save}>save</button>
        - {value}
    </>
};
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={setValue}/>
}
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)
    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={setValue}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>('2')
    const setValue = (e: ChangeEvent<HTMLSelectElement>) => {
         setParentValue(e.currentTarget.value)
    }
    return <>
        <select value={parentValue} onChange={setValue}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    </>
}

export const TemplateControl = () => <input value={'It - incubator'}/>;
