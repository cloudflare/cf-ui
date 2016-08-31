const React = require('react');

class Loading extends React.Component {
  render() {
    return (
      <div className="cf-icon--loading" role="status">
        <span className="cf-icon--loading__span">Loading</span>
      </div>
    );
  }
}

module.exports = Loading;
