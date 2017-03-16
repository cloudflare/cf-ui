import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, size, align, type, case: textCase }) => {
  const t = {};

  if (theme[`colorType--${type}`]) {
    t.color = theme[`colorType--${type}`];
  }

  if (theme[`fontSize--${size}`]) {
    t.fontSize = theme[`fontSize--${size}`];
  }

  if (theme[`fontWeight--${size}`]) {
    t.fontWeight = theme[`fontWeight--${size}`];
  }

  if (theme[`textAlign--${align}`]) {
    t.textAlign = theme[`textAlign--${align}`];
  }

  if (theme[`textTransform--${textCase}`]) {
    t.textTransform = theme[`textTransform--${textCase}`];
  }

  if (theme[`textTransform--${textCase}:first-word`]) {
    t.textTransform = theme[`textTransform--${textCase}:first-word`];
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
