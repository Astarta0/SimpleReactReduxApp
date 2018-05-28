import React, {Component} from "react";
import ReactDOM from "react-dom";

import styles from './loginPage.css';
import { connect } from 'react-redux';
import * as globalActions from '../../global/globalActions';
import * as globalSelectors from '../../global/globalSelectors';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.inputNameRef = React.createRef();
        this.inputPasswordRef = React.createRef();
    }

    updateUserData = () => {
            if (this.props.loginError) {
              this.props.clearLoginError();
            }
    };

    checkUserCredentials = (event) => {
        const userName = this.inputNameRef.current.value;
        const userPassword = this.inputPasswordRef.current.value;

        event.preventDefault();
        this.props.logIn(userName, userPassword);

    };

    render() {
        // TODO: disable button for empty values of fields
        const loginError = this.props.loginError;
        return(
            <div className="login-page">
                <form className="login-page__login-form login-form">
                    <input className="login-form__user-name-input user-name-input"
                           type="text" placeholder="Username"
                           defaultValue=''
                           ref={this.inputNameRef}
                           onChange={this.updateUserData}
                    />
                    <input className="login-form__user-password-input user-password-input"
                           type="password" placeholder="Password"
                           defaultValue=''
                           ref={this.inputPasswordRef}
                           onChange={this.updateUserData}
                    />
                    <button className="login-form__submit-btn"
                            onClick={this.checkUserCredentials}
                            disabled={this.props.isLoginPending}>
                        {this.props.isLoginPending ? 'Loading...' : 'Login'}
                    </button>

                    {loginError && <div className="login-page__alert alert">
                        {loginError}
                    </div> }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoginPending: globalSelectors.isLoginPending(state),
        loginError: globalSelectors.getLoginError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logIn: (userName, userPassword) => {
            dispatch(globalActions.logIn(userName, userPassword));
        },
        clearLoginError: () => {
            dispatch(globalActions.clearLoginError());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);