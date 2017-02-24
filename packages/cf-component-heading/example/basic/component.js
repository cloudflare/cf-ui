const React = require('react');
const { render } = require('react-dom');

const {
  Heading,
  HeadingCaption
} = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <Heading size={2}>
        Look at this nice heading!
        <HeadingCaption>It even has a nice HeadingCaption</HeadingCaption>
      </Heading>
    );
  }
}

render(<Component />, document.getElementById('cf-component-heading--basic'));
