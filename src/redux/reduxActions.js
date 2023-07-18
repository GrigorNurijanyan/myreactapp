import { store } from './reducer';
import { SET_MENU_OPEN } from './reduxConstants'

const actions = {
    setMenuOpen: (value) => {
        store.dispatch({ type: SET_MENU_OPEN, payload: value })
    },
}

const reduxActions = Object.assign({}, actions)

export default reduxActions;