import React, {useState} from 'react';
import Accordion from "./Conditional_Rendering/Accordion";
import OnOff from "./Conditional_Rendering/OnOff";

const AppRenderAccordion = () => {
    let [state, setState] = useState(false)
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <Accordion
                setCollapsed={() => setCollapsed(!collapsed)}
                titleValue={"Accordion"}
                collapsed={collapsed}/>
            <OnOff state={state} setState={(on:boolean) => setState(on)}/>
        </div>
    );
};

export default AppRenderAccordion;