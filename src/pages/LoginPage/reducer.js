import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    user: {
        userName: null,
        userPassword: null
    },
    isLoginError: false
};

export default function loginPageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.UPDATE_USER_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.payload.userName
                },
                isLoginError: false
            };
        case actionTypes.UPDATE_USER_PASSWORD:
            return {
                ...state,
                user: {
                    ...state.user,
                    userPassword: action.payload.userPassword
                },
                isLoginError: false
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                isLoginError: true
            };
        case actionTypes.CLEAR_USER_DATA:
            return {
                ...state,
                user: {
                    userName: null,
                    userPassword: null
                }
            };
        default:
            return state;
    }
};