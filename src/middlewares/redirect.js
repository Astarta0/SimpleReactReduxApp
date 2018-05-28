import React from "react";
import { history } from "../history";
import * as globalActionTypes from "../global/globalActionTypes";

export function redirect(store) {
    return function (next) {
      return function (action) {
          if (action.type === globalActionTypes.REDIRECT) {
              console.log('REDIRECT');
              console.log(action);

              history.push(action.payload.url);
          }
          return next(action);
      };
    };
};