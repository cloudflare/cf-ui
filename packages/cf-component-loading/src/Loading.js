import React from 'react';
import { Icon } from 'cf-component-icon';

import { createComponent } from 'cf-style-container';

const LoadingWrapper = createComponent(({}) => ({
  width: 40,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease',
  '>svg': {
    height: '100%',
    fill: 'transparent',
    stroke: '#ff7900',
    strokeWidth: 4,
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
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease'
  }
}));

export default class Loading extends React.Component {
  render() {
    return (
      <LoadingWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <circle cx="50%" cy="50%" r="40%" />
        </svg>
      </LoadingWrapper>
    );
  }
}
