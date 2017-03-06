import React, { PropTypes } from 'react';

class LayoutRow extends React.Component {
  render() {
    return (
      <div className="cf-layout__row">
        {this.props.children}
      </div>
    );
  }
}

LayoutRow.propTypes = {
  children: PropTypes.node
};

export default LayoutRow;
