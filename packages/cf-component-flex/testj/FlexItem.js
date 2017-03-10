import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { FlexItem } from 'cf-component-flex';

test('should render', () => {
  const component = renderer.create(<FlexItem>Hello</FlexItem>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render collapsed', () => {
  const component = renderer.create(<FlexItem collapse>Hello</FlexItem>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render flex item styles', () => {
  const wrapper = render(
    <FlexItem order={1} grow={2} shrink={3} basis="auto" alignSelf="center">
      Hello
    </FlexItem>
  );

  const css = wrapper.find('div').first().css();
  expect(css['order']).toBe('1');
  expect(css['flex-grow']).toBe('2');
  expect(css['flex-shrink']).toBe('3');
  expect(css['flex-basis']).toBe('auto');
  expect(css['align-self']).toBe('center');
});
