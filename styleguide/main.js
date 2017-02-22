import React from 'react';
import { ThemeProvider } from 'react-fela';
import { Button, ButtonTheme, ButtonGroup } from '../packages/cf-component-button/src/index';

const Main = () =>
  <div>
    <ButtonGroup>
      <ThemeProvider theme={ButtonTheme}>
        <Button type="primary" onClick={() => console.log('clicked')}>Heyo1</Button>
      </ThemeProvider>
      <ThemeProvider theme={ButtonTheme}>
        <Button type="primary" onClick={() => console.log('clicked')}>Heyo2</Button>
      </ThemeProvider>
      <ThemeProvider theme={ButtonTheme}>
        <Button type="primary" onClick={() => console.log('clicked')}>Heyo3</Button>
      </ThemeProvider>
    </ButtonGroup>
    <ThemeProvider theme={ButtonTheme}>
      <Button type="primary" onClick={() => console.log('clicked')}>Heyo</Button>
    </ThemeProvider>
  </div>;

Main.displayName = 'Main';
export default Main;
