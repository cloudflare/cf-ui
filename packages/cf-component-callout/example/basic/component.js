import React from 'react';
import {render} from 'react-dom';

import Callout from '../../src/index';

class Component extends React.Component {
  render() {
    return (
      <Callout
        title="Callout Title"
        content="Callout content."/>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-callout--basic')
);
