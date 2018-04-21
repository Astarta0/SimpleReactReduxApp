import * as actionTypes from './actionTypes';

export function updateUserName(userName) {
    return {
        type: actionTypes.UPDATE_USER_NAME,
        payload: { userName }
    };
};

export function updateUserPassword(userPassword) {
    return {
        type: actionTypes.UPDATE_USER_PASSWORD,
        payload: { userPassword }
    };
};

export function logInError() {
  return {
      type: actionTypes.LOGIN_ERROR
  };
};

export function clearUserData() {
    return {
        type: actionTypes.CLEAR_USER_DATA
    };
    
}

export function redirect(url) {
    return {
        type: actionTypes.REDIRECT,
        payload: { url }
    };
};