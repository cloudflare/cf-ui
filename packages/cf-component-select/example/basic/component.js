import React from 'react';
import { render } from 'react-dom';
import Select from '../../src/index';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      multiValue: [1, 3]
    };
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleMultiChange(values) {
    this.setState({
      multiValue: values.map(selected => selected.value)
    });
  }

  render() {
    return (
      <div>
        <Select
          label="Basic"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two', disabled: true },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />

        <Select
          searchable
          label="Searchable"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />

        <Select
          searchable
          multi
          label="Searchable Multi"
          value={this.state.multiValue}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleMultiChange.bind(this)}
        />

        <Select
          disabled
          label="Disabled"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-select--basic'));
