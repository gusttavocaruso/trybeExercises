import { createStore, compose } from 'redux';
import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';

const extension = window.devToolsExtension() || ((f) => f);

export const rootReducer = combineReducers({ loginReducer, registerReducer });
export const store = createStore(rootReducer, compose(extension));
