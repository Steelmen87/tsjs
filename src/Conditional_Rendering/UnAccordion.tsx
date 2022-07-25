import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}
const UnAccordion = ({titleValue}: AccordionPropsType) => {
    console.log('Accordion rendering')
    let [collapsed, setCollapsed] = useState(true)
    const Coll = () => {
        setCollapsed(!collapsed)
    }

    return <div onClick={Coll}>
        <AccordionTitle title={titleValue}/>
        {!collapsed && <AccordionBody/>}
    </div>
};

export default UnAccordion;
type AccordionTitle = {
    title: string
}
const AccordionTitle = ({title}: AccordionTitle) => {
    return (
        <h3>--{title}--</h3>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}