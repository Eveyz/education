var React = require('react');

class FOOTER extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">原创者</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">关于我们</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">发现</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">帮助</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">发现</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2017 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}

module.exports = FOOTER;