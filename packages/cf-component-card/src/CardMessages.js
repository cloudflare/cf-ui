// @flow

const React = require('react');
const {PropTypes} = React;

class CardMessages extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
      content: PropTypes.any.isRequired
    })).isRequired
  };

  render() {
    return (
      <div className="cf-card__messages">
        {this.props.messages.map((message, index) => {
          return (
            <div key={index} role="alert" className={'cf-card__message cf-card__message--' + message.type}>
              {message.content}
            </div>
          );
        })}
      </div>
    );
  }
}

module.exports = CardMessages;
