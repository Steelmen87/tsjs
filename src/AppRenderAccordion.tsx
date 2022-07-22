import React, {useState} from 'react';
import Accordion from "./Conditional_Rendering/Accordion";
import Rating from "./Conditional_Rendering/Rating";
import OnOff from "./Conditional_Rendering/OnOff";

const AppRenderAccordion = () => {
    let [state,setState]=useState(true)
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"User"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <OnOff state={state}/>
        </div>
    );
};

export default AppRenderAccordion;