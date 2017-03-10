import React from 'react';
import renderer from 'react-test-renderer';
import Strike from '../src/Strike';

describe('Strike', () => {
  test('should render', () => {
    const component = renderer.create(<Strike>Strike</Strike>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
