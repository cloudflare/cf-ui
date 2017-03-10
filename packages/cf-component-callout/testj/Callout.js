import React from 'react';
import renderer from 'react-test-renderer';
import Callout from 'cf-component-callout';

test('should render "default" by default', () => {
  const component = renderer.create(
    <Callout title="Hello" content="World" />,
    // should equal
    <div className="cf-callout cf-callout--default">
      <h3 className="cf-callout__heading">Hello</h3>
      <p className="cf-callout__content">World</p>
    </div>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render "type"', () => {
  const component = renderer.create(
    <Callout type="info" title="Hello" content="World" />,
    // should equal
    <div className="cf-callout cf-callout--info">
      <h3 className="cf-callout__heading">Hello</h3>
      <p className="cf-callout__content">World</p>
    </div>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
