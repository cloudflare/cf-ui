const React = require('react');
const {render} = require('react-dom');

const CollapsablePanel = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <CollapsablePanel
        description="A thing for collapsing bigger things"
        linkText="Click for more!" >
        <p>Look at this!</p>
      </CollapsablePanel>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-collapsable-panel--basic')
);
