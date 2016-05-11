# cf-builder-card

> CloudFlare Card Builder

## Installation

```sh
$ npm install cf-builder-card
```

## Usage

```js
const React = require('react');
const {render} = require('react-dom');
const {createStore, combineReducers} = require('redux');
const {Provider} = require('react-redux');
const {
  CardBuilder,
  cardReducer
} = require('../../src/index');

const EXAMPLE_CARD = 'EXAMPLE_CARD';

class Component extends React.Component {
  render() {
    return (
      <CardBuilder
        cardName={EXAMPLE_CARD}
        title="This is a Card"
        description="This is the description of a card."
        control={
          <Button>...</Button>
        }
        table={
          <Table>...</Table>
        }
        drawers={[{
          id: 'api',
          name: 'API',
          content: 'API Content'
        }, {
          id: 'help',
          name: 'Help',
          content: 'Help Content'
        }]}/>
    );
  }
}

const reducer = combineReducers({
  cards: cardReducer
});

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Component/>
  </Provider>,
  rootElement
);
```
