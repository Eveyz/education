var React = require('react');

class Book extends React.Component {
  render() {
    return (
      <div>
        <div className="book-single container">
          <div className="row align-items-center">
            <div className="col-md-1">
            </div>
            <div className="col-md-7">
              <h4 className="no-margin">{this.props.book.title}</h4>
              <p className="time-style">{this.props.book.time}前更新</p>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-3">
              <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn btn-outline-info"><b>编辑</b></button>

                <div className="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" className="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </button>
                  <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="#">预览</a>
                    <a className="dropdown-item" href="#">设置</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    );
  }
};

module.exports = Book
