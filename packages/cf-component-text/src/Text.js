import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';
import capitalize from 'capitalize';

const styles = ({ theme, size, align, type, case: textCase }) => ({
  color: type && theme[`color${capitalize(type)}`],
  lineHeight: size && theme[`lineHeight${capitalize(size)}`],
  fontSize: size && theme[`fontSize${capitalize(size)}`],
  fontWeight: size && theme[`fontWeight${capitalize(size)}`],
  textAlign: align && theme[`textAlign${capitalize(align)}`],
  textTransform: textCase && theme[`textTransform${capitalize(textCase)}`],
  '&:first-letter': {
    textTransform: textCase &&
      theme[`textTransform${capitalize(textCase)}:first-letter`]
  }
});

class Text extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

Text.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  align: PropTypes.oneOf(['start', 'center', 'justify', 'end']),
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'muted']),
  case: PropTypes.oneOf(['capitalize', 'titlecase', 'lowercase', 'uppercase']),
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default createComponent(styles, Text);
