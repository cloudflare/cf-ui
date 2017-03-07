import React from 'react';
import {
  Dropdown,
  DropdownLink,
  DropdownSeparator
} from 'cf-component-dropdown';
import {
  Button as ButtonUnstyled,
  ButtonTheme,
  ButtonGroup as ButtonGroupUnstyled,
  ButtonGroupTheme
} from 'cf-component-button';
import { applyTheme } from 'cf-style-container';

const Button = applyTheme(ButtonUnstyled, ButtonTheme);
const ButtonGroup = applyTheme(ButtonGroupUnstyled, ButtonGroupTheme);

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown1Open: false,
      dropdown2Open: false
    };
  }

  render() {
    return (
      <ButtonGroup>
        <Button
          type="primary"
          onClick={() => this.setState({ dropdown1Open: true })}
        >
          Open Dropdown 1
        </Button>

        {this.state.dropdown1Open &&
          <Dropdown onClose={() => this.setState({ dropdown1Open: false })}>
            <DropdownLink to="/foo">Link to /foo</DropdownLink>
            <DropdownLink to="/bar">Link to /bar</DropdownLink>
            <DropdownSeparator />
            <DropdownLink to="/baz">Link to /baz</DropdownLink>
            <DropdownLink to="/bat">Link to /bat</DropdownLink>
          </Dropdown>}

        <Button
          type="success"
          onClick={() => this.setState({ dropdown2Open: true })}
        >
          Open Dropdown 2
        </Button>

        {this.state.dropdown2Open &&
          <Dropdown
            align="right"
            onClose={() => this.setState({ dropdown2Open: false })}
          >
            <DropdownLink to="/foo">Link to /foo</DropdownLink>
            <DropdownLink to="/bar">Link to /bar</DropdownLink>
            <DropdownSeparator />
            <DropdownLink to="/baz">Link to /baz</DropdownLink>
            <DropdownLink to="/bat">Link to /bat</DropdownLink>
          </Dropdown>}
      </ButtonGroup>
    );
  }
}

export default DropdownComponent;
