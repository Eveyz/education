var React = require('react');
import { Link } from 'react-router-dom';

class HEADER extends React.Component {
  constructor(props){
    super(props);
  }

  onSearch() {
    this.props.onSearch();
  }

  loginModal() {
    this.props.loginModal();
  }

  signupModal() {
    this.props.signupModal();
  }

  render() {
    return (
      <div className="header-padding header-shadow border-top-0">
        <div>
          <div className="row no-margin">
            <div className="col m12 valign-wrapper">
              <div className="col m4">
                <p className="emerald no-margin">探索</p>
              </div>
              <div className="col m4">
                <h5 className="center-align no-margin fresh-red"><Link to="/" className="link-styless">GDAX</Link></h5>
              </div>
              <div className="col m1" onClick={this.onSearch.bind(this)}><p className="no-margin chinese-slim">搜索</p></div>
              <div className="col m1"><p className="no-margin chinese-slim text-md-center" onClick={this.signupModal.bind(this)}>登录</p></div>
              <div className="col m2"><p className="no-margin"><Link to="/login" className="link-styless custom-btn">创建我的活动</Link></p></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = HEADER;