import axios from "axios";
import * as actionTypes from '../constants/actionTypes';

export function register (formData = {})
{
    return async dispatch =>
    {
        await axios.post(`/api/users`, formData)
            .then(response =>
            {
                console.log(response)
                dispatch({ type: actionTypes.REGISTER_SUCCESS, payload: response.data })
            })
            .catch(err =>
            {
                dispatch({ type: actionTypes.REGISTER_ERROR, payload: err.response.status })
            })
    }
}
export const logout = () =>
{
    return async dispatch =>
    {
        dispatch({ type: actionTypes.LOGOUT })
    }
}

export const login = (userData) =>
{
    return async dispatch =>
    {
        await axios.post().then(res =>
        {
            console.log(res)
        }).catch(err =>
        {
            console.log(err)
        })
    }
}