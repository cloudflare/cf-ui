import React, { PropTypes } from 'react';
import { StyleProvider } from '../../cf-style-provider/src/index';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test('StyleProvider should render', () => {
  const component = renderer.create(<StyleProvider><div /></StyleProvider>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('StyleProvider should pass custom props through', () => {
  const Foo = () => <div />;
  const wrapper = mount(<StyleProvider number={10}><Foo /></StyleProvider>);
  wrapper.setProps({ something: true });
  expect(wrapper.prop('something')).toBeTruthy();
  expect(wrapper.prop('number')).toBe(10);
});
