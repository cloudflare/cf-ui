const React = require('react');

class Loading extends React.Component {
  render() {
    return (
      <div className="cf-loading" role="status">
        <span className="cf-loading__label">Loading</span>
      </div>
    );
  }
}

module.exports = Loading;
