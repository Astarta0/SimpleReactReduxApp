import * as actionTypes from './actionTypes';

export function changeOrderOfArticles(order_value) {
  return {
      type: actionTypes.CHANGE_ORDER_OF_ARTICLES,
      payload: { order_value }
  };
};