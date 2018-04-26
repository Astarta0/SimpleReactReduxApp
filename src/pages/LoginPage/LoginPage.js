import React, {Component} from "react";
import ReactDOM from "react-dom";

import styles from './loginPage.css';
import { connect } from 'react-redux';
import * as loginPageActions from './actions';
import * as globalActions from '../../global/globalActions';
import {VALID_USER_NAME, VALID_USER_PASSWORD} from "./constants";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginError: false
        };
    }

    updateUserName = () => {
        this.setState((prevState) => {
            if (prevState.isLoginError) {
                return {isLoginError: false}
            }
        });
    };

    updateUserPassword = () => {
        this.setState((prevState) => {
            if (prevState.isLoginError) {
                return {isLoginError: false}
            }
        });
    };

    checkUserCredentials = (event) => {
        console.log(this.refs);
        event.preventDefault();
        if(ReactDOM.findDOMNode(this.refs.nameInput).value===VALID_USER_NAME && ReactDOM.findDOMNode(this.refs.passwordInput).value===VALID_USER_PASSWORD) {
            console.log('true login');
            window.localStorage.setItem('isUserLoggedIn', '1');
            this.props.logIn();
        } else {
            console.log('false login');
            this.setState({
                isLoginError: true
            });
        }
    };

    render() {
        console.log('render LoginPage');
        return(
            <div className="login-page">
                <form className="login-page__login-form login-form">
                    <input className="login-form__user-name-input user-name-input"
                           type="text" placeholder="Username"
                           defaultValue=''
                           ref='nameInput'
                           onChange={this.updateUserName}
                    />
                    <input className="login-form__user-password-input user-password-input"
                           type="password" placeholder="Password"
                           defaultValue=''
                           ref='passwordInput'
                           onChange={this.updateUserPassword}
                    />
                    <button className="login-form__submit-btn"
                            onClick={this.checkUserCredentials}>Login</button>

                    {this.state.isLoginError && <div className="login-page__alert alert">
                        The user name or password is incorrect
                    </div> }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserLoggedIn: state.global.isUserLoggedIn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logIn: () => {
            dispatch(globalActions.logIn());
            dispatch(loginPageActions.redirect('/profile'));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);