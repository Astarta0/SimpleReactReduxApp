import { I_NEWS } from '../../initialNewsModel';
import * as articleListPageActionTypes from './actionTypes';

const INITIAL_STATE = {
    ...I_NEWS,
    orderOfArticles: 'A-Z'
};

export default function articlePageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case articleListPageActionTypes.CHANGE_ORDER_OF_ARTICLES:
            return {
                ...state,
                orderOfArticles: action.payload.order_value
            };
        default:
            return state;
    }
};