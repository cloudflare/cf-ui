/**
 * original html structure (note that extra divs have been inserted by using fela)
 *
 * <div class="cf-select">
 *   <label class="cf-select__label">Label</label>
 *
 *   <div class="Select is-searchable has-value">
 *     <input type="hidden"/>
 *
 *     <div class="Select-control">
 *       <div class="Select-placeholder">Placeholder</div>
 *
 *       <!-- When not searchable: -->
 *       <div class="Select-input" tabindex="0">&nbsp;</div>
 *
 *       <!-- When searchable: -->
 *       <div class="Select-input" style="...">
 *         <input value="" tabindex="0" style="...">
 *         <div style="..."></div>
 *       </div>
 *
 *       <!-- When searchable and has option -->
 *       <span class="Select-clear-zone" title="Clear value" aria-label="Clear value">
 *         <span class="Select-clear">×</span>
 *       </span>
 *
 *       <div class="Select-arrow-zone">
 *         <span class="Select-arrow"></span>
 *       </div>
 *     </div>
 *
 *     <!-- only when open -->
 *     <div class="Select-menu-outer">
 *       <div class="Select-menu">
 *         <div class="Select-option is-selected">One</div>
 *         <div class="Select-option">Two</div>
 *         <div class="Select-option is-focused">Three</div>
 *       </div>
 *     </div>
 *
 *   </div>
 * </div>
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { createComponent } from 'cf-style-container';
import Value from './Value';
import Option from './Option';
import MenuHeader from './MenuHeader';
import CloseMenu from './CloseMenu';
import menuRenderer from './menuRenderer';
import arrowRenderer from './arrowRenderer';
import clearRenderer from './clearRenderer';

const Label = createComponent(
  ({ theme }) => ({
    display: 'block',
    fontSize: '0.7em',
    color: theme.color.storm,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.5em'
  }),
  'label'
);

// bindRight is used to ensure that menuRenderer, called from within react-select,
// is always passed a second parameter which is used for further configuration.
const bindRight = (fn, ...rightArgs) => (...args) => fn(...args, ...rightArgs);

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.menuRenderer = bindRight(props.menuRenderer, {
      menuTitle: props.menuTitle,
      menuHeaderComponent: props.menuHeaderComponent,
      closeMenuComponent: props.closeMenuComponent,
      closeMenu: () => {
        const nested = props.creatable || props.async;
        const select = nested ? this.select.select : this.select;
        select && select.closeMenu();
      }
    });
  }

  render() {
    const {
      async,
      creatable,
      searchable,
      label,
      className,
      ...props
    } = this.props;

    let SelectClass;
    if (async) {
      SelectClass = creatable ? ReactSelect.AsyncCreatable : ReactSelect.Async;
    } else {
      SelectClass = creatable ? ReactSelect.Creatable : ReactSelect;
    }

    return (
      <div className={`${className}`}>
        {label &&
          <Label>
            {label}
          </Label>}
        <SelectClass
          {...props}
          searchable={searchable}
          clearable={searchable || creatable}
          backspaceRemoves={searchable || creatable}
          menuRenderer={this.menuRenderer}
          ref={ref => this.select = ref}
        />
      </div>
    );
  }
}

Select.defaultProps = {
  multi: false,
  searchable: false,
  async: false,
  creatable: false,
  disabled: false,
  menuRenderer,
  arrowRenderer,
  clearRenderer,
  optionComponent: Option,
  valueComponent: Value,
  menuHeaderComponent: MenuHeader,
  closeMenuComponent: CloseMenu
};

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,
  searchable: PropTypes.bool,
  multi: PropTypes.bool,
  onChange: PropTypes.func,
  async: PropTypes.bool,
  creatable: PropTypes.bool,
  menuRenderer: PropTypes.func,
  arrowRenderer: PropTypes.func,
  clearRenderer: PropTypes.func,
  isValidNewOption: PropTypes.func,
  noResultsText: PropTypes.string,
  promptTextCreator: PropTypes.func,
  newOptionCreator: PropTypes.func,
  menuTitle: PropTypes.string,
  menuHeaderComponent: PropTypes.func,
  closeMenuComponent: PropTypes.func,
  loadOptions: PropTypes.func,
  autoload: PropTypes.bool,
  searchPromptText: PropTypes.string,
  cache: PropTypes.bool
};

const singleOrPlaceholder = theme => ({
  bottom: 0,
  color: theme.colorGrayDark,
  left: 0,
  lineHeight: '32px',
  paddingLeft: '10px',
  paddingRight: '10px',
  position: 'absolute',
  right: 0,
  top: 0,
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
});

const styles = ({ theme, disabled }) => {
  const values = {
    boxSizing: 'border-box',
    fontSize: '0.86667rem'
  };

  return {
    ...values,
    '& div': values,
    '& input': values,
    '& span': values,

    flex: theme.flex,
    margin: theme.margin,
    width: theme.width,
    display: theme.display,
    verticalAlign: theme.verticalAlign,
    position: 'relative',
    opacity: disabled ? 0.5 : 1,
    textAlign: 'left',

    '& .Select-control': {
      backgroundColor: disabled ? theme.color.smoke : theme.colorWhite,
      border: `1px solid ${theme.color.hail}`,
      borderRadius: theme.borderRadius,
      color: theme.color.charcoal,
      cursor: 'default',
      display: 'table',
      borderSpacing: 0,
      borderCollapse: 'separate',
      height: '32px',
      outline: 'none',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      transition: 'border-color 0.2s ease'
    },
    '& .Select-control .Select-input:focus': {
      outline: 'none'
    },
    '& .Select-menu-outer': {
      position: 'relative'
    },
    '&:hover .Select-control': {
      borderColor: disabled ? theme.color.hail : theme.colorBlueDark
    },
    '& .is-focused .Select-control': {
      borderColor: theme.colorBlueDark
    },
    '& .is-open .Select-control': {
      borderColor: theme.color.hail
    },
    '& .Select-placeholder': singleOrPlaceholder(theme),
    '& .Select--single > .Select-control .Select-value': singleOrPlaceholder(
      theme
    ),
    '& .Select-input': {
      height: '32px',
      paddingLeft: '10px',
      paddingRight: '10px',
      verticalAlign: 'middle'
    },
    '& .Select-input > input': {
      width: '100%',
      background: 'none transparent',
      border: ' 0 none',
      cursor: 'default',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      outline: 'none',
      lineHeight: '14px',
      padding: 0
    },
    '& .Select-noresults': {
      boxVizing: 'border-box',
      color: theme.color.cement,
      cursor: 'default',
      display: 'block',
      padding: '8px 10px'
    },
    '& .Select-aria-only': {
      display: 'inline-block',
      height: '1px',
      width: '1px',
      margin: '-1px',
      clip: 'rect(0, 0, 0, 0)',
      overflow: 'hidden'
    },
    '& .Select-arrow-zone': {
      cursor: disabled ? 'default' : 'pointer',
      display: 'table-cell',
      position: 'relative',
      textAlign: 'center',
      verticalAlign: 'middle',
      width: '25px',
      paddingRight: '5px',
      top: '1px'
    },
    '& .Select-clear-zone': {
      color: theme.color.cement,
      cursor: ' pointer',
      display: 'table-cell',
      position: 'relative',
      top: '1px',
      textAlign: 'center',
      verticalAlign: 'middle',
      width: '17px'
    }
  };
};

export default createComponent(styles, Select);
