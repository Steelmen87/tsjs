import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: () => void
}
const Accordion = ({collapsed, setCollapsed, titleValue}: AccordionPropsType) => {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle
            setCollapsed={setCollapsed}
            title={titleValue}/>

        {!collapsed && <AccordionBody/>}
    </div>
};

export default Accordion;
type AccordionTitle = {
    title: string
    setCollapsed:()=>void
}
const AccordionTitle = ({title,setCollapsed}: AccordionTitle) => {
    return (
        <h3 onClick={setCollapsed}>--{title}--</h3>
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