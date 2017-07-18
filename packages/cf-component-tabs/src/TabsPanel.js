import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  backgroundColor: theme.backgroundColor
});

class TabsPanel extends React.Component {
  render() {
    const selected = this.context.active === this.props.id;

    return (
      <div
        className={this.props.className}
        role="tabpanel"
        aria-labelledby={this.props.id}
        aria-hidden={!selected}
      >
        {this.props.children}
      </div>
    );
  }
}

TabsPanel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node
};

TabsPanel.contextTypes = {
  active: PropTypes.string.isRequired
};

export default createComponent(styles, TabsPanel);
