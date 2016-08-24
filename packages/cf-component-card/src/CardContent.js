const React = require('react');
const {PropTypes} = React;
const Text = require('cf-component-text');

class CardContent extends React.Component {
  static propTypes = {
    title: PropTypes.any.isRequired,
    footerMessage: PropTypes.string
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
            <Text size="small" type="muted">{this.props.footerMessage}</Text>
          </div> ) : null 
        }
      </div>
    );
  }
}

module.exports = CardContent;
