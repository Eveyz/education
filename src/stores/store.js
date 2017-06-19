import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';

const store = createStore(rootReducer);

store.subscribe(function() {
  console.log('current state is: ', store.getState());
})

module.exports = store;
