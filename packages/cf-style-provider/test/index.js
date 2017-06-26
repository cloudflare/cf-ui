import React from 'react';
import PropTypes from 'prop-types';
import { StyleProvider } from '../src/index';
import felaSnapshot from '../src/felaSnapshot';
import { createComponent } from '../../cf-style-container/src/index';
import { Button } from '../../cf-component-button/src/index';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';
import { mount } from 'enzyme';
import { html as beautify } from 'js-beautify';

describe('StyleProvider', () => {
  it('should render', () => {
    const component = renderer.create(<StyleProvider><div /></StyleProvider>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render styles', () => {
    const htmlNode = document.createElement('div');
    document.body.appendChild(htmlNode);

    const Foo = createComponent(() => ({
      margin: '10px',
      color: 'red',
      desktop: {
        fontSize: '1px'
      }
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

  it('should pass custom props through', () => {
    const Foo = () => <div />;
    const wrapper = mount(<StyleProvider number={10}><Foo /></StyleProvider>);
    wrapper.setProps({ something: true });
    expect(wrapper.prop('something')).toBeTruthy();
    expect(wrapper.prop('number')).toBe(10);
  });
});

describe('felaSnapshot', () => {
  it('should return a formatted snapshot object', () => {
    const Div = createComponent(() => ({ color: 'black' }));
    const snapshot = felaSnapshot(<Div />);
    expect(snapshot).toMatchSnapshot();
  });
});
