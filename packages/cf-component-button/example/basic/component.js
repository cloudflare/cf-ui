const React = require('react');
const {render} = require('react-dom');
const {
  ButtonGroup,
  Button
} = require('../../src/index');

class Component extends React.Component {
  handleButtonOneClick() {
    console.log('Clicked Button One!');
  }

  handleButtonTwoClick() {
    console.log('Clicked Button Two!');
  }

  render() {
    return (
      <ButtonGroup>
        <Button type="primary" onClick={this.handleButtonOneClick.bind(this)}>
          Button One
        </Button>
        <Button type="primary" onClick={this.handleButtonTwoClick.bind(this)}>
          Button Two
        </Button>
      </ButtonGroup>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-button--basic')
);
