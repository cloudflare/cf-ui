import React, {PropTypes} from 'react';

export default class DynamicContent extends React.Component {
  static propTypes = {
    dangerouslySetInnerHTML: PropTypes.shape({
      __html: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <div
        className="cf-dynamic-content"
        dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML}/>
    );
  }
}
