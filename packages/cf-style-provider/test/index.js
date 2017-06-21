import React from 'react';
import PropTypes from 'prop-types';
import { StyleProvider } from '../../cf-style-provider/src/index';
import { createComponent } from '../../cf-style-container/src/index';
import { Button } from '../../cf-component-button/src/index';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';
import { mount } from 'enzyme';
import { html as beautify } from 'js-beautify';

test('StyleProvider should render', () => {
  const component = renderer.create(<StyleProvider><div /></StyleProvider>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('StyleProvider should render styles', () => {
  const htmlNode = document.createElement('div');
  document.body.appendChild(htmlNode);

  const Foo = createComponent(() => ({
    margin: '10px',
    color: 'red'
  }));

  render(
    <StyleProvider>
      <Foo />
    </StyleProvider>,
    htmlNode
  );

  expect(
    beautify(document.documentElement.outerHTML, { indent_size: 2 })
  ).toMatchSnapshot();
});

test('StyleProvider should pass custom props through', () => {
  const Foo = () => <div />;
  const wrapper = mount(<StyleProvider number={10}><Foo /></StyleProvider>);
  wrapper.setProps({ something: true });
  expect(wrapper.prop('something')).toBeTruthy();
  expect(wrapper.prop('number')).toBe(10);
});
