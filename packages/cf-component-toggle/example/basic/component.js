const React = require('react');
const {render} = require('react-dom');

const Toggle = require('../../src/index');

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleValue: false
    };
  }

  handleToggle(value) {
    this.setState({
      toggleValue: value
    });
  }

  render() {
    return (
      <Toggle
        label="Example Toggle"
        name="example"
        value={this.state.toggleValue}
        onChange={this.handleToggle.bind(this)}/>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-toggle--basic')
);
