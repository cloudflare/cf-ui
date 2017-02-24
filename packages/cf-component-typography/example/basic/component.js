const React = require('react');
const { render } = require('react-dom');

const {
  Abbr,
  Cite,
  Del,
  Em,
  Ins,
  Kbd,
  Mark,
  Samp,
  Small,
  Strike,
  Strong,
  Sub,
  Sup,
  Underline,
  Var
} = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <div>
        <Abbr title="Abbreviation">Abbr</Abbr>
        <Cite>Cite</Cite>
        <Del>Del</Del>
        <Em>Em</Em>
        <Ins>Ins</Ins>
        <Kbd>Kbd</Kbd>
        <Mark>Mark</Mark>
        <Samp>Samp</Samp>
        <Small>Small</Small>
        <Strike>Strike</Strike>
        <Strong>Strong</Strong>
        <Sub>Sub</Sub>
        <Sup>Sup</Sup>
        <Underline>Underline</Underline>
        <Var>Var</Var>
      </div>
    );
  }
}

render(
  <Component />,
  document.getElementById('cf-component-typography--basic')
);
