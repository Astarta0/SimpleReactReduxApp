import * as globalActionTypes from './globalActionTypes';
const userIdFromStorage = Number(localStorage.getItem('userId'));
const INITIAL_STATE = {
    isLoginPending: false,
    userID: (!userIdFromStorage) ? null : userIdFromStorage,
    loginError: null
};

export default function globalReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case globalActionTypes.LOGOUT:
            return {
                ...state,
                userID: null
            };
        case globalActionTypes.LOGIN_START:
            return {
                ...state,
                isLoginPending: true
            };
        case globalActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginPending: false,
                userID: action.payload.userID
            };
        case globalActionTypes.LOGIN_FAILED:
            return {
                ...state,
                isLoginPending: false,
                loginError: action.payload.err
            };
        case globalActionTypes.CLEAR_LOGIN_ERROR:
            return {
                ...state,
                loginError: null
            };
        default:
            return state;
    }
};