import React, {useState} from 'react';
import Accordion from "./Conditional_Rendering/Accordion";
import Rating from "./Conditional_Rendering/Rating";
import OnOff from "./Conditional_Rendering/OnOff";
import UnAccordion from "./Conditional_Rendering/UnAccordion";
import User from "./06_CallBack/CallBack";
import DestructuredAssignment from "./07_Destructured_Assignment/Destructured_Assignment";

const AppRenderAccordion = () => {
    let [state, setState] = useState(true)
    return (
        <div>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            <UnAccordion titleValue={"UncontrolledAccordion"}/>
            <Accordion titleValue={"Accordion"} collapsed={false}/>
            <Rating/>
            <Rating/>
            <OnOff/>
            <User/>
        </div>
    );
};

export default AppRenderAccordion;