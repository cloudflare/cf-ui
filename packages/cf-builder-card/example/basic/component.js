import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { CardBuilder, cardReducer } from '../../src/index';
import { Button } from 'cf-component-button';
import { Table, TableBody, TableRow, TableCell } from 'cf-component-table';

const EXAMPLE_CARD = 'EXAMPLE_CARD';

class Component extends React.Component {
  render() {
    return (
      <CardBuilder
        cardName={EXAMPLE_CARD}
        title="This is a Card"
        description="This is the description of a card."
        control={<Button>Click me!</Button>}
        table={
          (
            <Table striped>
              <TableBody>
                <TableRow>
                  <TableCell>One</TableCell>
                  <TableCell>Two</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Three</TableCell>
                  <TableCell>Four</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )
        }
        drawers={[
          {
            id: 'api',
            name: 'API',
            content: 'API Content'
          },
          {
            id: 'help',
            name: 'Help',
            content: 'Help Content'
          }
        ]}
      />
    );
  }
}

const reducer = combineReducers({
  cards: cardReducer
});

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById('cf-builder-card--basic')
);
