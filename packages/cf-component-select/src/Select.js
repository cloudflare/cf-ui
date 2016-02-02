const React = require('react');
const {PropTypes} = React;
const ReactSelect = require('react-select');

class Select extends React.Component {
  static propTypes = {
    label: PropTypes.string,

    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,

    multi: PropTypes.bool,
    searchable: PropTypes.bool,

    value: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })),
    placeholder: PropTypes.string
  };

  static defaultProps = {
    multi: false,
    searchable: false
  };

  render() {
    return (
      <div className="cf-select">
        {this.props.label && <label>{this.props.label}</label>}
        <ReactSelect
          // Simplify if this isnt a searchable select
          searchable={this.props.searchable}
          clearable={this.props.searchable}
          backspaceRemoves={this.props.searchable}

          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}

          multi={this.props.multi}
          value={this.props.value}
          options={this.props.options}
          placeholder={this.props.placeholder}/>
      </div>
    );
  }
};

module.exports = Select;
