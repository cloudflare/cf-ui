import React, { PropTypes } from 'react';

class CardContent extends React.Component {
  render() {
    return (
      <div className="cf-card__content">
        <h3 className="cf-card__title">
          {this.props.title}
        </h3>
        {this.props.children}
        {this.props.footerMessage
          ? <div className="cf-card__footer_message">
              {this.props.footerMessage}
            </div>
          : null}
      </div>
    );
  }
}

CardContent.propTypes = {
  title: PropTypes.any.isRequired,
  footerMessage: PropTypes.string,
  children: PropTypes.node
};

export default CardContent;
