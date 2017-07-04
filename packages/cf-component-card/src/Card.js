import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  marginTop: '1em',
  marginBottom: '1em',
  padding: 0,
  border: `1px solid ${theme.colorGrayLight}`,
  backgroundColor: theme.colorWhite,

  borderRadius: '2px',
  transition: 'all 0.35s ease'
});

class Card extends React.Component {
  render() {
    return (
      <section id={this.props.id} className={this.props.className}>
        {this.props.children}
      </section>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};

export default createComponent(styles, Card);
