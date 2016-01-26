import React from 'react';
import {render} from 'react-dom';

import {handleRoutes, routeTo} from 'cf-util-route-handler';
import backboneAdapter from 'cf-util-route-handler/lib/backbone-adapter';
import Backbone from 'backbone';

import Link from '../../src/index';

// setup the router
handleRoutes(backboneAdapter);
new Backbone.Router({
  routes: {
    ''    : () => console.log('/'),
    hello : () => console.log('/hello'),
    world : () => console.log('/world')
  }
});
Backbone.history.start();

class Component extends React.Component {
  handleClick = () => {
    console.log('handleClick!');
  };

  render() {
    return (
      <div>
        <p>Create a <code>Link</code> with a <code>to</code> prop:</p>
        <Link to="/">Link to /</Link>

        <p>Alternatively you can pass an <code>onClick</code> handler:</p>
        <Link onClick={this.handleClick}>Link to something</Link>
        <p>Note: This will give it a <code>role="button"</code></p>

        <p>All additional props will be added to the <code>Link</code> element:</p>
        <Link to="/foo" className="special-link">Link to /foo</Link>

        <p>You can even specify <code>tagName</code>:</p>
        <Link to="/bar" tagName="button">Link to /bar</Link>
      </div>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-link--basic')
);
