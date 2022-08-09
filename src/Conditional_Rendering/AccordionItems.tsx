import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
}
const AccordionItems = ({collapsed, setCollapsed, titleValue, items, onClick}: AccordionPropsType) => {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle
            setCollapsed={setCollapsed}
            title={titleValue}/>

        {!collapsed && <AccordionBody onClick={onClick} items={items}/>}
    </div>
};

export default AccordionItems;
type AccordionTitle = {
    title: string
    setCollapsed: () => void
}
const AccordionTitle = ({title, setCollapsed}: AccordionTitle) => {
    return (
        <h3 onClick={setCollapsed}>--{title}--</h3>
    )
}
type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyPropsType) {
    const onChangeLi = (value: any) => {
        onClick(value)
    }

    return (
        <div>
            <ul>
                {items.map((el, i) => <li onClick={() => onChangeLi(el.value)} key={i}>{el.title}</li>)}
            </ul>
        </div>
    )
}