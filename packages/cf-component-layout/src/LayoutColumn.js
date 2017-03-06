import React, { PropTypes } from 'react';

class LayoutColumn extends React.Component {
  render() {
    const width = (this.props.width * 100).toPrecision(5) + '%';
    return (
      <div className="cf-layout__column" style={{ width }}>
        {this.props.children}
      </div>
    );
  }
}

LayoutColumn.propTypes = {
  width: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default LayoutColumn;
