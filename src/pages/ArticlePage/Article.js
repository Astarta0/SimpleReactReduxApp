import React, {Component} from "react";
import moment from 'moment';

export default class Article extends Component {
    render() {
        const {author, description, publishedAt, title} = this.props.article;
        return(
            <li className='articleList__item article-item' data-name={author}>
                <div className='article-item__date'>{moment(publishedAt).format('DD-MMMM-YYYY')}</div>
                <div className='article-item__title'>{title}</div>
                <div className='article-item__description'>{description}</div>
            </li>
        );
    }
}