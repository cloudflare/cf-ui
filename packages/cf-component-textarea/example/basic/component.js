import React from 'react';
import { render } from 'react-dom';
import Textarea from '../../src/index';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: ''
    };
  }

  handleTextareaChange(e) {
    this.setState({
      textareaValue: e.target.value
    });
  }

  render() {
    return (
      <Textarea
        name="example"
        value={this.state.textareaValue}
        onChange={this.handleTextareaChange.bind(this)}
      />
    );
  }
}

render(<Component />, document.getElementById('cf-component-textarea--basic'));
