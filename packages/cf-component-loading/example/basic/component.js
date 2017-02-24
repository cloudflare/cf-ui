const React = require('react');
const { render } = require('react-dom');

const Loading = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-loading--basic'));
