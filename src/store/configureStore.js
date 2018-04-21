import { createStore, applyMiddleware } from 'redux';
import mainReducer from '../mainReducer/mainReducer';
import logger from 'redux-logger';
import { redirect } from '../middlewares/redirect';

// TODO attach redux devtools
export const store = createStore(mainReducer, applyMiddleware(redirect, logger));

window.store = store;