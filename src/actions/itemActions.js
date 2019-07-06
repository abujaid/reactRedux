import axios from 'axios'
import * as actionTypes from '../constants/items'
export const getItems = () =>
{
    return async dispatch =>
    {
        await axios.get('/api/items').then(response =>
        {
            dispatch({ type: actionTypes.GET_ITEMS, payload: response.data })
        }).catch(err =>
        {
            dispatch({ type: actionTypes.GET_ERROR, payload: err.response.data })
        })
    }
}
export const delteItem = (id, token) =>
{
    axios.defaults.headers.common['x-auth-token'] = token;
    return async dispatch =>
    {
        await axios.delete(`/api/items/${id}`).then(response =>
        {
            console.log(response)
            dispatch({ type: actionTypes.REMOVE_ITEM, payload: id })
        }).catch(err =>
        {
            console.log(err)
        })
    }
}