import React, {Component} from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as globalActions from '../global/globalActions';
import * as loginPageActions from '../pages/LoginPage/actions';

class Header extends Component {
    render() {
        return(
            <header className='header'>
                <ul className='menu header__menu menu_theme_orange'>
                    <li className='menu__item menu__item_border menu-item'>
                        <Link to='/' className="menu-item__link menu-item__link_color_is_orange" replace>Home</Link>
                    </li>
                    <li className='menu__item menu__item_border menu-item'>
                        <Link to='/news' className="menu-item__link menu-item__link_color_is_orange" replace>News</Link>
                    </li>
                    <li className='menu__item menu__item_border menu-item'>
                        <Link to='/profile' className="menu-item__link menu-item__link_color_is_orange" replace>Profile</Link>
                    </li>
                    { (this.props.isUserLoggedIn) && (
                        <li className='menu__item menu__item_border menu-item'>
                            <Link to='/' className="menu-item__link menu-item__link_color_is_orange"
                                  onClick={this.props.logOut}
                                  replace>
                                LogOut
                            </Link>
                        </li>
                    )}
                </ul>
            </header>
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
        logOut: () => {
            dispatch(globalActions.logOut());
            dispatch(loginPageActions.clearUserData());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);