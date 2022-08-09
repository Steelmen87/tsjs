import React from 'react';

export type AccordionPropsType = {
    color?: string
    /**
     * @example
     * titleValue - title for Accordion
     */
    titleValue: string
    collapsed: boolean
    /**
     * setCollapsed function for change collapse
     */
    setCollapsed: () => void
}
const Accordion = ({collapsed, color, setCollapsed, titleValue}: AccordionPropsType) => {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle
            color={color}
            setCollapsed={setCollapsed}
            title={titleValue}/>

        {!collapsed && <AccordionBody/>}
    </div>
};

export default Accordion;
type AccordionTitle = {
    title: string
    setCollapsed: () => void
    color?: string
}
const AccordionTitle = ({title, setCollapsed, color}: AccordionTitle) => {
    return (
        <h3
            style={{color: color ? color : ''}}
            onClick={(e) => setCollapsed()}>--{title}--</h3>
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