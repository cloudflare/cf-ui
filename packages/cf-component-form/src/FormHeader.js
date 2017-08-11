import React from 'react';
import PropTypes from 'prop-types';
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
  styles: PropTypes.object.isRequired
};

export default createComponentStyles({ mainStyles, titleStyles }, FormHeader);
