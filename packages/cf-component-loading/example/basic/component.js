import React from 'react';
import { render } from 'react-dom';
import Loading from '../../src/index';

class Component extends React.Component {
  render() {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-loading--basic'));
