// @flow

const React = require('react');
const {PropTypes} = React;

class Form extends React.Component {
  static propTypes = {
    layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node
  };

  render() {
    let className = 'cf-form cf-form--' + this.props.layout;
    return (
      <form className={className} onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

module.exports = Form;
