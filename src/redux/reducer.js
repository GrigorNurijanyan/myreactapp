import { createStore } from 'redux';
import { SET_ACCESS_TOKEN, SET_MENU_OPEN } from './reduxConstants'

const reducer = (state, action) => {

    state = {
        menuOpen: true,
        accessToken: ''
    }

    switch (action.type) {
        case SET_MENU_OPEN:
            return {
                ...state,
                menuOpen: action.payload
            }
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            }
        default: return state
    }


};

export const store = createStore(reducer)
