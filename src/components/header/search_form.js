var React = require('react');

class SearchForm extends React.Component {
  cancelSearch() {
    this.props.cancelSearch();
  }

  render() {
    return (
      <div className="header-padding header-shadow border-top-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-1">
              <p className="emerald no-margin">探索</p>
            </div>
            <div className="col-md-10">
              <input className="no-margin no-border-input" placeholder="Search"></input>
            </div>
            <div className="col-md-1"><p className="no-margin chinese-slim" onClick={this.cancelSearch.bind(this)}>X</p></div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = SearchForm;