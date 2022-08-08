import React, {useState} from 'react';
import Accordion from "./Conditional_Rendering/Accordion";
import Rating from "./Conditional_Rendering/Rating";
import OnOff from "./Conditional_Rendering/OnOff";
import UnAccordion from "./Conditional_Rendering/UnAccordion";
import User from "./06_CallBack/CallBack";

const AppRenderAccordion = () => {
    let [state, setState] = useState(true)
    let [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            <UnAccordion titleValue={"UncontrolledAccordion"}/>
            <Accordion  setCollapsed={()=>setCollapsed(!collapsed)} titleValue={"Accordion"} collapsed={collapsed}/>
            <Rating/>
            <Rating/>
            <OnOff state={state} setState={setState}/>
            <User/>
        </div>
    );
};

export default AppRenderAccordion;