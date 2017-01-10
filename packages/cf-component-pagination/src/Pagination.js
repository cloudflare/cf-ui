// @flow

const React = require('react');
const {PropTypes} = React;
const uniqueId = require('lodash/uniqueId');

class Pagination extends React.Component {
  static propTypes = {
    info: PropTypes.string,
    children: PropTypes.node
  };

  render() {
    const id = this.props.info ? uniqueId('cf-pagination-') : null;

    return (
      <div className="cf-pagination">
        <ul className="cf-pagination__list" role="navigation" aria-describedby={id}>
          {this.props.children}
        </ul>
        {this.props.info && (
          <span id={id}>
            {this.props.info}
          </span>
        )}
      </div>
    );
  }
}

module.exports = Pagination;
