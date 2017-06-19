var React = require('react');

class FOOTER extends React.Component {
  render() {
    return (
      <div className="container">
        <hr/>
        <div className="row">
          <div className="col-md-3">
            <p className="no-margin">关于我们</p>
          </div>
          <div className="col-md-3">
            <p className="no-margin">发现</p>
          </div>
          <div className="col-md-3">
            <p className="no-margin">帮助</p>
          </div>
          <div className="col-md-3">
            <p className="no-margin">发现</p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = FOOTER;