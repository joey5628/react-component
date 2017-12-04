/**
 * Created by zhangyi on 2017/10/19.
 */
const {
    GLOBAL_UPDATE_LOADING,
    GLOBAL_UPDATE_TOAST_CONTENT
} = require('../types').default
import InitialState from './globalInitialState'

const initialState = new InitialState()
export default function globalReducer (state = initialState, action) {
    if (!(initialState instanceof InitialState)) return initialState.merge(state)

    switch (action.type) {
        case GLOBAL_UPDATE_LOADING:
            console.log('action.payload:', action.payload)
            return state.set('loading', action.payload)

        case GLOBAL_UPDATE_TOAST_CONTENT:
            return state.set('toast', {
                time: new Date().getTime(),
                content: action.payload
            })

        default:
            return state;
    }
    return state
}