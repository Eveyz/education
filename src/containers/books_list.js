var React = require('react');
var Book = require('../components/books/book.js');

import { connect } from 'react-redux';
import { addBook, deleteBook } from "../actions/books_actions.js";

class BooksList extends React.Component {
  renderList() {
    return this.props.books.map((book, index) => {
      return (
        <Book key={index} book={book} />
      );
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.props.addBook}>添加新书</button>
        <br/>
        <br/>
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // this.props.search
  return {
    books: state.books
  };
}

// Any thing returned from this function will end up as props on the HeaderContainer
function mapDispatchToProps(dispatch) {
  // Whenever search is called, the result should be passed to all reducers
  return {
    addBook: () => dispatch(addBook()),
    deleteBook: () => dispatch(deleteBook())
  }; // this.props.doSearch will become the result of headSearch
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(BooksList);