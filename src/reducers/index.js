import { combineReducers } from 'redux';
import SearchReducer from './header/reducer_search.js';
import BooksReducer from './books/reducer_books.js';

const rootReducer = combineReducers({
  search: SearchReducer,
  books: BooksReducer
});

module.exports = rootReducer;