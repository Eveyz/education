var React = require("react");

import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { login } from '../actions/users_actions';

class Login extends React.Component {

  handleSubmit() {
    const user = [{
      email: findDOMNode(this.refs.email).value,
      password: findDOMNode(this.refs.password).value
    }];
    // console.log("user info");
    // console.log(user);
    this.props.login(user);
  }

  render() {
    return (
      <div className="container">
        <h3>Login page</h3>
        <hr/>
        <input 
          type="text" 
          placeholder="Email address" 
          ref="email">
        </input>
        <input 
          type="text" 
          placeholder="Password" 
          ref="password">
        </input>
        <br/>
        <br/>
        <button type="button" className="btn btn-success btn-sm" onClick={this.handleSubmit.bind(this)}>Login</button>
      </div>
    );
  }
};

// Any thing returned from this function will end up as props on the Login component
function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(login(user)),
  }; // this.props.doSearch will become the result of headSearch
}

// module.exports = Login;
module.exports = connect(null, mapDispatchToProps)(Login);