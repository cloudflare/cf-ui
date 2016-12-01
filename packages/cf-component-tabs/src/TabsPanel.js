const React = require('react');
const {PropTypes} = React;

class TabsPanel extends React.Component {
  render() {
    const selected = this.context.activeTab === this.props.id;

    return (
      <div
        className="cf-tabs__panel"
        role="tabpanel"
        aria-labelledby={this.props.id}
        aria-hidden={!selected}
        style={{ display: selected ? 'block' : 'none' }}>
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
  activeTab: PropTypes.string.isRequired
};

module.exports = TabsPanel;
