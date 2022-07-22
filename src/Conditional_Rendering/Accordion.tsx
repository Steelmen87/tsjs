import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
const Accordion = ({collapsed, titleValue}: AccordionPropsType) => {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={titleValue}/>
        {!collapsed && <AccordionBody/>}
    </div>
};

export default Accordion;
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