var React = require('react');

import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/users_actions';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const domNode = findDOMNode(this.refs.modal);
    domNode.addEventListener('click', this.handleClickOutside.bind(this), true);
  }

  componentWillUnmount() {
    const domNode = findDOMNode(this.refs.modal);
    domNode.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }

  handleClickOutside(event) {
    const domNode = findDOMNode(this);
    const modalContent = findDOMNode(this.refs.modalContent);
    const target = event.target;
    if (target.contains(modalContent) && target != modalContent) {
      this.closeModal();
    }
  }

  closeModal() {
    this.props.closeModal();
  }

  handleSubmit() {
    const user = [{
      email: findDOMNode(this.refs.email).value,
      username: findDOMNode(this.refs.username).value,
      firstname: findDOMNode(this.refs.firstname).value,
      lastname: findDOMNode(this.refs.lastname).value,
      password: findDOMNode(this.refs.password).value,
      agreement: findDOMNode(this.refs.agreement).checked
    }];
    this.props.signup(user);
  }

  render() {
    return(
      <div className="custom-modal" ref="modal">
        <div className="custom-modal-content" ref="modalContent">
          <span className="custom-close" onClick={this.closeModal.bind(this)}>&times;</span>
          <hr/>
          <input className="form-control form-size" type="text" placeholder="邮箱地址" ref="email"></input>
          <br/>
          <input className="form-control form-size" type="text" placeholder="用户名" ref="username"></input>
          <br/>
          <div className="form-row">
            <div className="col-md-6">
              <input type="text" className="form-control form-size" placeholder="姓氏" ref="firstname"></input>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control form-size" placeholder="名字" ref="lastname"></input>
            </div>
          </div>
          <br/>
          <input className="form-control form-size" type="password" placeholder="密码" ref="password"></input>
          <br/>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" ref="agreement" /> 我同意注册条款
              </label>
            </div>
          </div>
          <button type="button" className="btn btn-lg btn-success btn-block" onClick={this.handleSubmit.bind(this)}>注册</button>
          <hr/>
          <p>已有账号，请直接登录</p>
          <button type="button" className="btn btn-outline-info">登录</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (user) => dispatch(signup(user)),
  };
}

module.exports = connect(null, mapDispatchToProps)(SignupForm);

// module.exports = SignupForm;