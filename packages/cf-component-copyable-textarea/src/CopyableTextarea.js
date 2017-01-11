// @flow

const React = require('react');
const {PropTypes} = React;
const Textarea = require('cf-component-textarea');

class CopyableTextarea extends React.Component {
  textarea: HTMLTextAreaElement;

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onCopy: PropTypes.func,
    clickToCopyText: PropTypes.string,
    copiedTextToClipboardText: PropTypes.string,
    pressCommandOrCtrlCToCopyText: PropTypes.string
  };

  static defaultProps = {
    clickToCopyText: 'Click to copy',
    copiedTextToClipboardText: 'Copied text to clipboard',
    pressCommandOrCtrlCToCopyText: 'Press Command/Ctrl+C to copy'
  };

  state = {
    helpText: this.props.clickToCopyText,
    copied: false
  };

  handleFocus(e) {
    e.target.select();

    const {onCopy} = this.props;

    let success;
    try {
      success = document.execCommand('copy');
    } catch(err) {
      success = false;
    }

    if (success && onCopy) {
      onCopy();
    }

    this.setState({
      helpText: (success ?
                 this.props.copiedTextToClipboardText :
                 this.props.pressCommandOrCtrlCToCopyText),
      copied: success
    });
  }

  handleBlur = () => {
    this.setState({
      helpText: this.props.clickToCopyText,
      copied: false
    });
  };

  render() {
    return (
      <div className="cf-copyable-textarea">
        <Textarea
          ref={node => this.textarea = node}
          readOnly
          name={this.props.name}
          value={this.props.value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur} />
        <p className="cf-copyable-textarea__help-text">{this.state.helpText}</p>
      </div>
    );
  }
}

module.exports = CopyableTextarea;
