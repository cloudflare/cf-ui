import React, {PropTypes} from 'react';

export default class Callout extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'info']),
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  };

  static defaultProps = {
    type: 'default'
  };

  render() {
    return (
      <div className={'cf-callout cf-callout--' + this.props.type}>
        <h3 className="cf-callout__heading">
          {this.props.title}
        </h3>
        <p className="cf-callout__content">
          {this.props.content}
        </p>
      </div>
    );
  }
}
