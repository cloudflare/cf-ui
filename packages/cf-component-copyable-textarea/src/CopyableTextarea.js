const React = require('react');
const {PropTypes} = React;
const Textarea = require('cf-component-textarea');
const {getText} = require('cf-util-text');
const {findDOMNode} = require('react-dom');

const containerStyles = {
  position: 'relative'
};

const overlayStyles = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

class CopyableTextarea extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onCopy: PropTypes.func
  };

  state = {
    focused: false,
    copied: false
  };

  handleOverlayClick = e => {
    e.preventDefault();

    const target = findDOMNode(this.refs.textarea);
    const {onCopy} = this.props;
    target.focus();
    target.select();

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
      focused: true,
      copied: success
    });
  };

  handleBlur = () => {
    this.setState({
      focused: false,
      copied: false
    });
  };

  render() {
    let helpText;

    if (!this.state.focused) {
      helpText = getText('Click to copy');
    } else if (this.state.copied) {
      helpText = getText('Copied text to clipboard');
    } else {
      helpText = getText('Press Command/Ctrl+C to copy');
    }

    return (
      <div className="cf-copyable-textarea" style={containerStyles}>
        {!this.state.focused && (
          <div style={overlayStyles} onClick={this.handleOverlayClick}></div>
        )}
        <Textarea
          ref="textarea"
          readOnly
          name={this.props.name}
          value={this.props.value}
          onBlur={this.handleBlur}/>
        <p className="cf-copyable-textarea__help-text">
          {helpText}
        </p>
      </div>
    );
  }
}

module.exports = CopyableTextarea;
