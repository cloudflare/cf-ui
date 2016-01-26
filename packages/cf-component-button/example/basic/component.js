import React from 'react';
import {render} from 'react-dom';
import {
  ButtonGroup,
  Button
} from '../../src/index';

class Component extends React.Component {
  handleButtonOneClick = () => {
    console.log('Clicked Button One!');
  };

  handleButtonTwoClick = () => {
    console.log('Clicked Button Two!');
  };

  render() {
    return (
      <ButtonGroup>
        <Button type="primary" onClick={this.handleButtonOneClick}>
          Button One
        </Button>
        <Button type="primary" onClick={this.handleButtonTwoClick}>
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
