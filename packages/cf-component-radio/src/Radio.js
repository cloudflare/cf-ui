import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  cursor: theme.cursor,
  display: theme.display,
  minHeight: theme.minHeight,
  paddingLeft: theme.paddingLeft,
  marginTop: theme.marginTop,

  '&:first-child': {
    marginTop: theme['&:first-child'].marginTop
  },

  '&:hover input': {
    borderColor: theme['&:hover input'].borderColor
  }
});

const Input = createComponent(
  ({ theme, checked }) => ({
    zIndex: 0,
    border: '1px solid #bdbdbd',

    verticalAlign: 'middle',
    fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
    fontSize: '0.86667rem',

    background: theme.colorWhite,
    color: '#333333',
    outline: 'none',

    transition: 'border-color 0.2s ease',

    position: 'relative',
    height: 15,
    width: 15,
    margin: '1px 0 0',
    padding: 0,
    lineHeight: 'normal',
    appearance: 'none',
    top: -1,
    borderRadius: '50%',

    '&:hover': {
      borderColor: '#256298'
    },

    '&:focus': {
      borderColor: '#2f7bbf',
      outline: '5px auto -webkit-focus-ring-color',
      outlineOffset: -1
    },

    '&::before': {
      content: "''",
      position: 'absolute',
      backgroundColor: checked ? theme.colorGrayDark : 'transparent',
      color: 'transparent',
      '-webkit-text-stroke': 0,
      transition: 'all 0.2s ease-out',
      borderRadius: '50%',
      height: checked ? 7 : 3,
      width: checked ? 7 : 3,
      top: checked ? 3 : 5,
      left: checked ? 3 : 5
    }
  }),
  'input',
  ['type', 'className', 'id', 'name', 'value', 'checked', 'onChange']
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

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <label htmlFor={this.props.name} className={this.props.className}>
        <Input
          type="radio"
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.handleChange}
          checked={this.props.checked}
        />
        {this.props.label &&
          <Label>
            {this.props.label}
          </Label>}
      </label>
    );
  }
}

Radio.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])])
    .isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default createComponent(styles, Radio);
