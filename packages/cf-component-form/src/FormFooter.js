// @flow

const React = require('react');
const {PropTypes} = React;

class FormFooter extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-form__footer">
        {this.props.children}
      </div>
    );
  }
}

module.exports = FormFooter;
