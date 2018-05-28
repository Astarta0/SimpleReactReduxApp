import React, {Component} from "react";
import {connect} from 'react-redux';
import * as profileActions from './actions';
import * as globalSelectors from '../../global/globalSelectors';
import * as profileSelectors from './selectors';
import UserCard from './UserCard';
import styles from './main.css';

class ProfilePage extends Component {

    componentDidMount() {
        this.props.getUserInfo(this.props.userID);
    }

    render() {
        const {isGetInfoPending, user, isGetUserInfoError} = this.props;

        if (isGetInfoPending || !user || isGetUserInfoError) {
            return (
                <div className='profile-page'>
                    <h2 className='profile-page__message-container'>{ (isGetUserInfoError) ? `${isGetUserInfoError}` : 'Data Loading...'}</h2>
                </div>
            );
        } else {
            return (
                <div className='profile-page'>
                  <UserCard user={user}/>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        userID: globalSelectors.getUserID(state),
        isGetInfoPending: profileSelectors.isGetInfoPending(state),
        user: profileSelectors.getUserData(state),
        isGetUserInfoError: profileSelectors.getUserInfoError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserInfo: (user_id) => {
            dispatch(profileActions.getUserInfo(user_id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);