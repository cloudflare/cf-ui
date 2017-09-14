import React from 'react';
import { Button, ButtonGroup } from 'cf-component-button';

const ButtonComponent = () => (
  <div>
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
    <p>Button group with spacing</p>
    <ButtonGroup spaced>
      <Button type="success" onClick={() => console.log('Clicked Four!')}>
        Button Four
      </Button>
      <Button type="danger" onClick={() => console.log('Clicked Five!')}>
        Button Five
      </Button>
      <Button type="dangerOutline" onClick={() => console.log('Clicked Six!')}>
        Button Six
      </Button>
      <Button
        type="default"
        loading
        onClick={() => console.log('Clicked Loading!')}
      >
        Button Seven
      </Button>
    </ButtonGroup>
  </div>
);

export default ButtonComponent;
