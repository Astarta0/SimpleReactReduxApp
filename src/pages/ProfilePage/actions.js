import * as profileActionTypes from './actionTypes';
import * as fetchUtils from '../../utils/fetchUtils';
import {USER_INFO_URL} from '../../constants';

export function getUserInfo(user_id) {
    return async function (dispatch) {

        dispatch({ type: profileActionTypes.GET_USER_INFO_START});

        try{
            const responseJson = await fetchUtils.fetchGetRequest(`${USER_INFO_URL}/${user_id}`);

            const { city, social, languages } = responseJson.data;

            dispatch({
                type: profileActionTypes.GET_USER_INFO_SUCCESS,
                payload: { city, social, languages }
            });

        } catch (err) {

            dispatch({
                type: profileActionTypes.GET_USER_INFO_FAILED,
                payload: {err: err.message}
            });

        }
    };
}