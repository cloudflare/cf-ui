import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const capitalize = str =>
  str
    ? String.prototype.concat(
        str.substring(0, 1).toUpperCase(),
        str.substring(1)
      )
    : str;

const styles = ({ theme, size, align, type, case: textCase }) => {
  const t = {};

  if (theme[`color${capitalize(type)}`]) {
    t.color = theme[`color${capitalize(type)}`];
  }

  if (theme[`lineHeight${capitalize(type)}`]) {
    t.color = theme[`lineHeight${capitalize(type)}`];
  }

  if (theme[`fontSize${capitalize(size)}`]) {
    t.fontSize = theme[`fontSize${capitalize(size)}`];
  }

  if (theme[`fontWeight${capitalize(size)}`]) {
    t.fontWeight = theme[`fontWeight${capitalize(size)}`];
  }

  if (theme[`textAlign${capitalize(align)}`]) {
    t.textAlign = theme[`textAlign${capitalize(align)}`];
  }

  if (theme[`textTransform${capitalize(textCase)}`]) {
    t.textTransform = theme[`textTransform${capitalize(textCase)}`];
  }

  if (theme[`textTransform${capitalize(textCase)}:first-word`]) {
    t.textTransform = theme[`textTransform${capitalize(textCase)}:first-word`];
  }

  return t;
};

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
