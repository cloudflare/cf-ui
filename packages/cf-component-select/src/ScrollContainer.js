import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

class ScrollContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  // Prevent body scrolling when the menu scrolls
  handleMouseOver() {
    if (this.ref.scrollHeight > this.ref.clientHeight) {
      document.body.style.overflow = 'hidden';
    }
  }

  handleMouseOut() {
    if (this.ref.scrollHeight > this.ref.clientHeight) {
      document.body.style.overflow = 'initial';
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'initial';
  }

  render() {
    return (
      <div
        className={this.props.className}
        onScroll={this.handleScroll}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        ref={ref => this.ref = ref}
      >
        {this.props.children}
      </div>
    );
  }
}

ScrollContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

const ScrollContainerWrapper = createComponent(theme => {
  return {
    maxHeight: theme.maxMenuHeight || '198px',
    overflowY: 'auto'
  };
}, ScrollContainer);

export default ScrollContainerWrapper;
