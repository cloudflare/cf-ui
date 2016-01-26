import React from 'react';
import {render} from 'react-dom';
import {handleRoutes} from 'cf-util-route-handler';

handleRoutes(route => console.log(route));

import {
  Button,
  ButtonGroup
} from 'cf-component-button';

import {
  Dropdown,
  DropdownLink,
  DropdownSeparator
} from '../../src/index';

class Component extends React.Component {
  state = {
    dropdown1Open: false,
    dropdown2Open: false
  };

  render() {
    return (
      <ButtonGroup>
        <Button type="primary" onClick={() => this.setState({ dropdown1Open: true })}>
          Open Dropdown 1
        </Button>

        {this.state.dropdown1Open && (
          <Dropdown onClose={() => this.setState({ dropdown1Open: false })}>
            <DropdownLink to="/foo">Link to /foo</DropdownLink>
            <DropdownLink to="/bar">Link to /bar</DropdownLink>
            <DropdownSeparator/>
            <DropdownLink to="/baz">Link to /baz</DropdownLink>
            <DropdownLink to="/bat">Link to /bat</DropdownLink>
          </Dropdown>
        )}

        <Button type="primary" onClick={() => this.setState({ dropdown2Open: true })}>
          Open Dropdown 2
        </Button>

        {this.state.dropdown2Open && (
          <Dropdown align="right" onClose={() => this.setState({ dropdown2Open: false })}>
            <DropdownLink to="/foo">Link to /foo</DropdownLink>
            <DropdownLink to="/bar">Link to /bar</DropdownLink>
            <DropdownSeparator/>
            <DropdownLink to="/baz">Link to /baz</DropdownLink>
            <DropdownLink to="/bat">Link to /bat</DropdownLink>
          </Dropdown>
        )}
      </ButtonGroup>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-dropdown--basic')
);
