import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { cardActions, cardReducer, CardBuilder } from 'cf-builder-card';
import { mount } from 'enzyme';

let store;

beforeEach(() => {
  store = createStore(
    combineReducers({
      cards: cardReducer
    })
  );
});

test('should render a card', () => {
  const component = renderer.create(
    <Provider store={store}>
      <CardBuilder
        cardName="test-card"
        title="This is a Card"
        description="This is the description of a card."
      />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render the description with markdown', () => {
  const wrapper = mount(
    <Provider store={store}>
      <CardBuilder
        cardName="test-card"
        title="This is a Card"
        description="This is the *description* of a card."
      />
    </Provider>
  );

  const description = wrapper
    .find('.cf-card__content')
    .find('.cf-dynamic-content')
    .render() // entering dynamic content
    .find('p')
    .html();

  expect(description).toBe('This is the <em>description</em> of a card.');
});

test('should render button', () => {
  const button = <button>Click Me</button>;
  const component = renderer.create(
    <Provider store={store}>
      <CardBuilder
        cardName="test-card"
        title="This is a Card"
        description="This is the *description* of a card."
        control={button}
      />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render a table', () => {
  const table = <table />;
  const component = renderer.create(
    <Provider store={store}>
      <CardBuilder
        cardName="test-card"
        title="This is a Card"
        description="This is the *description* of a card."
        table={table}
      />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render drawers', () => {
  const component = renderer.create(
    <Provider store={store}>
      <CardBuilder
        cardName="test-card"
        title="This is a Card"
        description="This is the *description* of a card."
        drawers={[
          {
            id: 'help',
            name: 'Help',
            content: 'Help Content'
          },
          {
            id: 'api',
            name: 'API',
            content: 'API Content'
          }
        ]}
      />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
