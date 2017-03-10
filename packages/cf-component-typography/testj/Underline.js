import React from 'react';
import renderer from 'react-test-renderer';
import Underline from '../src/Underline';

describe('Underline', () => {
  test('should render', () => {
    const component = renderer.create(<Underline>Underline</Underline>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
