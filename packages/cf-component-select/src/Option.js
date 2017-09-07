import React from 'react';
import ReactSelect from 'react-select';
import { createComponent } from 'cf-style-container';

const Option = createComponent(({
  theme,
  isSelected,
  isFocused,
  isDisabled
}) => {
  const color = isSelected || isFocused
    ? theme.color.charcoal
    : theme.colorGray;

  let backgroundColor = theme.colorWhite;
  if (isFocused) {
    backgroundColor = '#f0f0f0';
  } else if (isSelected) {
    backgroundColor = '#f7f7f7';
  }

  return {
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'block',
    padding: '8px 10px',
    opacity: isDisabled ? 0.5 : 1,
    backgroundColor,
    color,
    '& [role="option"]': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  };
}, ReactSelect.defaultProps.optionComponent);

export default Option;
