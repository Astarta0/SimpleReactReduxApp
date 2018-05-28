import { combineReducers } from 'redux';

import profilePageReducer from '../pages/ProfilePage/reducer';
import articlePageReducer from '../pages/ArticlePage/reducer';
import globalReducer from '../global/globalReducer';
import newsPageReducer from '../pages/NewsPage/reducer';

const mainReducer = combineReducers({
    'global': globalReducer,
    'profilePage': profilePageReducer,
    'articlePage': articlePageReducer,
    'newsPage': newsPageReducer
});

export default mainReducer;