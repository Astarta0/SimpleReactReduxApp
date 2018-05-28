import React, {Component} from "react";
import {SITES_ICONS} from "../../constants";
import { sortSocials } from './utils';
import styles from './main.css';

export default class UserCard extends Component {
    render() {
        const {city, social, languages} = this.props.user;
        return(
            <div className='user-card profile-page__user-card'>
                <h3>Info about user</h3>
                <hr/>
                <div className='user-card__city-header user-card__city-header_bold'> City: </div>
                <div>{city}</div>

                <div className='user-card__city-header_bold'>Language skills:</div>
                <ul>
                    {
                        languages.map((language, index) => {
                            return <li key={index}>{language}</li>;
                        })
                    }
                </ul>

                <div className='user-card__city-header_bold'>Social networks:</div>
                <ul>
                    {
                        sortSocials(social).map((socItem,index) => {
                            return (
                                <li key={index}>
                                    <a href={socItem.link} target="_blank">
                                        <img src={SITES_ICONS[socItem.label]} width="30" height="30"/>
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>

            </div>
        );
    }
}

