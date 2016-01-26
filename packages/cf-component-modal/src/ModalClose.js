import React, {PropTypes} from 'react';

export default class ModalClose extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <span className="cf-modal__close" onClick={this.props.onClick}/>
    );
  }
}
