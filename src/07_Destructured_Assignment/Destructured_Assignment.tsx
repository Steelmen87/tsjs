import React from 'react';
import {propsType} from "./Destructured.test";
type propsT = {
    title:string
    man:propsType
    foot:Array<string>
}
const DestructuredAssignment = ({title,man,...props}:propsT) => {
    return (
        <div>
            {man.name}
            <div>
                <hr/>
                {props.foot}
                {man.address.street.title}
            </div>
        </div>
    );
};

export default DestructuredAssignment;