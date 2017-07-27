import React from 'react';
import PropTypes from 'prop-types';
import Viewport from 'cf-component-viewport';
import Select from 'cf-component-select';
import { createComponent } from 'cf-style-container';
import { TabsItem } from './index';

const find = (list, condition) => {
  let foundElement = undefined;
  list.forEach(element => {
    if (condition(element)) {
      foundElement = element;
    }
  });
  return foundElement;
};

const styles = ({ theme }) => ({
  marginTop: theme.marginTop,
  marginBottom: theme.marginBottom,
  border: theme.border
});

const TabsGroup = createComponent(
  () => ({
    display: 'flex',
    width: '100%',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }),
  'ul',
  ['role']
);

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
      <section className={this.props.className}>
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
          <TabsGroup role="tablist">
            {this.props.tabs.map((tab, index) => {
              const Component = tab.component || TabsItem;
              const selected = tab.id === this.props.active;
              return (
                <Component
                  selected={selected}
                  key={tab.id}
                  role="tab"
                  tabIndex={index}
                  aria-controls={tab.id}
                  aria-selected={selected}
                  onKeyDown={this.handleKeyDown.bind(this, tab.id)}
                  onClick={this.handleChange.bind(this, tab.id)}
                >
                  {tab.label}
                </Component>
              );
            })}
          </TabsGroup>
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

export default createComponent(styles, Tabs);
