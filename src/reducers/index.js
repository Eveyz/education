import { combineReducers } from 'redux';
import SearchReducer from './header/reducer_search.js';

const rootReducer = combineReducers({
  search: SearchReducer
});

module.exports = rootReducer;