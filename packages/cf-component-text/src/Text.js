import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const capitalize = str =>
  str
    ? String.prototype.concat(
        str.substring(0, 1).toUpperCase(),
        str.substring(1)
      )
    : str;

const styles = ({ theme, size, align, type, case: textCase }) => ({
  color: theme[`color${capitalize(type)}`],
  lineHeight: theme[`lineHeight${capitalize(size)}`],
  fontSize: theme[`fontSize${capitalize(size)}`],
  fontWeight: theme[`fontWeight${capitalize(size)}`],
  textAlign: theme[`textAlign${capitalize(align)}`],
  textTransform: theme[`textTransform${capitalize(textCase)}`],
  '&:first-letter': {
    textTransform: theme[`textTransform${capitalize(textCase)}:first-letter`]
  }
});

const Text = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

Text.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  align: PropTypes.oneOf(['start', 'center', 'justify', 'end']),
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'muted']),
  case: PropTypes.oneOf(['capitalize', 'titlecase', 'lowercase', 'uppercase']),
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default createComponent(styles, Text);
