import React, {Component} from "react";
import { Route, Redirect  } from 'react-router-dom';
import {connect} from "react-redux";

class ProtectedComponent extends Component {
    render() {
        const { component: Component, ...props } = this.props;
        return(
                <Route
                    {...props}
                    render={ (props) => {
                                         return this.props.isUserLoggedIn ?
                                         <Component {...props} /> :
                                         <Redirect to="/login" />
                            }
                    }
                />
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserLoggedIn: state.global.isUserLoggedIn
    };
}

export default connect(mapStateToProps)(ProtectedComponent);