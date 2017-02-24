const React = require('react');
const { render } = require('react-dom');

const Input = require('../../src/index');

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Hello World'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value
    });
  }

  render() {
    return (
      <div>
        <Input
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />

        <Input
          type="search"
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-input--basic'));
