import { combineReducers } from 'redux';
import SearchReducer from './header/reducer_search.js';
import BooksReducer from './books/reducer_books.js';
import LoginReducer from './reducer_login.js';
import SignupReducer from './reducer_signup.js';

const rootReducer = combineReducers({
  search: SearchReducer,
  login: LoginReducer,
  signup: SignupReducer,
  books: BooksReducer
});

module.exports = rootReducer;