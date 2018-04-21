import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from '../mainReducer/mainReducer';
import logger from 'redux-logger';
import { redirect } from '../middlewares/redirect';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(mainReducer, composeEnhancers(applyMiddleware(redirect, logger)));

window.store = store;