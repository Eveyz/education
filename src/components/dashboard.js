var React = require('react');
var BooksList = require('../containers/books/books_list.js');
var BookForm = require('../containers/books/bookForm');

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <br/>
        <BookForm />
        <BooksList />
      </div>
    );
  }
};

module.exports = Dashboard