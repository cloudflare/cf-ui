import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createComponent } from 'cf-style-container';
import ScrollContainer from './ScrollContainer';

const MenuWrapper = createComponent(({ theme }) => {
  return {
    border: `1px solid ${theme.color.hail}`,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colorWhite,
    marginTop: '5px',

    boxSizing: 'border-box',
    position: 'absolute',
    top: '100%',
    minWidth: '100%',
    maxWidth: '350px',
    zIndex: '1100',
    webkitOverflowScrolling: 'touch'
  };
});

export default function menuRenderer(
  {
    focusedOption,
    instancePrefix,
    labelKey,
    onFocus,
    onSelect,
    optionClassName,
    optionComponent,
    optionRenderer,
    options,
    valueArray,
    valueKey,
    onOptionRef
  },
  { menuTitle, closeMenu, closeMenuComponent, menuHeaderComponent }
) {
  const MenuHeader = menuHeaderComponent;
  const CloseMenu = closeMenuComponent;
  const Option = optionComponent;

  const opts = options.map((option, i) => {
    let isSelected = valueArray && valueArray.indexOf(option) > -1;
    let isFocused = option === focusedOption;

    return (
      <Option
        instancePrefix={instancePrefix}
        isDisabled={option.disabled}
        isFocused={isFocused}
        isSelected={isSelected}
        onFocus={onFocus}
        onSelect={onSelect}
        option={option}
        optionIndex={i}
        ref={ref => {
          onOptionRef(ref, isFocused);
        }}
        key={`option-${i}-${option[valueKey]}`}
      >
        {optionRenderer(option, i)}
      </Option>
    );
  });

  return (
    <MenuWrapper>
      {menuTitle &&
        <MenuHeader>
          <span>{menuTitle}</span>
          <CloseMenu closeMenu={closeMenu} />
        </MenuHeader>}
      <ScrollContainer>
        {opts}
      </ScrollContainer>
    </MenuWrapper>
  );
}

menuRenderer.propTypes = {
  focusedOption: PropTypes.object,
  instancePrefix: PropTypes.string,
  labelKey: PropTypes.string,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  optionClassName: PropTypes.string,
  optionComponent: PropTypes.element,
  optionRenderer: PropTypes.func,
  options: PropTypes.array,
  valueArray: PropTypes.array,
  valueKey: PropTypes.string,
  onOptionRef: PropTypes.func
};
