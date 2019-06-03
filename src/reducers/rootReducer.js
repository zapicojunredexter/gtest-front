/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import userStore from './user/user.reducer';
export default combineReducers({
    userStore,
});