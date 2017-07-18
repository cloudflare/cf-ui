import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  border: theme.border,
  fontFamily: theme.fontFamily,
  borderRadius: theme.borderRadius,
  display: theme.display,
  marginLeft: theme.marginLeft,
  marginRight: theme.marginRight,
  padding: theme.padding,
  verticalAlign: theme.verticalAlign,
  color: theme.color
});

class Code extends React.Component {
  render() {
    return (
      <code className={this.props.className}>
        {this.props.children}
      </code>
    );
  }
}

Code.propTypes = {
  children: PropTypes.node
};

export default createComponent(styles, Code);
