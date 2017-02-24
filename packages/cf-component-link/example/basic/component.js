const React = require('react');
const { render } = require('react-dom');

const { handleRoutes } = require('cf-util-route-handler');
const Backbone = require('backbone');

const Link = require('../../src/index');

// setup the router
handleRoutes(function(url) {
  Backbone.history.navigate(url, true);
});

new Backbone.Router({
  routes: {
    '': () => console.log('/'),
    hello: () => console.log('/hello'),
    world: () => console.log('/world')
  }
});
Backbone.history.start();

class Component extends React.Component {
  handleClick() {
    console.log('handleClick!');
  }

  render() {
    return (
      <div>
        <p>Create a <code>Link</code> with a <code>to</code> prop:</p>
        <Link to="/">Link to /</Link>

        <p>Alternatively you can pass an <code>onClick</code> handler:</p>
        <Link onClick={this.handleClick.bind(this)}>Link to something</Link>
        <p>Note: This will give it a <code>role="button"</code></p>

        <p>
          All additional props will be added to the <code>Link</code> element:
        </p>
        <Link to="/foo" className="special-link">Link to /foo</Link>

        <p>You can even specify <code>tagName</code>:</p>
        <Link to="/bar" tagName="button">Link to /bar</Link>
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-link--basic'));
