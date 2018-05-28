const getAll = state => {
    return state.newsPage;
};

export const getNewsError = state => {
  return getAll(state).getNewsError;
};

export const getNews = state => {
    return getAll(state).news;
};

export const getNewsCount = state => {
    return getAll(state).countOfNews;
};

export const isGetNewsPending = state => {
    return getAll(state).isGetNewsPending;
};