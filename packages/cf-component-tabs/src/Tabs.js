const React = require('react');
const {PropTypes} = React;
const Viewport = require('cf-component-viewport');
const Select = require('cf-component-select');

class Tabs extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired
  };

  static childContextTypes = {
    activeTab: PropTypes.string.isRequired
  };

  getChildContext() {
    return {
      activeTab: this.props.activeTab
    };
  }

  handleChange(id) {
    if (id !== this.props.active) {
      this.props.onChange(id);
    }
  }

  handleKeyDown(id, event) {
    if (event.which === 13) {
      this.handleChange(id);
    }
  }

  render() {
    return (
      <section className="cf-tabs">
        <Viewport size="mobile">
          <Select
            onChange={this.handleChange}
            value={this.props.activeTab}
            options={this.props.tabs.map(tab => {
              return {
                value: tab.id,
                label: tab.label
              };
            })}/>
        </Viewport>
        <Viewport not size="mobile">
          <ul className="cf-tabs__group" role="tablist">
            {this.props.tabs.map(tab => {
              const selected = tab.id === this.props.activeTab;

              let className = 'cf-tabs__item';
              if (selected) {
                className += ' cf-tabs__item--active';
              }

              return (
                <li key={tab.id}
                  role="tab"
                  tabIndex={0}
                  aria-controls={tab.id}
                  aria-selected={selected}
                  className={className}
                  onKeyDown={this.handleKeyDown.bind(this, tab.id)}
                  onClick={this.handleChange.bind(this, tab.id)}>
                  {tab.label}
                </li>
              );
            })}
          </ul>
        </Viewport>
        {this.props.children}
      </section>
    );
  }
}

module.exports = Tabs;
