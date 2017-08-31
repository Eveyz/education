var React = require('react');

import { connect } from 'react-redux';
import HEADER from "../components/HEADER.js.jsx";
import SearchForm from "../components/header/search_form.js";
import { headSearch } from "../actions/header.js";
import { cancelSearch } from "../actions/header.js";
import { login_modal, signup_modal } from "../actions/users_actions.js";
import { close_modal } from "../actions/modal_actions.js";
import SignupForm from "./signup_form.js";
// import { bindActionCreators } from "redux";

class HeaderContainer extends React.Component {
  renderHeader() {
    return (this.props.search ? <SearchForm cancelSearch={this.cancelSearch.bind(this)}/> : <HEADER onSearch={this.performSearch.bind(this)} loginModal={this.login_modal.bind(this)} signupModal={this.signup_modal.bind(this)} />);
  }

  showSignupForm() {
    return (this.props.signup ? <SignupForm closeModal={this.closeModal.bind(this)} /> : "");
  }

  performSearch() {
    this.props.doSearch();
  }

  cancelSearch() {
    this.props.cancelSearch();
  }

  login_modal() {
    this.props.login_modal();
  }

  signup_modal() {
    this.props.signup_modal();
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.showSignupForm()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // this.props.search
  return {
    search: state.search,
    login: state.login,
    signup: state.signup
  };
}

// Any thing returned from this function will end up as props on the HeaderContainer
function mapDispatchToProps(dispatch) {
  // Whenever search is called, the result should be passed to all reducers
  return {
    doSearch: () => dispatch(headSearch()),
    cancelSearch: () => dispatch(cancelSearch()),
    login_modal: () => dispatch(login_modal()),
    signup_modal: () => dispatch(signup_modal()),
    closeModal: () => dispatch(close_modal())
  }; // this.props.doSearch will become the result of headSearch
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

