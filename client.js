var React = require("react");
var ReactDOM = require("react-dom");
var HEADER = require("./components/HEADER.js.jsx");
var APP = require("./components/APP.js.jsx");
var FOOTER = require("./components/FOOTER.js.jsx");
import { Router, Route, Link, browserHistory } from "react-router";

const header = document.getElementById('header');
const app = document.getElementById('react-container');
const footer = document.getElementById('footer');

ReactDOM.render(<HEADER />, header);
ReactDOM.render(<APP />, app);
ReactDOM.render(<FOOTER />, footer);