import React, { PropTypes } from 'react';
import Link from 'cf-component-link';

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
    const max = this.props.steps.length;
    const itemWidth = (1 / max * 100).toFixed(4) + '%';

    let value;

    const items = this.props.steps.map((step, index) => {
      let className = 'cf-progress__item';

      if (step.id === this.props.active) {
        value = index + 1;
        className += ' cf-progress__item--active';
      }

      if (step.disabled) {
        className += ' cf-progress__item--disabled';
      }

      return (
        <li key={step.id} className={className} style={{ width: itemWidth }}>
          <Link
            onClick={this.handleClick.bind(null, step)}
            disabled={step.disabled}
          >
            {step.label}
          </Link>
        </li>
      );
    });

    return (
      <div className="cf-progress">
        <progress className="cf-progress__bar" max={max} value={value} />
        <ol className="cf-progress__items">
          {items}
        </ol>
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
  ).isRequired
};

Progress.defaultProps = {
  steps: []
};

export default Progress;
