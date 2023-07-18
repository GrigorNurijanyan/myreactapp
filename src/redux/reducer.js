import { createStore } from 'redux';
import { SET_MENU_OPEN } from './reduxConstants'

const reducer = (state, action) => {

    state = {
        menuOpen: true,
    }

    switch (action.type) {
        case SET_MENU_OPEN:
            return {
                ...state,
                menuOpen: action.payload
            }
        default: return state
    }


};

export const store = createStore(reducer)
