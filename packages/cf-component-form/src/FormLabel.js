const React = require('react');
const {PropTypes} = React;

class FormLabel extends React.Component {
  static propTypes = {
    hidden: PropTypes.bool
  };

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

module.exports = FormLabel;
