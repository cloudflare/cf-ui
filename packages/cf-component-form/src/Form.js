const React = require('react');
const { PropTypes } = React;

class Form extends React.Component {
  render() {
    let className = 'cf-form cf-form--' + this.props.layout;
    return (
      <form className={className} onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
};

module.exports = Form;
