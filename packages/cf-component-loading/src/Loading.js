const React = require('react');
const Icon = require('cf-component-icon');

class Loading extends React.Component {
  render() {
    return (
      <Icon type="loading" label="Loading" role="status"/>
    );
  }
}

module.exports = Loading;
