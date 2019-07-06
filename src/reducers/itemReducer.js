import * as actionTypes from '../constants/items';

const intialState = {
    items: [],
    loading: false,
    token: localStorage.getItem('token'),
}
export const itemReducer = (state = intialState, action) =>
{
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        default:
            return state;
    }
}