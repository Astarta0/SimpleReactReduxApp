import { combineReducers } from 'redux';

import loginPageReducer from '../pages/LoginPage/reducer';
import globalReducer from '../global/globalReducer';

const mainReducer = combineReducers({
    'global': globalReducer,
    'loginPage': loginPageReducer
});

export default mainReducer;