import React, {Component} from "react";
import Article from './Article';

export default class ArticleList extends Component {
    render() {
        const articles = this.props.articles;

        const articleItems = articles.map((article) => {
            return <Article article={article} key={article.id}/>
        });

        return (
            <div>
                <ul className='articleList'>
                    { articleItems }
                </ul>
            </div>
        );
    }
}