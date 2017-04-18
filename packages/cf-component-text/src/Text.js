import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';
import capitalizeWord from 'capitalize';

const capitalize = str => str.split('-').map(w => capitalizeWord(w)).join('');

const styles = ({ theme, size, weight, align, type, case: textCase }) => ({
  color: type && theme[`color${capitalize(type)}`],
  lineHeight: size && theme[`lineHeight${capitalize(size)}`],
  fontSize: size && theme[`fontSize${capitalize(size)}`],
  fontWeight: weight && theme[`fontWeight${capitalize(weight)}`],
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
  weight: PropTypes.oneOf(['normal', 'semi-bold', 'bold']),
  align: PropTypes.oneOf(['start', 'center', 'justify', 'end']),
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'muted']),
  case: PropTypes.oneOf(['capitalize', 'titlecase', 'lowercase', 'uppercase']),
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

Text.defaultProps = {
  weight: 'normal'
};

export default createComponent(styles, Text);
