var React = require("react");
var ReactDOM = require("react-dom");
var Root = require("./src/components/Root.js");
var store = require("./src/stores/store.js");

import { Provider } from "react-redux";
import { Router, Route, Link, browserHistory } from "react-router";

const app = document.getElementById('app-container');

ReactDOM.render(
  <Root store={store} />, 
  app
);