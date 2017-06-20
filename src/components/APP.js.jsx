var React = require('react');

var HEADERCONTAINER = require("../containers/header_container.js");
var FOOTER = require("./FOOTER.js.jsx");
var Main = require("./main.js");

import { BrowserRouter as Router, Route } from "react-router-dom";

class APP extends React.Component {
  render() {
    return (
      <div>
        <HEADERCONTAINER />
        <Main />
        <FOOTER />
      </div>
    );
  }
};

module.exports = APP;