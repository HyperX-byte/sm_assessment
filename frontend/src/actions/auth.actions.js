import { authConstants, userConstants } from "./constants"
import axios from "../helpers/axios";


export const register = (user) => {

    console.log(user);

    return async (dispatch) => {
        dispatch({
            type: userConstants.USER_REGISTER_REQUEST
        })
        const res = await axios.post(`/register`, {
            ...user
        });

        if (res.status === 200) {
            const {message} = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {message}
            });
        }else{
            console.log(res.data.errors);
            if(res.status === 201){
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload:{
                        error: res.data.errors
                    }
                });
            }
        }
    }
}

export const login = (user) => {

    console.log(user);

    return async (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST
        })
        const res = await axios.post(`/login`, {
            ...user
        });

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user',JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload:{
                        error: res.data.error
                    }
                });
            }
        }
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => { 
        const token =localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload:{
                    error: 'Failed to Login'
                }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {
        dispatch({type: authConstants.LOGOUT_REQUEST})
        const res = await axios.post('/logout')
        if(res.status === 200){
            localStorage.clear();
            dispatch({ type: authConstants.LOGOUT_SUCCESS });
        }else{
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            })
        }
        
    }
}