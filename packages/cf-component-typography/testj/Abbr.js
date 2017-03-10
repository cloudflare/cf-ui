import React from 'react';
import renderer from 'react-test-renderer';
import Abbr from '../src/Abbr';

describe('Abbr', () => {
  test('should render', () => {
    const component = renderer.create(<Abbr title="Abbreviation">Abbr</Abbr>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
