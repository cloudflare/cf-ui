import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = () => ({
  paddingTop: '0.5rem'
});

const CardMessages = ({ className, messages }) => (
  <div className={className}>
    {messages.map((message, index) => (
      <div key={index} role="alert">
        {message.content}
      </div>
    ))}
  </div>
);

CardMessages.propTypes = {
  /* The messages to render */
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      /* The type of message, currently does nothing */
      type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
      /* The content to be rendered */
      content: PropTypes.any.isRequired
    })
  ).isRequired
};

export default createComponent(styles, CardMessages);
