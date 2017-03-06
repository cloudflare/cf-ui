import React, { PropTypes } from 'react';

class TabsPanel extends React.Component {
  render() {
    const selected = this.context.active === this.props.id;

    return (
      <div
        className="cf-tabs__panel"
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

export default TabsPanel;
