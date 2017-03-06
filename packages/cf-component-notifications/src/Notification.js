import React, { PropTypes } from 'react';
import raf from 'raf';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persist: this.props.persist,
      timeoutId: null
    };
  }

  componentDidMount() {
    // Wait two frames to ensure that the notification has rendered for the
    // animation to occur. Stupid browsers...
    this._raf = raf(() => {
      this._raf = raf(() => {
        this._raf = null;
        this.startTimeout();
      });
    });
  }

  componentWillUnmount() {
    this.stopTimeout();
  }

  startTimeout() {
    if (this.state.persist) {
      return;
    }
    this.stopTimeout();
    const timeoutId = setTimeout(() => this.props.onClose(), this.props.delay);
    this.setState({ timeoutId });
  }

  stopTimeout() {
    if (this._raf) {
      raf.cancel(this._raf);
      this._raf = null;
    }
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
      this.setState({ timeoutId: null });
    }
  }

  handleMouseEnter() {
    this.stopTimeout();
  }

  handleMouseLeave() {
    this.startTimeout();
  }

  handleClickClose() {
    this.props.onClose();
  }

  handleClick() {
    this.stopTimeout();
    this.setState({
      persist: true
    });
  }

  render() {
    let className = 'cf-notifications__item';
    let progress;

    className += ` cf-notifications__item--${this.props.type}`;

    if (this.state.persist) {
      className += ' cf-notifications__item--persist';
    } else {
      let progressClassName = 'cf-notifications__item_progress';
      let progressStyles = {};

      if (this.state.timeoutId) {
        progressClassName += ' cf-notifications__item_progress--active';
        progressStyles.transitionDuration = this.props.delay + 'ms';
      }

      progress = <span className={progressClassName} style={progressStyles} />;
    }

    let close;

    if (this.props.closable) {
      close = (
        <span
          className="cf-notifications__item_close"
          onClick={this.handleClickClose.bind(this)}
        />
      );
    }

    return (
      <div
        role="alert"
        className={className}
        onClick={this.handleClick.bind(this)}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >

        {progress}
        {close}

        <span className="cf-notifications__item_message">
          {this.props.message}
        </span>
      </div>
    );
  }
}

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  message: PropTypes.string.isRequired,

  closable: PropTypes.bool,
  delay: PropTypes.number,
  persist: PropTypes.bool,

  onClose: PropTypes.func.isRequired
};

Notification.defaultProps = {
  closable: true,
  delay: 4000,
  persist: false
};

export default Notification;
