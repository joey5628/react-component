/**
 * Created by zhangyi on 2017/10/18.
 */
import { combineReducers } from 'redux'
import global from './global/globalReducer'

const rootReducer = combineReducers({
    global
});

export default rootReducer