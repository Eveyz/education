var React = require('react');
var Dashboard = require('./dashboard.js');

class Home extends React.Component {
  render() {
    return (
      <div className="grey-background">
        <Dashboard />
      </div>
    );
  }
};

module.exports = Home