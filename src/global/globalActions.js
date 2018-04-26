import * as globalActionTypes from './globalActionTypes';

export function logIn() {
  return {
      type: globalActionTypes.LOGIN
  };
};

export function logOut() {
    return {
        type: globalActionTypes.LOGOUT
    };
};