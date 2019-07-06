import *as actionTypes from '../constants/items'

const initalState = {
    msg: {},
    status: null,

}
export const errorReducer = (state = initalState, action) =>
{
    switch (action.type) {
        case actionTypes.GET_ERROR:
            return {
                ...state,
                msg: action.payload.msg
            }
        default:
            return state
    }
}