import React, {useRef, useState} from 'react';

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

export const TemplateControl = () => <input value={'It - incubator'}/>;
