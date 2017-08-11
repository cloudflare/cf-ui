import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  display: theme.display
});

class DynamicContent extends React.Component {
  render() {
    return (
      <div
        className={this.props.className}
        dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML}
      />
    );
  }
}

DynamicContent.propTypes = {
  className: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired
};

export default createComponent(styles, DynamicContent);
