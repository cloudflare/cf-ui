import React from 'react';
import { Icon } from 'cf-component-icon';

import { createComponent } from 'cf-style-container';

const loadingStyles = ({ theme }) => {
  return {
    height: 15,
    animationDuration: '2.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    '>svg': {
      height: '100%',
      fill: 'transparent',
      strokeWidth: 6,
      stroke: theme.colors.hail,
      animationName: {
        '0%': {
          strokeDasharray: '1,95',
          strokeDashoffset: 0,
          transform: 'rotate(0deg)'
        },
        '50%': { strokeDasharray: '85,95', strokeDashoffset: -25 },
        '100%': {
          strokeDasharray: '85,95',
          strokeDashoffset: -93,
          transform: 'rotate(360deg)'
        }
      },
      animationDuration: '1.9s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear'
    }
  };
};

class Loading extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <circle cx="50%" cy="50%" r="40%" />
        </svg>
      </div>
    );
  }
}
export default createComponent(loadingStyles, Loading);
