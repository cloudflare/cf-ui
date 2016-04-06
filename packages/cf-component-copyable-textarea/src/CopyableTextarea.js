const React = require('react');
const {PropTypes} = React;
const Textarea = require('cf-component-textarea');
const {getText} = require('cf-util-text');

class CopyableTextarea extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  };

  state = {
    focused: false,
    copied: false
  };

  handleFocus = e => {
    const target = e.currentTarget;

    target.select();

    let success;
    try {
      success = document.execCommand('copy');
    } catch(e) {
      success = false;
    }

    this.setState({
      focused: true,
      copied: success
    }, () => {
      // Even though the <textarea> isn't being updated in the DOM, Safari
      // loses the selection out for some unknown reason, and this is the best
      // I can do to fix it for now. I'm sorry.
      setTimeout(() => target.select(), 150);
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
      <div className="cf-copyable-textarea">
        <Textarea
          readOnly
          name={this.props.name}
          value={this.props.value}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}/>
        <p className="cf-copyable-textarea__help-text">
          {helpText}
        </p>
      </div>
    );
  }
}

module.exports = CopyableTextarea;
