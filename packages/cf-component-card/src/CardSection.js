import React, {PropTypes} from 'react';

export default class CardSection extends React.Component {
  static propTypes = {
    status: PropTypes.oneOf([
      'default',
      'error'
    ])
  };

  static defaultProps = {
    status: 'default'
  };

  render() {
    return (
      <div className={'cf-card__section cf-card__section--' + this.props.status}>
        {this.props.children}
      </div>
    );
  }
}
