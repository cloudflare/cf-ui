import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, checked }) => ({
  cursor: 'pointer',
  display: 'block',
  minHeight: '1em',
  paddingLeft: '2em'
});

const Input = createComponent(
  ({ theme, checked }) => ({
    zIndex: 0,
    border: '1px solid #bdbdbd',
    borderRadius: theme.borderRadius,

    verticalAlign: 'middle',
    fontFamily: theme.fontFamily,
    fontSize: '0.86667rem',

    background: theme.colorWhite,
    color: theme.color.charcoal,
    outline: 'none',

    transition: 'border-color 0.2s ease',
    position: 'relative',
    height: '15px',
    width: '15px',
    margin: '1px 0 0',
    padding: 0,
    lineHeight: 'normal',
    appearance: 'none',
    top: '-1px',

    '&:hover': {
      borderColor: '#256298'
    },

    '&:focus': {
      outline: '5px auto -webkit-focus-ring-color',
      outlineOffset: '-1px'
    },

    '&::before': {
      color: checked ? theme.color.charcoal : 'transparent',
      position: 'absolute',
      backgroundColor: 'transparent',
      '-webkit-text-stroke': 0,
      transition: 'all 150ms ease-out',
      content: "'\\f009'",
      fontFamily: 'cloudflare-font',
      fontSize: '15px',
      left: '-1px',
      top: '-1px'
    }
  }),
  'input',
  ['type', 'id', 'name', 'value', 'checked', 'onChange']
);

const Label = createComponent(
  () => ({
    display: 'inline',
    fontSize: '0.86667rem',
    marginBottom: '0.38333em',
    marginLeft: '1em',
    minHeight: '1.22em'
  }),
  'span'
);

class Checkbox extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name} className={this.props.className}>
        <Input
          type="checkbox"
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        {this.props.label &&
          <Label>
            {this.props.label}
          </Label>}
      </label>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])])
    .isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default createComponent(styles, Checkbox);
