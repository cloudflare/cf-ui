import React from 'react';
import { render } from 'react-dom';
import DynamicContent from '../../src/index';

class Component extends React.Component {
  render() {
    return (
      <DynamicContent
        dangerouslySetInnerHTML={{
          __html: '<p>Not an XSS attack, I swear.</p>'
        }}
      />
    );
  }
}

render(
  <Component />,
  document.getElementById('cf-component-dynamic-content--basic')
);
