import * as globalAactionTypes from './globalActionTypes';

export function logIn() {
  return {
      type: globalAactionTypes.LOGIN
  };
};

export function logOut() {
    return {
        type: globalAactionTypes.LOGOUT
    };
};