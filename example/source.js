import React from 'react';
import ReactDOM from 'react-dom';
import { StyleProvider } from 'cf-style-provider';
import { Button } from 'cf-component-button';

ReactDOM.render(
  <StyleProvider cssNode={document.getElementById('stylesheet')}>
    <Button type="primary" onClick={() => console.log('clicked')}>
      Primary Button
    </Button>
  </StyleProvider>,
  document.getElementById('react-app')
);
