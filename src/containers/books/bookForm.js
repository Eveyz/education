var React = require("react");

import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { addBook } from '../../actions/books_actions';

class BookForm extends React.Component {

  handleSubmit() {
    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value
    }];
    // console.log(book);
    this.props.addBook(book);
  }

  render() {
    return (
      <div className="container">
        <h3>Add new book</h3>
        <hr/>
        <input 
          type="text" 
          placeholder="Book title" 
          ref="title">
        </input>
        <input 
          type="text" 
          placeholder="Book description" 
          ref="description">
        </input>
        <br/>
        <br/>
        <button type="button" className="btn btn-success btn-sm" onClick={this.handleSubmit.bind(this)}>Add</button>
      </div>
    );
  }
};

// Any thing returned from this function will end up as props on the BookForm component
function mapDispatchToProps(dispatch) {
  return {
    addBook: (book) => dispatch(addBook(book)),
  };
}

module.exports = connect(null, mapDispatchToProps)(BookForm);