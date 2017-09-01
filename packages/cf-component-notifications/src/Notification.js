import React from 'react';
import PropTypes from 'prop-types';
import raf from 'raf';
import { createComponent, createComponentStyles } from 'cf-style-container';

// Styles
const notificationMessageStyles = ({ theme }) => ({
  position: theme.message.position,
  zIndex: theme.message.zIndex
});

const notificationCloseStyles = ({ theme }) => ({
  position: theme.close.position,
  zIndex: theme.close.zIndex,
  top: theme.close.top,
  right: theme.close.right,
  bottom: theme.close.bottom,
  width: theme.close.width,
  cursor: theme.close.cursor,
  '&:hover': theme.close['&:hover'],
  '&::before': theme.close['&::before']
});

// Components
const NotificationProgress = createComponent(
  ({ theme, duration, persist, active }) => {
    return persist
      ? null
      : {
          position: theme.progress.position,
          zIndex: theme.progress.zIndex,
          top: theme.progress.top,
          bottom: theme.progress.bottom,
          left: theme.progress.left,
          background: theme.progress.background,
          transition: active ? `width linear ${duration}ms` : 'none',
          width: active ? 0 : '100%'
        };
  },
  'span',
  ['duration', 'persist', 'active']
);

const NotificationContainer = createComponent(({ theme }) => ({
  position: theme.container.position,
  padding: theme.container.padding,
  border: theme.container.border,
  verticalAlign: theme.container.verticalAlign,
  '-webkit-text-stroke': theme.container.webkitTextStroke,
  '-webkit-font-smoothing': theme.container.webkitFontSmoothing,
  cursor: theme.container.cursor,
  transformOrigin: theme.container.transformOrigin,
  backgroundColor: 'blue',
  animationName: theme.container.slideup,
  animationDuration: '200ms',
  animationTimingFunction: 'ease-in-out',
  '&::before': theme.container['&::before']
}));

const NotificationItemUnStyled = ({
  children,
  styles,
  closable,
  persist,
  duration,
  active,
  handleClickClose
}) => {
  return (
    <div>
      <NotificationProgress
        className={styles.notificationProgressStyles}
        persist={persist}
        duration={duration}
        active={active}
      />
      {closable &&
        <span
          className={styles.notificationCloseStyles}
          onClick={handleClickClose}
        />}
      <span className={styles.notificationMessageStyles}>
        {children}
      </span>
    </div>
  );
};

const NotificationItem = createComponentStyles(
  {
    notificationMessageStyles,
    notificationCloseStyles
  },
  NotificationItemUnStyled,
  ['persist', 'duration', 'active']
);

NotificationItemUnStyled.propTypes = {
  styles: PropTypes.object.isRequired,
  children: PropTypes.node,
  closable: PropTypes.bool,
  persist: PropTypes.bool,
  duration: PropTypes.number,
  active: PropTypes.number,
  handleClickClose: PropTypes.func
};

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
    //this.stopTimeout();
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
    // className = '';
    let progress;

    className += ` cf-notifications__item--${this.props.type}`;

    return (
      // <div
      //   role="alert"
      //   className={className}
      //   onClick={this.handleClick.bind(this)}
      //   onMouseEnter={this.handleMouseEnter.bind(this)}
      //   onMouseLeave={this.handleMouseLeave.bind(this)}
      // >

      (
        <NotificationContainer
          role="alert"
          onClick={this.handleClick.bind(this)}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
        >
          <NotificationItem
            closable={this.props.closable}
            handleClickClose={this.handleClickClose.bind(this)}
            duration={this.props.delay}
            persist={this.state.persist}
            active={this.state.timeoutId}
          >
            {this.props.message}{this.props.closable}
          </NotificationItem>
        </NotificationContainer>
      )
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
