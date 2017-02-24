const React = require('react');
const { PropTypes } = React;

class TableFoot extends React.Component {
  render() {
    let className = 'cf-table__foot';
    if (this.props.className.trim())
      className += ' ' + this.props.className.trim();

    return (
      <tfoot className={className}>
        {this.props.children}
      </tfoot>
    );
  }
}

TableFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

TableFoot.defaultProps = {
  className: ''
};

module.exports = TableFoot;
