import React, {Component} from "react";
import styles from './loginPage.css';
import { connect } from 'react-redux';
import * as loginPageActions from './actions';
import * as globalActions from '../../global/globalActions';
import {VALID_USER_NAME, VALID_USER_PASSWORD} from "./constants";

class LoginPage extends Component {

    checkUserCrenditals = (event) => {
        event.preventDefault();
        if(this.props.user.userName===VALID_USER_NAME && this.props.user.userPassword===VALID_USER_PASSWORD) {
            console.log('true login');
            window.localStorage.setItem('isUserLoggedIn', '1');
            this.props.logIn();
        } else {
            console.log('false login');
            this.props.logInError();
        }
    };

    render() {
        console.log('LOGIN');
        console.log(this.props);

        return(
            <div className="login-page">
                <form className="login-page__login-form login-form">
                    <input className="login-form__user-name-input user-name-input"
                           type="text" placeholder="Username"
                           onChange={(event) => this.props.updateUserName(event.target.value)}
                    />
                    <input className="login-form__user-password-input user-password-input"
                           type="password" placeholder="Password"
                           onChange={(event) => this.props.updateUserPassword(event.target.value)}
                    />
                    <button className="login-form__submit-btn"
                            disabled={!this.props.user.userName || !this.props.user.userPassword}
                            onClick={this.checkUserCrenditals}>Login</button>

                    {this.props.isLoginError && <div className="login-page__alert alert">
                        Имя пользователя или пароль введены не верно
                    </div> }

                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.loginPage.user,
        isUserLoggedIn: state.global.isUserLoggedIn,
        isLoginError: state.loginPage.isLoginError
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateUserName: value => {
            dispatch(loginPageActions.updateUserName(value));
            },
        updateUserPassword: value => {
            dispatch(loginPageActions.updateUserPassword(value));
        },
        logIn: () => {
            dispatch(globalActions.logIn());
            dispatch(loginPageActions.redirect('/profile'));
        },
        logInError: () => { dispatch(loginPageActions.logInError()); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);