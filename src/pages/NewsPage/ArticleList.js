import React, {Component} from "react";
import Article from './Article';

export default class ArticleList extends Component {
    render() {
        const articles = this.props.articles;
        const order = this.props.order;

        articles.sort(function(a,b) {
            if (a.author > b.author) {
                return 1;
            }
            if (a.author < b.author) {
                return -1;
            }

            return 0;
        });

        const articleItems = articles.map((article) => {
            return <Article article={article} key={article.id}/>
        });

        return (
            <div>
                <ul className='articleList'>
                    {order==='A-Z' ? articleItems : articleItems.reverse()}
                </ul>
            </div>
        );
    }
}