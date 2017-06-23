import React, {
  Component,
  Children,
  isValidElement,
  cloneElement
} from 'react';
import PropTypes from 'prop-types';
import createRenderer from './createRenderer';
import { Provider } from 'react-fela';
import { variables } from 'cf-style-const';
import { ThemeProvider } from 'cf-style-container';

const StyleProvider = ({
  selectorPrefix,
  dev,
  children,
  renderer,
  ...restProps
}) => {
  const providerRenderer =
    renderer ||
    createRenderer({
      selectorPrefix,
      dev
    });
  const child = Children.only(children);
  return (
    <Provider renderer={providerRenderer}>
      <ThemeProvider theme={variables}>
        {isValidElement(child) ? cloneElement(child, { ...restProps }) : child}
      </ThemeProvider>
    </Provider>
  );
};

StyleProvider.propTypes = {
  dev: PropTypes.bool,
  selectorPrefix: PropTypes.string,
  renderer: PropTypes.object
};

export default StyleProvider;
