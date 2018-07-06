const getAll = state => {
    return state.converterPage;
};

export const getCourseError = state => {
    return getAll(state).getCourseError;
};

export const isGetCoursePending = state => {
    return getAll(state).isGetCoursePending;
};

export const getCourseRubsForOneEthereum = state => {
    return getAll(state).rubs;
};