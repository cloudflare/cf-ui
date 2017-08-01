import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  textAlign: theme.textAlign,
  display: theme.display,
  verticalAlign: theme.verticalAlign
});

class RadioGroup extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {React.Children.map(this.props.children, Radio =>
          React.cloneElement(Radio, {
            key: Radio.props.name,
            checked: this.props.value === Radio.props.value,
            onChange: this.props.onChange
          })
        )}
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
