const React = require('react');
const { render } = require('react-dom');

const {
  LayoutContainer,
  LayoutRow,
  LayoutColumn
} = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <LayoutContainer>
        <LayoutRow>
          <LayoutColumn width={1 / 2}><p>Column 1/2</p></LayoutColumn>
          <LayoutColumn width={1 / 2}><p>Column 1/2</p></LayoutColumn>
        </LayoutRow>

        <LayoutRow>
          <LayoutColumn width={1 / 3}><p>Column 1/3</p></LayoutColumn>
          <LayoutColumn width={1 / 3}><p>Column 1/3</p></LayoutColumn>
          <LayoutColumn width={1 / 3}><p>Column 1/3</p></LayoutColumn>
        </LayoutRow>

        <LayoutRow>
          <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
          <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
          <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
          <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
        </LayoutRow>

        <LayoutRow>
          <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
          <LayoutColumn width={2 / 4}><p>Column 2/4</p></LayoutColumn>
          <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
        </LayoutRow>
      </LayoutContainer>
    );
  }
}

render(<Component />, document.getElementById('cf-component-layout--basic'));
