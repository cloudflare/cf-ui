const React = require('react');
const { PropTypes } = React;

class FormFooter extends React.Component {
  render() {
    return (
      <div className="cf-form__footer">
        {this.props.children}
      </div>
    );
  }
}

FormFooter.propTypes = {
  children: PropTypes.node
};

module.exports = FormFooter;
