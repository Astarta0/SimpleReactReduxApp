import React, {Component} from "react";
import NewsItem from './NewsItem';
import styles from './main.css';

export default class NewsList extends Component {
    render() {
        const {news, newsCount} = this.props;
        return (
            <div className='news-list news-page__news-list'>
                {
                    news.map(newsItem => {
                        return <NewsItem key={newsItem.id} text={newsItem.text} title={newsItem.title}/>;
                    })
                }

                <div className='news-page__count'>Total news: {newsCount}</div>
            </div>
        );

    }
}