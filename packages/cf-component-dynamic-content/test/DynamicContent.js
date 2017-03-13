import React from 'react';
import renderer from 'react-test-renderer';
import DynamicContent from 'cf-component-dynamic-content';

test('should render', function() {
  const component = renderer.create(
    <DynamicContent
      dangerouslySetInnerHTML={{ __html: '<p>Hello World</p>' }}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
