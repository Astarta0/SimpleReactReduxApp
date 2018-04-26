import React, {Component} from "react";

import { I_NEWS } from '../../initialNewsModel';
import ArticleList from './ArticleList';
import styles from './newsPage.css';

export default class NewsPage extends Component {
    constructor(props) {
        super(props);

        this.state={
            defaultValue: 'A-Z'
        };
    }

    handleSelectOption = (event) => {
        this.setState({defaultValue: event.target.value});
    };

    render() {
        console.log('render news');
        return(
            <div>
                <div className='select-order'>
                    <label className="label">Select the order of articles:</label>
                    <select value={this.state.defaultValue} onChange={this.handleSelectOption}>
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>
                    </select>
                </div>
                <ArticleList articles={I_NEWS.articles} order={this.state.defaultValue}/>
            </div>
        );
    }
};