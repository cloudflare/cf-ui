import React from 'react';
import PropTypes from 'prop-types';
import { createComponent, applyTheme } from 'cf-style-container';

import RadioUnstyled from './Radio';
import RadioTheme from './RadioTheme';

const Radio = applyTheme(RadioUnstyled, RadioTheme, () => ({
  marginTop: '1em',

  '&:first-child': {
    marginTop: 0
  }
}));

const styles = () => ({
  textAlign: 'left',
  display: 'inline-block',
  verticalAlign: 'middle'
});

class RadioGroup extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.options.map(option => {
          return (
            <Radio
              key={option.name}
              label={option.label}
              name={option.name}
              value={option.value}
              checked={this.props.value === option.value}
              onChange={this.props.onChange}
            />
          );
        })}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])])
        .isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};

export default createComponent(styles, RadioGroup);
