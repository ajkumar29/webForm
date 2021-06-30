import {UPDATE} from './formData.types'

const INITIAL_STATE = {
    values: {}
}

export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case UPDATE:
            return Object.assign({}, state, {
                values: Object.assign({}, state.values, action.values)
              });
        
    default:
        return state

    }

}