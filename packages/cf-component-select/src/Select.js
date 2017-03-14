import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';

class Select extends React.Component {
  render() {
    const { async, creatable, searchable, label, ...props } = this.props;

    let SelectClass;
    if (async) {
      SelectClass = creatable ? ReactSelect.AsyncCreatable : ReactSelect.Async;
    } else {
      SelectClass = creatable ? ReactSelect.Creatable : ReactSelect;
    }

    return (
      <div className="cf-select">
        {label && <label>{label}</label>}
        <SelectClass
          {...props}
          clearable={searchable || creatable}
          backspaceRemoves={searchable || creatable}
        />
      </div>
    );
  }
}

Select.defaultProps = {
  multi: false,
  searchable: false,
  async: false,
  creatable: false
};

export default Select;
