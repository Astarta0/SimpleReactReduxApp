import React, {Component} from "react";
import ConvertWidget from './ConvertWidget';
import styles from './converterPage.css';
export default class ConverterPage extends Component {
    render() {
        return(
            <div className='main-page'>
                <ConvertWidget />
            </div>
        );
    }
}