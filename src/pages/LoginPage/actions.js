import * as actionTypes from './actionTypes';

export function redirect(url) {
    return {
        type: actionTypes.REDIRECT,
        payload: { url }
    };
};