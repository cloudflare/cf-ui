import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'cf-component-textarea';
import { createComponent, applyTheme } from 'cf-style-container';

const styles = ({ theme }) => ({
  marginTop: '1rem',
  cursor: 'pointer',

  '& > textarea': {
    height: '7rem',
    wordBreak: 'break-all',
    cursor: 'text',
    resize: 'none',
    color: theme.color.charcoal,
    fontFamily: 'monaco, courier, monospace'
  }
});

const HelpText = createComponent(
  ({ theme }) => ({
    fontSize: '0.8em',
    color: theme.colorGray,
    marginTop: '-0.5em',
    marginBottom: '1em'
  }),
  'p'
);

class CopyableTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: this.props.clickToCopyText,
      copied: false
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus(e) {
    e.target.select();

    const { onCopy } = this.props;

    let success;
    try {
      success = document.execCommand('copy');
    } catch (err) {
      success = false;
    }

    if (success && onCopy) {
      onCopy();
    }

    this.setState({
      helpText: success
        ? this.props.copiedTextToClipboardText
        : this.props.pressCommandOrCtrlCToCopyText,
      copied: success
    });
  }

  handleBlur() {
    this.setState({
      helpText: this.props.clickToCopyText,
      copied: false
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <Textarea
          ref={node => this.textarea = node}
          readOnly
          name={this.props.name}
          value={this.props.value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <HelpText>{this.state.helpText}</HelpText>
      </div>
    );
  }
}

CopyableTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onCopy: PropTypes.func,
  clickToCopyText: PropTypes.string,
  copiedTextToClipboardText: PropTypes.string,
  pressCommandOrCtrlCToCopyText: PropTypes.string
};

CopyableTextarea.defaultProps = {
  clickToCopyText: 'Click to copy',
  copiedTextToClipboardText: 'Copied text to clipboard',
  pressCommandOrCtrlCToCopyText: 'Press Command/Ctrl+C to copy'
};

export default createComponent(styles, CopyableTextarea);
