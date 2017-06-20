var React = require("react");
var ReactDOM = require("react-dom");

var App = require("./APP.js.jsx");

import PropTypes from 'prop-types'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

module.exports = Root