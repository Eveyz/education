var React = require("react");
var ReactDOM = require("react-dom");
var APP = require("./components/APP.js.jsx");
import { Router, Route, Link, browserHistory } from "react-router";

const app = document.getElementById('react-container');

ReactDOM.render(<APP />, app);