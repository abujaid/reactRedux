import { combineReducers } from 'redux'
import { itemReducer } from './itemReducer'
import { errorReducer } from './errorReducer';
import { authReducer } from './authReducer'

export default combineReducers({
    auth: authReducer,
    item: itemReducer,
    error: errorReducer,

});