const getAll = state => {
    return state.profilePage;
};

export const isGetInfoPending = state => {
  return getAll(state).isGetInfoPending;
};

export const getUserData = state => {
  return getAll(state).user;
};

export const getUserInfoError = state => {
  return getAll(state).getUserInfoError;
};