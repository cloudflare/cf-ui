import React, {PropTypes} from 'react';

export default class Text extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(['normal', 'small']),
    align: PropTypes.oneOf(['start', 'center', 'justify', 'end']),
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'muted']),
    case: PropTypes.oneOf(['capitalize', 'titlecase', 'lowercase', 'uppercase'])
  };

  render() {
    let classNames = [];

    if (this.props.size) {
      classNames.push('cf-text--' + this.props.size);
    }

    if (this.props.align) {
      classNames.push('cf-text--' + this.props.align);
    }

    if (this.props.type) {
      classNames.push('cf-text--' + this.props.type);
    }

    if (this.props.case) {
      classNames.push('cf-text--' + this.props.case);
    }

    return (
      <div className={classNames.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}
