var React = require('react');

import { connect } from 'react-redux';
import HEADER from "../components/HEADER.js.jsx";
import SearchForm from "../components/header/search_form.js";
import { headSearch } from "../actions/header.js";
import { cancelSearch } from "../actions/header.js";
// import { bindActionCreators } from "redux";

class HeaderContainer extends React.Component {
  renderHeader() {
    return (this.props.search ? <SearchForm cancelSearch={this.cancelSearch.bind(this)}/> : <HEADER onSearch={this.performSearch.bind(this)} />);
  }

  performSearch() {
    this.props.doSearch();
  }

  cancelSearch() {
    this.props.cancelSearch();
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // this.props.search
  return {
    search: state.search
  };
}

// Any thing returned from this function will end up as props on the HeaderContainer
function mapDispatchToProps(dispatch) {
  // Whenever search is called, the result should be passed to all reducers
  return {
    doSearch: () => dispatch(headSearch()),
    cancelSearch: () => dispatch(cancelSearch())
  }; // this.props.doSearch will become the result of headSearch
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

