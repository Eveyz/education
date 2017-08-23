var React = require("react");
var ReactDOM = require("react-dom");
var Root = require("./src/components/Root.js");
var store = require("./src/stores/store.js");

import { Provider } from "react-redux";
import { Router, Route, Link, browserHistory } from "react-router";

// import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

const app = document.getElementById('app-container');
// const middleware = applyMiddleware(thunk, logger());

ReactDOM.render(
  <Root store={store} />, 
  app
);