const React = require('react');
const expect = require('chai').expect;
const enzyme = require('enzyme');
const assertEqualJSX = require('assert-equal-jsx');
const Flex = require('../src/Flex');

describe('Flex', function() {
  it('should render', function() {
    assertEqualJSX(
      <Flex>Hello</Flex>,
      // should equal
      <div className="cf-flex">Hello</div>
    );
  });

  it('should render spacing', function() {
    assertEqualJSX(
      <Flex spacing="thin">Hello</Flex>,
      // should equal
      <div className="cf-flex cf-flex--thin">Hello</div>
    );

    assertEqualJSX(
      <Flex spacing="wide">Hello</Flex>,
      // should equal
      <div className="cf-flex cf-flex--wide">Hello</div>
    );
  });

  it('should render flex container styles', function() {
    const wrapper = enzyme.render(
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
    expect(css['flex-direction']).to.equal('row');
    expect(css['flex-wrap']).to.equal('wrap');
    expect(css['justify-content']).to.equal('flex-start');
    expect(css['align-items']).to.equal('center');
    expect(css['align-content']).to.equal('stretch');
  });
});
