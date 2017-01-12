const React = require('react');
const {PropTypes} = React;
const ReactSelect = require('react-select');

class Select extends React.Component {
  render() {
    const SelectClass = this.props.async ? ReactSelect.Async : ReactSelect;
    return (
      <div className="cf-select">
        {this.props.label && <label>{this.props.label}</label>}
        <SelectClass
          // Simplify if this isnt a searchable select
          searchable={this.props.searchable}
          clearable={this.props.searchable}
          backspaceRemoves={this.props.searchable}

          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          loadOptions={this.props.loadOptions}

          multi={this.props.multi}
          value={this.props.value}
          options={this.props.options}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          cache={this.props.cache}/>
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  loadOptions: PropTypes.func,

  multi: PropTypes.bool,
  searchable: PropTypes.bool,
  async: PropTypes.bool,
  disabled: PropTypes.bool,
  cache: PropTypes.bool,

  value: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    disabled: PropTypes.bool
  })),
  placeholder: PropTypes.string
};

Select.defaultProps = {
  multi: false,
  searchable: false,
  async: false,
  cache: true
};

module.exports = Select;
