import * as converterWidgetActionTypes from './actionTypes';

const INITIAL_STATE = {
    isGetCoursePending: false,
    getCourseError: null,
    rubs: null
};

export default function converterWidgetReducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case converterWidgetActionTypes.GET_COURSE_START:
            return {
                ...state,
                isGetCoursePending: true
            };
        case converterWidgetActionTypes.GET_COURSE_FAILED:
            return {
                ...state,
                isGetCoursePending: false,
                getCourseError: action.payload.err
            };
        case converterWidgetActionTypes.GET_COURSE_SUCCESS:
            return {
                ...state,
                isGetCoursePending: false,
                getCourseError: null,
                rubs: action.payload.rubs
            };
        default:
            return state;
    }
};