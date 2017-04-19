import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  color: theme.color,
  fontSize: theme.fontFize,
  fontColor: theme.fontColor,
  fontWeight: theme.fontWeight,
  marginLeft: theme.marginLeft
});

class HeadingCaption extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <small className={className}>
        {children}
      </small>
    );
  }
}

HeadingCaption.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default createComponent(styles, HeadingCaption);
