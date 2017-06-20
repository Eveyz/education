var React = require('react');
var BooksList = require('../containers/books_list.js');

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <br/>
        <BooksList />
      </div>
    );
  }
};

module.exports = Dashboard