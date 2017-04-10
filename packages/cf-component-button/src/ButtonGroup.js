import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = props => {
  const theme = props.theme;
  return {
    display: theme.display,
    position: theme.position,
    verticalAlign: theme.verticalAlign,
    whiteSpace: theme.whiteSpace
  };
};

const getGroupByIndex = (index, length) => {
  if (index === length - 1) {
    return 'last';
  }
  if (index === 0) {
    return 'first';
  }
  return 'inbetween';
};

const addGroupProps = (children, spaced) =>
  React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        group: getGroupByIndex(index, React.Children.count(children)),
        spaced
      });
    }
    return child;
  });

class ButtonGroup extends React.Component {
  render() {
    const { className, children, spaced } = this.props;
    return <div className={className}>{addGroupProps(children, spaced)}</div>;
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  spaced: PropTypes.bool,
  className: PropTypes.string.isRequired
};

export default createComponent(styles, ButtonGroup);
