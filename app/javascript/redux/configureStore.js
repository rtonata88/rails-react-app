import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greeting';

const reducer = combineReducers({
  greetingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
