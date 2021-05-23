import { FETCH_SURVEYS } from '../actions/types'

const authReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload
        default:
            return state
    }
}

export default authReducer