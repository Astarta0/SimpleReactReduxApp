const getAll = (state) => {
    return state.articlePage;
};

export const getOrderOfArticles = (state) => {
    return getAll(state).orderOfArticles;
};

export const getArticles = (state) => {
    return getAll(state).articles;
};

export const getOrderedArticles = (state) => {
    let articles = getArticles(state);
    articles.sort(function(a,b) {
        if (a.author > b.author) {
            return 1;
        }
        if (a.author < b.author) {
            return -1;
        }
        return 0;
    });

    let order = getOrderOfArticles(state);
    switch (order) {
        case 'A-Z':
            return articles;
        case 'Z-A':
            return articles.reverse();
        default:
            return articles
    }
};