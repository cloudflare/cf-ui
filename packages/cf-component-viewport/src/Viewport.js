import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import buildMediaQuery from './buildMediaQuery';

const SIZES = {
  mobile: { minWidth: null, maxWidth: '15.6em' },
  mobileWide: { minWidth: '15.6em', maxWidth: '32.4em' },
  tablet: { minWidth: '32.4em', maxWidth: '49.2em' },
  desktop: { minWidth: '49.2em', maxWidth: '66em' },
  desktopLarge: { minWidth: '66em', maxWidth: null }
};

class Viewport extends React.Component {
  render() {
    let { size, not } = this.props;
    let mediaQuery = buildMediaQuery(SIZES[size], not);

    return (
      <MediaQuery query={mediaQuery}>
        {this.props.children}
      </MediaQuery>
    );
  }
}

Viewport.propTypes = {
  not: PropTypes.bool,
  size: PropTypes.oneOf([
    'mobile',
    'mobileWide',
    'tablet',
    'desktop',
    'desktopLarge'
  ]).isRequired,
  children: PropTypes.node
};

Viewport.defaultProps = {
  not: false
};

export default Viewport;
