import React, {useMemo, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import UseMemo from "./UseMemo";

export default {
    title: 'useMemo/exm',
    component: UseMemo,
} as ComponentMeta<typeof UseMemo>;

export const Temple1: ComponentStory<typeof UseMemo> = (args) => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let res = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                let fakeValue = Math.random();
            }
            res *= i
        }
        return res
    },[a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return <UseMemo resultB={resultB} resultA={resultA} a={a} b={b} setA={setA} setB={setB}/>
};
