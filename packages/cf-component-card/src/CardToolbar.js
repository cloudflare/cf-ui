const React = require('react');
const {PropTypes} = React;

class CardToolbar extends React.Component {
  static propTypes = {
    controls: PropTypes.any,
    links: PropTypes.any
  };

  render() {
    return (
      <div className="cf-card__toolbar">
        <div className="cf-card__toolbar_controls">
          {this.props.controls}
        </div>
        <div className="cf-card__toolbar_links" role="tablist">
          {this.props.links}
        </div>
      </div>
    );
  }
}

module.exports = CardToolbar;
