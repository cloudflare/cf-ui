const React = require('react');
const {render} = require('react-dom');

const {TYPES, SIZES} = require('../../src/options');
const Icon = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <div>
        <p>Types:</p>
        <p>
          {TYPES.map(type =>
            <Icon label={type} type={type} key={type}/>
          )}
        </p>

        <p>Sizes:</p>
        <p>
          {SIZES.map(size =>
            <Icon label={size} type={TYPES[0]} size={size} key={size}/>
          )}
        </p>

        <p>Border:</p>
        <p><Icon label="border" type={TYPES[0]} border/></p>

        <p>Spin:</p>
        <p><Icon label="border" type={TYPES[0]} spin/></p>

        <p>Muted:</p>
        <p><Icon label="border" type={TYPES[0]} muted/></p>

        <p>White:</p>
        <p><Icon label="border" type={TYPES[0]} white/></p>
      </div>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-icon--basic')
);
