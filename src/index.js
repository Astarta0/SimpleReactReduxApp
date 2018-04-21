import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { store } from './store/configureStore';

import App from "./components/app";
import { history } from "./history";

import styles from './main.css';

const MainApp = () => {
    return (
        <Provider store={store}>
            <Router history={history} >
                <App />
            </Router>
        </Provider>
    );
};

ReactDOM.render(<MainApp />, document.getElementById("root"));

