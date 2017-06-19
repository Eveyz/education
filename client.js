var React = require("react");
var ReactDOM = require("react-dom");
var HEADERCONTAINER = require("./src/containers/header_container.js");
var APP = require("./src/components/APP.js.jsx");
var FOOTER = require("./src/components/FOOTER.js.jsx");
var store = require("./src/stores/store.js");

import { Provider } from "react-redux";
import { Router, Route, Link, browserHistory } from "react-router";

const header = document.getElementById('header');
const app = document.getElementById('react-container');
const footer = document.getElementById('footer');

ReactDOM.render(
  <Provider store={store}>
    <HEADERCONTAINER />
  </Provider>,
  header
);
ReactDOM.render(<APP />, app);
ReactDOM.render(<FOOTER />, footer);