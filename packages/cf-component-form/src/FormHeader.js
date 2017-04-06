import React, { PropTypes } from 'react';
import { createComponentStyles } from 'cf-style-container';

const mainStyles = ({ theme }) => ({
  padding: theme.padding,
  borderBottom: theme.borderBottom
});

const titleStyles = () => ({
  margin: 0
});

class FormHeader extends React.Component {
  render() {
    const { styles, title } = this.props;
    return (
      <div className={styles.mainStyles}>
        <h3 className={styles.titleStyles}>{title}</h3>
      </div>
    );
  }
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default createComponentStyles({ mainStyles, titleStyles }, FormHeader);
