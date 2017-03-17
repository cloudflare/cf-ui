import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select from 'cf-component-select';

test('should render', () => {
  const tree = shallow(<Select />);
  expect(toJson(tree)).toMatchSnapshot();
});
