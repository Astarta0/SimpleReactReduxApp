import * as newsActionTypes from './actionTypes';

const INITIAL_STATE = {
    isGetNewsPending: false,
    getNewsError: null,
    news: null,
    countOfNews: null
};

export default function newsPageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case newsActionTypes.GET_NEWS_START:
            return {
                ...state,
                isGetNewsPending: true
            };
        case newsActionTypes.GET_NEWS_FAILED:
            return {
                ...state,
                isGetNewsPending: false,
                getNewsError: action.payload.err
            };
        case newsActionTypes.GET_NEWS_SUCCESS:
            return {
                ...state,
                isGetNewsPending: false,
                getNewsError: null,
                news: action.payload.news,
                countOfNews: action.payload.countOfNews
            };
        default:
            return state;
    }
};