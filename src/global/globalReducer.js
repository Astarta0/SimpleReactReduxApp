import * as globalActionTypes from './globalActionTypes';

const INITIAL_STATE = {
    isUserLoggedIn: Boolean(localStorage.getItem('isUserLoggedIn'))
};

export default function globalReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case globalActionTypes.LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false
            };
        case globalActionTypes.LOGIN:
            return {
                ...state,
                isUserLoggedIn: true
            };
        default:
            return state;
    }
};