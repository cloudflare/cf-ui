import React, { PropTypes } from 'react';
import Viewport from 'cf-component-viewport';
import Select from 'cf-component-select';

const find = (list, condition) => {
  let foundElement = undefined;
  list.forEach(element => {
    if (condition(element)) {
      foundElement = element;
    }
  });
  return foundElement;
};

class Tabs extends React.Component {
  getChildContext() {
    return {
      active: this.props.active
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
            onChange={this.handleChange.bind(this)}
            value={this.props.active}
            options={this.props.tabs.map(tab => {
              return {
                value: tab.id,
                label: tab.label
              };
            })}
          />
        </Viewport>
        <Viewport not size="mobile">
          <ul className="cf-tabs__group" role="tablist">
            {this.props.tabs.map(tab => {
              const selected = tab.id === this.props.active;

              let className = 'cf-tabs__item';
              if (selected) {
                className += ' cf-tabs__item--active';
              }

              return (
                <li
                  key={tab.id}
                  role="tab"
                  tabIndex={0}
                  aria-controls={tab.id}
                  aria-selected={selected}
                  className={className}
                  onKeyDown={this.handleKeyDown.bind(this, tab.id)}
                  onClick={this.handleChange.bind(this, tab.id)}
                >
                  {tab.label}
                </li>
              );
            })}
          </ul>
        </Viewport>
        {find(this.props.children, child => {
          return child.props.id === this.props.active;
        })}
      </section>
    );
  }
}

Tabs.propTypes = {
  onChange: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

Tabs.childContextTypes = {
  active: PropTypes.string.isRequired
};

export default Tabs;
