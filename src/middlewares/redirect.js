import React from "react";
import * as loginActionTypes from '../pages/LoginPage/actionTypes';
import { history } from "../history";

export function redirect(store) {
    return function (next) {
      return function (action) {
          if (action.type === loginActionTypes.REDIRECT) {
              console.log('REDIRECT');
              console.log(action);

              history.push(action.payload.url);
          }
          return next(action);
      };
    };
};