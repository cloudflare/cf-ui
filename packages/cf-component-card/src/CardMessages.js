import React, { PropTypes } from 'react';

class CardMessages extends React.Component {
  render() {
    return (
      <div className="cf-card__messages">
        {this.props.messages.map((message, index) => {
          return (
            <div
              key={index}
              role="alert"
              className={'cf-card__message cf-card__message--' + message.type}
            >
              {message.content}
            </div>
          );
        })}
      </div>
    );
  }
}

CardMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
      content: PropTypes.any.isRequired
    })
  ).isRequired
};

export default CardMessages;
