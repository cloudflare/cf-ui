const assert = require('assert');
const React = require('react');
const {mount} = require('enzyme');
const {createStore, combineReducers} = require('redux');
const {Provider} = require('react-redux');
const {
  cardActions,
  cardReducer,
  CardBuilder
} = require('../src/index');

describe('CardBuilderTest', () => {
  let store;

  beforeEach(() => {
    store = createStore(combineReducers({
      cards: cardReducer
    }));
  });

  it('should render a card', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CardBuilder
          cardName="test-card"
          title="This is a Card"
          description="This is the description of a card."/>
      </Provider>
    );

    assert.ok(wrapper.find('.cf-card').length);
    assert.ok(wrapper.find('.cf-card__title').length);
  });

  it('should render the description with markdown', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CardBuilder
          cardName="test-card"
          title="This is a Card"
          description="This is the *description* of a card."/>
      </Provider>
    );

    const description = wrapper
      .find('.cf-card__content')
      .find('.cf-dynamic-content')
      .render() // entering dynamic content
      .find('p')
      .html();

    assert.equal(description, 'This is the <em>description</em> of a card.');
  });

  it('should render a control', () => {
    const button = <button>Click Me</button>;

    const wrapper = mount(
      <Provider store={store}>
        <CardBuilder
          cardName="test-card"
          title="This is a Card"
          description="This is the *description* of a card."
          control={button}/>
      </Provider>
    );

    const control = wrapper
      .find('.cf-card__control');

    assert.ok(control.contains(button));
  });

  it('should render a table', () => {
    const table = <table/>;

    const wrapper = mount(
      <Provider store={store}>
        <CardBuilder
          cardName="test-card"
          title="This is a Card"
          description="This is the *description* of a card."
          table={table}/>
      </Provider>
    );

    const section = wrapper
      .find('.cf-card__section')
      .at(1);

    assert.ok(section.contains(table));
  });

  it('should render drawers', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CardBuilder
          cardName="test-card"
          title="This is a Card"
          description="This is the *description* of a card."
          drawers={[{
            id: 'help',
            name: 'Help',
            content: 'Help Content'
          }, {
            id: 'api',
            name: 'API',
            content: 'API Content'
          }]}/>
      </Provider>
    );

    assert.ok(wrapper.find('.cf-card__toolbar').length);
    assert.ok(wrapper.find('.cf-card__drawers_container').length);
    assert.equal(wrapper.find('.cf-card__toolbar_link').at(0).text(), 'Help');
    assert.equal(wrapper.find('.cf-card__toolbar_link').at(1).text(), 'API');
  });

  it('should toggle drawers', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CardBuilder
          cardName="test-card"
          title="This is a Card"
          description="This is the *description* of a card."
          drawers={[{
            id: 'help',
            name: 'Help',
            content: 'Help Content'
          }, {
            id: 'api',
            name: 'API',
            content: 'API Content'
          }]}/>
      </Provider>
    );

    const links = wrapper.find('.cf-card__toolbar_link');
    const helpLink = links.at(0);
    const apiLink = links.at(1);

    helpLink.simulate('click');
    assert.equal(wrapper.find('.cf-card__drawer--active').text(), 'Help Content');

    apiLink.simulate('click');
    assert.equal(wrapper.find('.cf-card__drawer--active').text(), 'API Content');

    apiLink.simulate('click');
    assert.ok(!wrapper.find('.cf-card__drawer--active').length);
  });
});
