import authReducer from './auth.reducer';
import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import listReducer from './list.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    list: listReducer
});

export default rootReducer;