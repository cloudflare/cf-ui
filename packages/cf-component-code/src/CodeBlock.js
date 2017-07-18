import React from 'react';
import PropTypes from 'prop-types';
import { createComponent, applyTheme } from 'cf-style-container';

import CodeUnstyled from './Code';
import CodeTheme from './CodeTheme';

const styles = ({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  border: theme.border,
  fontFamily: theme.fontFamily,
  borderRadius: theme.borderRadius,
  display: theme.display,
  width: theme.width,
  margin: theme.margin,
  padding: theme.padding,
  fontSize: theme.fontSize,
  color: theme.color
});

const Code = applyTheme(CodeUnstyled, CodeTheme, () => ({
  display: 'inherit',
  margin: 'auto',
  padding: 'auto',
  background: 'none',
  border: 'none',
  color: 'inherit'
}));

class CodeBlock extends React.Component {
  render() {
    return (
      <pre className={this.props.className}>
        <Code>
          {this.props.children}
        </Code>
      </pre>
    );
  }
}

CodeBlock.propTypes = {
  children: PropTypes.node
};

export default createComponent(styles, CodeBlock);
