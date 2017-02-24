import { createComponent as createFelaComponent } from 'react-fela';

export const createComponent = (rule, type = 'div', passThroughProps = []) =>
  createFelaComponent(
    rule,
    type,
    type.propTypes
      ? passThroughProps.concat(Object.keys(type.propTypes))
      : passThroughProps
  );

export { ThemeProvider } from 'react-fela';
