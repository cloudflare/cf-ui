import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Flex } from 'cf-component-flex';

test('should render', () => {
  const component = renderer.create(<Flex>Hello</Flex>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render thin spacing', () => {
  const component = renderer.create(<Flex spacing="thin">Hello</Flex>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render wide spacing', () => {
  const component = renderer.create(<Flex spacing="wide">Hello</Flex>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render flex container styles', () => {
  const wrapper = render(
    <Flex
      direction="row"
      wrap="wrap"
      justifyContent="flex-start"
      alignItems="center"
      alignContent="stretch"
    >
      Hello
    </Flex>
  );

  const css = wrapper.find('div').first().css();
  expect(css['flex-direction']).toBe('row');
  expect(css['flex-wrap']).toBe('wrap');
  expect(css['justify-content']).toBe('flex-start');
  expect(css['align-items']).toBe('center');
  expect(css['align-content']).toBe('stretch');
});
