import React, {Component} from "react";
import styles from './main.css';

export default class NewsItem extends Component {
    render() {
        const {text, title} = this.props;
        return (
            <div className='news-list__news-item news-item'>
                <div className='news-item__title'>{title}</div>
                <div className='news-item__text'>{text}</div>
                <hr />
            </div>
        );
    }
}