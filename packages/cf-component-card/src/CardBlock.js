import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  padding: '1rem 1.4rem 1.26667rem',
  borderTop: `1px solid ${theme.colorGrayLight}`,

  '&:first-child': {
    borderTop: 0
  }
});

class CardBlock extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

CardBlock.propTypes = {
  children: PropTypes.node
};

export default createComponent(styles, CardBlock);
