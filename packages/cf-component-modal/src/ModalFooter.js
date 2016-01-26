import React, {PropTypes} from 'react';

export default class ModalFooter extends React.Component {
  static propTypes = {
    simple: PropTypes.bool
  };

  static defaultProps = {
    simple: false
  };

  render() {
    let className = 'cf-modal__footer';

    if (this.props.simple) {
      className += ' cf-modal__footer--simple';
    }

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}
