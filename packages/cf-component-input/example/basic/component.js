import React from 'react';
import {render} from 'react-dom';

import Input from '../../src/index';

class Component extends React.Component {
  state = {
    inputValue: 'Hello World'
  };

  handleChange = value => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
      <div>
        <Input
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}/>

        <Input
          type="search"
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}/>
      </div>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-input--basic')
);
