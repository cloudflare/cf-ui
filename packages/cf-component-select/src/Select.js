import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  flex: theme.flex,
  margin: theme.margin,
  width: theme.width,
  display: theme.display,
  verticalAlign: theme.verticalAlign
});

const Label = createComponent(
  ({ theme }) => ({
    display: 'block',
    fontSize: '0.7em',
    color: theme.color.storm,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.5em'
  }),
  'label'
);

class Select extends React.Component {
  render() {
    const {
      async,
      creatable,
      searchable,
      label,
      className,
      ...props
    } = this.props;

    let SelectClass;
    if (async) {
      SelectClass = creatable ? ReactSelect.AsyncCreatable : ReactSelect.Async;
    } else {
      SelectClass = creatable ? ReactSelect.Creatable : ReactSelect;
    }

    return (
      <div className={className}>
        {label &&
          <Label>
            {label}
          </Label>}
        <SelectClass
          {...props}
          searchable={searchable}
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

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,
  searchable: PropTypes.bool,
  multi: PropTypes.bool,
  onChange: PropTypes.func,
  async: PropTypes.bool,
  creatable: PropTypes.bool
};

export default createComponent(styles, Select);
