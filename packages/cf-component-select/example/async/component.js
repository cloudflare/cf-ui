import React from 'react';
import { render } from 'react-dom';
import Select from '../../src/index';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'one' };
  }

  handleChange(value) {
    this.setState({ value });
  }

  getOptions(input, callback) {
    setTimeout(
      () => {
        return callback(null, {
          options: [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'Three' }
          ].filter(option => option.value.indexOf(input) >= 0)
        });
      },
      500
    );
  }

  render() {
    return (
      <div>
        <Select
          searchable
          multi
          async
          label="Async Select"
          value={this.state.value}
          loadOptions={this.getOptions.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-select--async'));
