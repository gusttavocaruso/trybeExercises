import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({ userReducer, questionReducer });

export default rootReducer;
