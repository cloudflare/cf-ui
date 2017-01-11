// @flow

const React = require('react');
const {PropTypes} = React;

class CardContent extends React.Component {
  static propTypes = {
    title: PropTypes.any.isRequired,
    footerMessage: PropTypes.string,
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-card__content">
        <h3 className="cf-card__title">
          {this.props.title}
        </h3>
        {this.props.children}
        { this.props.footerMessage ? (
          <div className="cf-card__footer_message">
            {this.props.footerMessage}
          </div> ) : null
        }
      </div>
    );
  }
}

module.exports = CardContent;
