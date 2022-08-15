import React, {useReducer, Reducer} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import UseReducerAccordion from "./AccarUseReducer";
import Accordion from "../Conditional_Rendering/Accordion";

const GetCategory = (CategoryName: 'Colors' | 'Event' | 'Main') => ({
    table: {
        category: CategoryName
    }
})


export default {
    title: 'Components/UseReducer',
    component: UseReducerAccordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategory('Colors')
        },
        titleValue: {
            ...GetCategory('Event')
        },
        setCollapsed: {
            ...GetCategory('Event')
        },
        collapsed: {
            ...GetCategory('Event')
        }

    }

} as ComponentMeta<typeof UseReducerAccordion>;
type initialStateType = {
    collapsed: boolean
}
const initialState: initialStateType = {
    collapsed: false
}
type ActionType = {
    type: 'TOGGLE-COLLAPSED'
}

export const UseReducerAcc: ComponentStory<typeof Accordion> = (args) => {

    const reducer: Reducer<initialStateType, ActionType> = (state, action): initialStateType => {
        if (action.type === 'TOGGLE-COLLAPSED') {
            return {
                ...state,
                collapsed: !state.collapsed
            }
        }
        return state
    }

    const [collapsed, dispatch] = useReducer(reducer, initialState)

    return <UseReducerAccordion
        color={'red'}
        collapsed={collapsed.collapsed}
        setCollapsed={() => dispatch({type: 'TOGGLE-COLLAPSED'})}
        titleValue={'UseReducer'}/>
};