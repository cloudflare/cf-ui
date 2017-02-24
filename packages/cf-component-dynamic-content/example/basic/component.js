const React = require('react');
const { render } = require('react-dom');

const DynamicContent = require('../../src/index');

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
