var React = require('react');
import { findDOMNode } from 'react-dom';

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

  render() {
    return(
      <div className="custom-modal" ref="modal">
        <div className="custom-modal-content" ref="modalContent">
          <span className="custom-close" onClick={this.closeModal.bind(this)}>&times;</span>
          <hr/>
          <input className="form-control form-size" type="text" placeholder="邮箱地址"></input>
          <br/>
          <input className="form-control form-size" type="text" placeholder="用户名"></input>
          <br/>
          <div className="form-row">
            <div className="col-md-6">
              <input type="text" className="form-control form-size" placeholder="姓氏"></input>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control form-size" placeholder="名字"></input>
            </div>
          </div>
          <br/>
          <input className="form-control form-size" type="password" placeholder="密码"></input>
          <br/>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox"/> 我同意注册条款
              </label>
            </div>
          </div>
          <button type="button" className="btn btn-lg btn-success btn-block">注册</button>
          <hr/>
          <p>已有账号，请直接登录</p>
          <button type="button" className="btn btn-outline-info">登录</button>
        </div>
      </div>
    );
  }
}

module.exports = SignupForm;