import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, disabled }) => {
  return {
    display: 'block',
    position: 'relative',
    margin: 0,
    height: theme.height,
    width: theme.width,
    borderRadius: theme.borderRadius,
    borderWidth: theme.borderWidth,
    borderStyle: theme.borderStyle,
    borderColor: disabled ? theme.colorGray : theme.borderColor,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: theme.fontSize,
    marginBottom: theme.marginBottom,
    minHeight: theme.minHeight,

    '&::before': {
      display: 'block',
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '50%',
      lineHeight: theme['&::before'].lineHeight,
      textAlign: 'center',
      content: "'On'",
      left: 0,
      background: disabled ? theme.colorGray : theme['&::before'].background,
      color: disabled ? theme.colorGrayLight : theme['&::before'].color
    },
    '&::after': {
      display: 'block',
      position: 'absolute',
      content: "'Off'",
      top: 0,
      bottom: 0,
      right: 0,
      textAlign: 'center',
      width: '50%',
      lineHeight: theme['&::after'].lineHeight,
      background: theme['&::after'].background,
      color: disabled ? theme.colorGrayLight : theme['&::after'].color
    }
  };
};

const Handle = createComponent(
  ({ theme, active }) => ({
    display: 'block',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: active ? '50%' : 0,
    width: '50%',

    border: 'inherit',
    borderWidth: 0,
    borderRightWidth: active ? 0 : 'inherit',
    borderLeftWidth: active ? 'inherit' : 0,

    background: theme.colorWhite,
    transition: 'left 100ms ease',

    '&::before': {
      border: '4px solid transparent',
      content: "''",
      display: 'block',
      height: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-3px',
      width: 0,
      borderLeftColor: 'transparent',
      borderRightColor: 'inherit',
      marginLeft: '-10px'
    },
    '&::after': {
      border: '4px solid transparent',
      borderLeftColor: 'inherit',
      content: "''",
      display: 'block',
      height: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '2px',
      marginTop: '-3px',
      width: 0
    }
  }),
  'span'
);

const HiddenStyles = () => ({
  position: 'absolute',
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  border: 0,
  outline: 0,
  opacity: 0
});

const Input = createComponent(HiddenStyles, 'input', [
  'type',
  'disabled',
  'id',
  'name',
  'checked',
  'onChange',
  'onFocus',
  'onBlur'
]);

const A11yLabel = createComponent(HiddenStyles, 'span');

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (!this.props.disabled) {
      this.props.onChange(e.target.checked);
    }
  }

  render() {
    const { className } = this.props;

    return (
      <label htmlFor={this.props.name} className={className}>
        <Input
          type="checkbox"
          disabled={this.props.disabled}
          id={this.props.name}
          name={this.props.name}
          checked={this.props.value}
          onChange={this.handleChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
        <A11yLabel>{this.props.label}</A11yLabel>
        <Handle active={this.props.value} />
      </label>
    );
  }
}

Toggle.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])])
    .isRequired,
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default createComponent(styles, Toggle);
