const React = require('react');
const { PropTypes } = React;
const ReactSelect = require('react-select');

class Select extends React.Component {
  render() {
    const { async, label, ...props } = this.props;
    const SelectClass = async ? ReactSelect.Async : ReactSelect;
    return (
      <div className="cf-select">
        {label && <label>{label}</label>}
        <SelectClass
          {...props}
          clearable={this.props.searchable}
          backspaceRemoves={this.props.searchable}
        />
      </div>
    );
  }
}

Select.defaultProps = {
  multi: false,
  searchable: false,
  async: false,
  cache: true
};

module.exports = Select;
