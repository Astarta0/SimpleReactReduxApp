import * as globalActionTypes from './globalActionTypes';
import * as fetchUtils from '../utils/fetchUtils';
import {LOGIN_URL} from '../constants';

export function logIn(userName, userPassword) {
    return async function (dispatch, getState) {
        dispatch({type: globalActionTypes.LOGIN_START});

        try {
            const responseJson = await fetchUtils.fetchPostRequest(LOGIN_URL, {email: userName, password: userPassword});

            const userID = responseJson.data.id;

            dispatch({
                type: globalActionTypes.LOGIN_SUCCESS,
                payload: {userID}
            });

            localStorage.setItem('userId', userID);

            dispatch(redirect('/profile'));

        } catch (err) {

            dispatch({
                type: globalActionTypes.LOGIN_FAILED,
                payload: {err: err.message}
            });

        }
    };
}

export function logOut() {
    return {
        type: globalActionTypes.LOGOUT
    };
}

export function redirect(url) {
    return {
        type: globalActionTypes.REDIRECT,
        payload: {url}
    };
}

export function clearLoginError() {
    return {
        type: globalActionTypes.CLEAR_LOGIN_ERROR,
    };
}