import {Reducer} from "react";

test('UseReducerAccordion', () => {
    type initialStateType = {
        collapsed: boolean
    }
    const initialState: initialStateType = {
        collapsed: false
    }
    type ActionType = {
        type: 'TOGGLE-COLLAPSED'
    }
    const reducer: Reducer<initialStateType, ActionType> = (state, action): initialStateType => {
        if (action.type === 'TOGGLE-COLLAPSED') {
            return {
                ...state,
                collapsed: !state.collapsed
            }
        }
        return state
    }

    const state = reducer(initialState, {type: 'TOGGLE-COLLAPSED'})

    expect(state.collapsed).toBe(true)

})