var React = require('react');
var Login = require("./login.js");
var Home = require("./home.js");

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/login' component={Login}/>
  </Switch>
)

module.exports = Main