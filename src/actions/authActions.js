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
export const login = (formData = {}) =>
{
    return async dispatch =>
    {
        await axios.post(`/api/auth`, formData).then(res =>
        {
            dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res.data })
        }).catch(err =>
        { dispatch({ type: actionTypes.LOGIN_ERROR, payload: err.status }) })
    }
}
export const logout = () =>
{
    return async dispatch =>
    {
        dispatch({ type: actionTypes.LOGOUT })
    }
}

// Setup config/headers and token
export const tokenConfig = getState =>
{
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};
