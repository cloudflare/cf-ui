import React from 'react';
import PropTypes from 'prop-types';
import { createComponentStyles } from 'cf-style-container';
import { clearFix } from 'polished';

const mainStyles = ({ theme }) => ({
  margin: theme.main.margin,
  padding: theme.main.padding,
  borderTop: theme.main.borderTop,
  borderLeft: theme.main.borderLeft,
  borderRight: theme.main.borderRight,
  borderBottom: theme.main.borderBottom,
  ...clearFix()
});

const legendStyles = ({ theme, layout }) => ({
  padding: theme.legend.padding,
  marginBottom: theme.legend.marginBottom,
  borderBottom: theme.legend.borderBottom,
  tablet: layout === 'horizontal'
    ? {
        width: '30%',
        float: 'left',
        padding: '1.7em 1rem',
        color: theme.colorGrayDark,
        textAlign: 'right'
      }
    : {}
});

const contentStyles = ({ theme, layout }) => ({
  padding: theme.content.padding,
  border: theme.content.border,
  borderTopWidth: theme.content.borderTopWidth,
  background: theme.content.background,
  tablet: layout === 'horizontal'
    ? {
        width: '70%',
        float: 'left',
        borderTopWidth: 0,
        borderLeftWidth: 0
      }
    : {}
});

class FormFieldset extends React.Component {
  render() {
    const { legend, children, styles } = this.props;
    return (
      <fieldset className={styles.mainStyles}>
        <legend className={styles.legendStyles}>
          {legend}
        </legend>
        <div className={styles.contentStyles}>
          {children}
        </div>
      </fieldset>
    );
  }
}

FormFieldset.propTypes = {
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  styles: PropTypes.object.isRequired,
  legend: PropTypes.string.isRequired,
  children: PropTypes.node
};

FormFieldset.defaultProps = {
  layout: 'vertical'
};

export default createComponentStyles(
  { mainStyles, legendStyles, contentStyles },
  FormFieldset
);
