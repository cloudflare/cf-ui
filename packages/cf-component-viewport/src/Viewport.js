// @flow

const React = require('react');
const {PropTypes} = React;
const MediaQuery = require('react-responsive');
const buildMediaQuery = require('./buildMediaQuery');

const SIZES = {
  mobile       : { minWidth: null,     maxWidth: '15.6em' },
  mobileWide   : { minWidth: '15.6em', maxWidth: '32.4em' },
  tablet       : { minWidth: '32.4em', maxWidth: '49.2em' },
  desktop      : { minWidth: '49.2em', maxWidth: '66em'   },
  desktopLarge : { minWidth: '66em',   maxWidth:  null    }
};

class Viewport extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    not: false
  };

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

module.exports = Viewport;
