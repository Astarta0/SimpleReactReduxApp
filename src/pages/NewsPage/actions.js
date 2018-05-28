import * as newsPageActionTypes from './actionTypes';
import * as fetchUtils from '../../utils/fetchUtils';
import { NEWS_URL } from '../../constants';

export function getNews() {
    return async function (dispatch) {

        dispatch({type: newsPageActionTypes.GET_NEWS_START});

        try {
            const responseJson = await fetchUtils.fetchGetRequest(NEWS_URL);

            const news = responseJson.data;
            const countOfNews = news.length;
            dispatch({
                type: newsPageActionTypes.GET_NEWS_SUCCESS,
                payload: { news, countOfNews }
            });

        } catch (err) {

            dispatch({
                type: newsPageActionTypes.GET_NEWS_FAILED,
                payload: {err: err.message}
            });

        }
    };
}