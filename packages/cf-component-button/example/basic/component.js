import React from 'react';
import { ThemeProvider } from 'cf-style-container';
import {
  ButtonGroup,
  ButtonGroupTheme,
  Button,
  ButtonTheme
} from 'cf-component-button';

export default () =>
  <ThemeProvider theme={ButtonGroupTheme}>
    <ThemeProvider theme={ButtonTheme}>
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
    </ThemeProvider>
  </ThemeProvider>;
