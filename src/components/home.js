var React = require('react');
var Dashboard = require('./dashboard.js');

class Home extends React.Component {
  render() {
    return (
      <div className="grey-background">
        <Dashboard />
        <div className="container">
          <br/>
          <h3>热门活动</h3>
        </div>
      </div>
    );
  }
};

module.exports = Home