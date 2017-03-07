import React from 'react';
import { applyTheme } from 'cf-style-container';
import {
  ButtonGroup as ButtonGroupUnstyled,
  Button as ButtonUnstyled,
  ButtonTheme,
  ButtonGroupTheme
} from 'cf-component-button';

const Button = applyTheme(ButtonUnstyled, ButtonTheme);
const ButtonGroup = applyTheme(ButtonGroupUnstyled, ButtonGroupTheme);

const ButtonComponent = () => (
  <ButtonGroup>
    <Button type="primary" onClick={() => console.log('Clicked One!')}>
      Button One
    </Button>
    <Button type="default" onClick={() => console.log('Clicked Two!')}>
      Button Two
    </Button>
    <Button type="success" onClick={() => console.log('Clicked Three!')}>
      Button Three
    </Button>
  </ButtonGroup>
);

export default ButtonComponent;
