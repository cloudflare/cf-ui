import React, { PropTypes } from 'react';

class CardToolbar extends React.Component {
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

CardToolbar.propTypes = {
  controls: PropTypes.any,
  links: PropTypes.any
};

export default CardToolbar;
