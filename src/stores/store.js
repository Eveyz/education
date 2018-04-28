import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const middleware = applyMiddleware(thunk, logger());
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(function() {
  console.log('current state is: ', store.getState());
})

module.exports = store;
