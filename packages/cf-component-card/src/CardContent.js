import React, {PropTypes} from 'react';

export default class CardContent extends React.Component {
  static propTypes = {
    title: PropTypes.any.isRequired
  };

  render() {
    return (
      <div className="cf-card__content">
        <h3 className="cf-card__title">
          {this.props.title}
        </h3>
        {this.props.children}
      </div>
    );
  }
}
