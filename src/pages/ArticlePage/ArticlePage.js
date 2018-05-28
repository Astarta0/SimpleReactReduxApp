import React, {Component} from "react";
import { connect } from 'react-redux';

import ArticleList from './ArticleList';
import styles from './articlePage.css';
import * as articlePageAction from './actions';
import * as articlePageSelectors from './selectors';

class ArticlePage extends Component {
    render() {
        return(
            <div>
                <div className='select-order'>
                    <label className="label">Select the order of articles:</label>
                    <select value={this.props.orderOfArticles} onChange={this.props.changeOrderOfArticles}>
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>
                    </select>
                </div>
                <ArticleList articles={this.props.I_NEWS} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        I_NEWS: articlePageSelectors.getOrderedArticles(state),
        orderOfArticles: articlePageSelectors.getOrderOfArticles(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
       changeOrderOfArticles: (event) => dispatch(articlePageAction.changeOrderOfArticles(event.target.value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);