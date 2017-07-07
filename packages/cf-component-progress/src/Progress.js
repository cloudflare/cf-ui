import React from 'react';
import PropTypes from 'prop-types';
import Link from 'cf-component-link';
import { createComponent } from 'cf-style-container';
import { clearFix } from 'polished';

const styles = () => ({
  position: 'relative'
});

const Bar = createComponent(
  ({ theme }) => ({
    display: 'block',
    width: '100%',
    appearance: 'none',

    '&::-webkit-progress-bar': {
      backgroundColor: theme.bodyBackground,
      color: theme.bodyBackground
    },

    '&::-webkit-progress-value': {
      backgroundColor: theme.color.marine,
      color: theme.color.marine,
      transition: 'width 500ms ease'
    },

    /* Mozilla uses progress-bar as the value */
    '&::-moz-progress-bar': {
      backgroundColor: theme.color.marine,
      color: theme.color.marine
    }
  }),
  'progress',
  ['max', 'value']
);

const Items = createComponent(
  () => ({
    listStyle: 'none',
    ...clearFix(),
    margin: 0,
    padding: 0
  }),
  'ol'
);

const Item = createComponent(
  ({ theme, width, disabled, active }) => {
    let color = theme.colorGray;
    if (disabled) {
      color = theme.colorGrayLight;
    } else if (active) {
      color = theme.color.marine;
    }

    return {
      width: 'auto',
      float: 'none',
      height: 'auto',
      padding: 0,
      paddingTop: '7.5px',

      color,
      fontSize: '0.86667em',

      textAlign: 'center',
      cursor: disabled ? 'default' : 'pointer',
      display: active ? 'list-item' : 'none',

      '&::before': {
        content: 'none'
      },

      tablet: {
        width,
        float: 'left',
        display: 'list-item'
      },

      '& > .cf-link': {
        display: 'block',
        color: 'inherit',
        cursor: 'pointer'
      }
    };
  },
  'li',
  ['key', 'width', 'disabled', 'active']
);

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(step) {
    if (step.id !== this.props.active) {
      this.props.onChange(step.id);
    }
  }

  render() {
    const { className, steps, active } = this.props;
    const max = steps.length;
    const itemWidth = (1 / max * 100).toFixed(4) + '%';

    let value;

    const items = steps.map((step, index) => {
      const isActive = step.id === active;

      if (isActive) {
        value = index + 1;
      }

      return (
        <Item
          key={step.id}
          width={itemWidth}
          disabled={step.disabled}
          active={isActive}
        >
          <Link
            onClick={this.handleClick.bind(null, step)}
            disabled={step.disabled}
          >
            {step.label}
          </Link>
        </Item>
      );
    });

    return (
      <div className={className}>
        <Bar max={max} value={value} />
        <Items>
          {items}
        </Items>
      </div>
    );
  }
}

Progress.propTypes = {
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

Progress.defaultProps = {
  steps: []
};

export default createComponent(styles, Progress);
