import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, type = 'default' }) => {
  return {
    margin: theme.margin,
    padding: theme.padding,
    border: theme.border,
    borderRadius: theme.borderRadius,
    color: theme.color,

    backgroundColor: theme[type].backgroundColor,
    borderColor: theme[type].borderColor
  };
};

const Content = createComponent(
  () => ({
    marginTop: 0
  }),
  'p'
);

class Callout extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h3>
          {this.props.title}
        </h3>
        <Content>
          {this.props.content}
        </Content>
      </div>
    );
  }
}

Callout.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'info']),
  title: PropTypes.string,
  content: PropTypes.node.isRequired
};

export default createComponent(styles, Callout);
