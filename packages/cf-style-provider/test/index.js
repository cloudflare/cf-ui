import React, { PropTypes } from 'react';
import { StyleProvider } from '../../cf-style-provider/src/index';
import { createComponent } from '../../cf-style-container/src/index';
import { Button } from '../../cf-component-button/src/index';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';
import { mount } from 'enzyme';
import jsdom from 'jsdom';

test('StyleProvider should render', () => {
  const component = renderer.create(<StyleProvider><div /></StyleProvider>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('StyleProvider should render styles', () => {
  const doc = jsdom.jsdom(
    `
	  <!doctype html>
	  <html>
	  <head>
	    <style id="stylesheet"></style>
	    <style id="font-stylesheet"></style>
	  </head>
	  <asd></asd>
	  <body>
	    <div id="react-app"></div>
	  </body>
	  </html>`
  );

  global.document = doc;
  global.window = doc.defaultView;

  const fontNode = doc.getElementById('font-stylesheet');
  const cssNode = doc.getElementById('stylesheet');
  const htmlNode = doc.getElementById('react-app');

  const Foo = createComponent(() => ({
    margin: '10px',
    color: 'red'
  }));

  render(
    <StyleProvider fontNode={fontNode} cssNode={cssNode}>
      <Foo />
    </StyleProvider>,
    htmlNode
  );

  expect(doc.documentElement.outerHTML).toMatch(
    /.cf-a{margin:10px}.cf-b{color:red}/
  );
});

test('StyleProvider should pass custom props through', () => {
  const Foo = () => <div />;
  const wrapper = mount(<StyleProvider number={10}><Foo /></StyleProvider>);
  wrapper.setProps({ something: true });
  expect(wrapper.prop('something')).toBeTruthy();
  expect(wrapper.prop('number')).toBe(10);
});
