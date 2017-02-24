const React = require('react');
const { PropTypes } = React;

class FormLabel extends React.Component {
  render() {
    let className = 'cf-form__label';

    if (this.props.hidden) {
      className += ' cf-form__label--hidden';
    }

    return (
      <label className={className}>
        {this.props.children}
      </label>
    );
  }
}

FormLabel.propTypes = {
  hidden: PropTypes.bool,
  children: PropTypes.node
};

module.exports = FormLabel;
