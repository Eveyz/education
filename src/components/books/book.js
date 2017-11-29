var React = require('react');

class Book extends React.Component {
  render() {
    return (
      <div>
        <div className="book-single">
          <div className="row no-margin">
            <div className="col m1">
            </div>
            <div className="col m7">
              <h5 className="no-margin">{this.props.book.title}</h5>
              <p className="time-style">{this.props.book.time}前更新</p>
            </div>
            <div className="col m1">
            </div>
            <div className="col m3">
              <a className='dropdown-button btn' href='#' data-activates='edit'>编辑</a>
              <ul id='edit' className='dropdown-content'>
                <li><a href="#!">预览</a></li>
                <li><a href="#!">设置</a></li>
              </ul>
            </div>
          </div>
        </div>
        <br/>
      </div>
    );
  }
};

module.exports = Book
