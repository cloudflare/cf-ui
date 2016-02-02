const React = require('react');
const {render} = require('react-dom');

const Select = require('../../src/index');

class Component extends React.Component {
  state = {
    value: 1,
    multiValue: [1, 3]
  };

  handleChange = value => {
    this.setState({ value });
  };

  handleMultiChange = value => {
    this.setState({
      multiValue: value.length ? value.split(',') : []
    });
  };

  render() {
    return (
      <div>
        <Select
          label="Basic"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange}/>

        <Select searchable
          label="Searchable"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange}/>

        <Select searchable multi
          label="Searchable Multi"
          value={this.state.multiValue}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleMultiChange}/>
      </div>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-select--basic')
);
