import * as converterActionTypes from './actionTypes';
import * as fetchUtils from '../../utils/fetchUtils';
import { COURSE_ETH_TO_RUB_BASE_API_PATH, COURSE_ETH_TO_RUB_URL } from '../../constants';


export function getCourse() {
    return async function (dispatch) {
        dispatch({type: converterActionTypes.GET_COURSE_START})
        try {
            const responseJson = await fetchUtils.fetchGetRequest(COURSE_ETH_TO_RUB_URL, {
                baseApiPath: COURSE_ETH_TO_RUB_BASE_API_PATH
            });
            const rubs = responseJson.RUB;

            dispatch({
                type: converterActionTypes.GET_COURSE_SUCCESS,
                payload: {rubs}
            });

        } catch (err) {
            dispatch({
                type: converterActionTypes.GET_COURSE_FAILED,
                payload: {err: err.message}
            });
        }
    };
}