import React from 'react';
import renderer from 'react-test-renderer';
import { Page } from 'cf-component-page';

describe('Page', function() {
  test('should render', function() {
    const component = renderer.create(<Page>Hello World</Page>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
