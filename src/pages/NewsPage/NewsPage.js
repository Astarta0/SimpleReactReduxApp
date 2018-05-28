import React, {Component} from "react";
import {connect} from 'react-redux';

import * as newsActions from './actions';
import * as newsSelectors from './selectors';
import NewsList from './NewsList';
import styles from './main.css';

class NewsPage extends Component {

    componentDidMount() {
        this.props.getNews();
    }

    render() {
        const {news, newsCount, isGetNewsPending, getNewsError } = this.props;
        if (isGetNewsPending || getNewsError || !news) {
            return (
                <div className='news-page'>
                    <h2 className='news-page__message-container'>{ (getNewsError) ? `${getNewsError}` : 'Data Loading...'}</h2>
                </div>
            );
        }
        return(
            <div className='news-page'>
                <NewsList news={news} newsCount={newsCount}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        getNewsError: newsSelectors.getNewsError(state),
        news: newsSelectors.getNews(state),
        newsCount: newsSelectors.getNewsCount(state),
        isGetNewsPending: newsSelectors.isGetNewsPending(state)

    };
}

function mapDispatchToProps(dispatch) {
    return {
        getNews: () => {
            dispatch(newsActions.getNews());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);