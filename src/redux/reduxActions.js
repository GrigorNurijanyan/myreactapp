import { store } from './reducer';
import { SET_ACCESS_TOKEN, SET_MENU_OPEN } from './reduxConstants'

const actions = {
    setMenuOpen: (value) => {
        store.dispatch({ type: SET_MENU_OPEN, payload: value })
    },
    setAccessToken: (value) => {
        store.dispatch({ type: SET_ACCESS_TOKEN, payload: value })
    },
    getAccessToken: () => {
        return store.getState().accessToken
    },
}

const reduxActions = Object.assign({}, actions)

export default reduxActions;