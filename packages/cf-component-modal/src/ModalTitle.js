import React, { PropTypes } from 'react';
import { Heading as HeadingUnstyled, HeadingTheme } from 'cf-component-heading';
import { applyTheme } from 'cf-style-container';

const Heading = applyTheme(HeadingUnstyled, HeadingTheme);

class ModalTitle extends React.Component {
  render() {
    return (
      <div className="cf-modal__title">
        <Heading size={3}>
          {this.props.children}
        </Heading>
      </div>
    );
  }
}

ModalTitle.propTypes = {
  children: PropTypes.node
};

export default ModalTitle;
