import React, {PropTypes} from 'react';
import {createComponent} from 'cf-style-container';

const styles = props => {
  const theme = props.theme;
  return ({
    display: theme.display,
    position: theme.position
  });
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

const addGroupProps = children =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      group: getGroupByIndex(index, React.Children.count(children))
    })
  );

const ButtonGroup = ({children, className}) =>
  <div className={className}>{addGroupProps(children)}</div>;

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired
};

export default createComponent(styles, ButtonGroup);
