import { Component, PropTypes, Children, cloneElement } from 'react';

class ThemeProvider extends Component {
  getChildContext() {
    const { overwrite, theme, ...restProps } = this.props;
    const previousTheme = this.context.theme;

    return {
      theme: {
        ...(!overwrite ? previousTheme || {} : {}),
        ...theme
      }
    };
  }

  render() {
    const { overwrite, theme, ...restProps } = this.props;
    return cloneElement(Children.only(this.props.children), {
      ...restProps
    });
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  overwrite: PropTypes.bool
};
ThemeProvider.childContextTypes = { theme: PropTypes.object };
ThemeProvider.contextTypes = { theme: PropTypes.object };
ThemeProvider.defaultProps = { overwrite: false };

export default ThemeProvider;
