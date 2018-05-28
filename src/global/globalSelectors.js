const getAll = state => {
    return state.global;
};

export const isUserloggedIn = state => {
    if (getUserID(state)) {
        return true;
    }
    return false;
};

export const getUserID = state => {
    return getAll(state).userID;
};

export const isLoginPending = state => {
    return getAll(state).isLoginPending;
};

export const getLoginError = state => {
    return getAll(state).loginError;
};