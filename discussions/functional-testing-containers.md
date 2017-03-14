# Functional Testing Containers

### Technical Decision

Instead of writing unit tests for components, we should focus on writing
functional tests for containers.

### TL;DR

Using Redux, 99% of our logic lives in actions, reducers, and selectors. So
there's very few "unit" tests to be written for components. Instead of trying
to write unit tests, let's just focus on functional testing.

### Thinking

Our redux actions, reducers, and selectors are all "pure" functions and as such
are extremely easy to unit test. Which is great because 99% of our logic ends
up living inside them. Then there are components are supposed to be just pure
functions that take state and render UI.

A unit test for state => ui looks something like this:

```js
test('should render the list of items', () => {
  var items = [1, 2, 3];

  var listItems = render(<MyComponent items={items}/>)
    .find(ListItem);

  assert.equal(listItems.length, 3);
});
```

So those are great, they are easy to write, and the are a sanity check to make
sure it vaguely does the correct thing.

But I want to focus on testing user interactions.

So we have cf-ui which has all of the individual UI component that we should
almost always be composing together to create more complex components in our
application.

These components within cf-ui already have unit tests for all of the user
interactions (or at least they should if anything is missing).

So unit testing user interaction within application components looks like this:

```js
class AppComponent extends React.Component {
  render() {
    return <UiComponent onClick={this.props.onClick}/>
  }
}
```

```js
test('should do something', () => {
  var onClickStub = stub();

  render(<AppComponent onClick={onClickStub}/>)
    .find(UiComponent)
    .simulate('click');

  assert.equal(onClickStub.callCount, 1);
});
```

This seems like a good test, but the point that was made was that this isn't
technically a unit test because we are re-testing that `<UiComponent/>` calls
`onClick` when it has been clicked.

> **Note:** The reason this came up is because this test doesn't actually work
> if you are using React's shallow rendering. You have to render the entire
> tree in order to get it working.

Okay, so what is the actual unit test to write here if we're being pedantic?

```js
test('should do something', () => {
  var onClickStub = stub();

  var onClickProp = render(<AppComponent onClick={onClickStub}/>)
    .find(UiComponent)
    .getProp('onClick');

  onClickProp();

  assert.equal(onClickStub.callCount, 1);
});
```

Here we are finding the `<UiComponent/>`, grabbing its `onClick` handler and
calling it manually.

So this technically covers every discrete unit, but what is the point? We're
asserting that in our `<AppComponent/>` we wrote exactly the code that we wrote
in the tests and nothing else:

```js
<UiComponent onClick={this.props.onClick}/>
```

So great, we have 100% test coverage, and all unit tests pass:

![All unit tests pass](https://cloud.githubusercontent.com/assets/952783/15878456/f0f2c00e-2ccf-11e6-9e0d-816a85d70097.gif)

So my suggestion is that we never write unit tests for user interactions in our
app, and instead we focus on writing functional tests for our containers.

These tests would look something like:

```js
test('should do something', () => {
  var mockStore = createMockStore();

  var container = render(
    <Provider store={mockStore}>
      <AppContainer/>
    </Provider>
  );

  stubMethod(api, 'resourceGet', onSuccess => {
    onSuccess(createApiResponse({...}));
  });

  container.find(Button).simulate('click');

  assert.deepEqual(mockStore.getActions(), [{
    type: ActionTypes.MODAL_OPEN
  }, {
    type: ActionTypes.API_RESOURCE_GET_REQUEST
  }, {
    ...
  }]);

  assert.equal(container.find(Modal).length, 1);
});
```

Obviously this is oversimplified from what it would be today, but I want us to
spend a lot of time and energy into making these functional tests easy enough
to write in your sleep.

The reason I'm suggesting doing this instead of writing unit tests for user
interactions is because:

- The unit tests are boring to write and do get us a whole lot.
- If we're writing these unit tests we're taking away time we could be writing
  the more beneficial functional tests.

> **Note:** I'm specifically talking about not unit testing user interaction.
> The state => ui unit tests should definitely stick around.
