var React = require('react');

class HEADER extends React.Component {
  constructor(props){
    super(props);
  }

  onSearch() {
    this.props.onSearch();
  }

  render() {
    return (
      <div className="header-padding header-shadow border-top-0">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-1">
              <p className="emerald no-margin">探索</p>
            </div>
            <div className="col-md-2">
              <p className="no-margin">创建我的项目</p>
            </div>
            <div className="col-md-6">
              <h3 className="text-md-center no-margin fresh-red">原创者</h3>
            </div>
            <div className="col-md-1" onClick={this.onSearch.bind(this)}><p className="no-margin chinese-slim">搜索</p></div>
            <div className="col-md-1"><p className="no-margin chinese-slim">加入</p></div>
            <div className="col-md-1"><p className="no-margin">登录</p></div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = HEADER;