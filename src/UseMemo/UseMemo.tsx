import React from 'react';
type propsType = {
    a:number
    b:number
    setA:(a:number)=>void
    setB:(b:number)=>void
    resultA:number
    resultB:number
}
const UseMemo:React.FC<propsType> = ({a,b,setA,setB,resultB,resultA}) => {
    return (
        <div>
            <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>result for a : {resultA}</div>
            <div>result for b : {resultB}</div>
        </div>
    );
};

export default UseMemo;