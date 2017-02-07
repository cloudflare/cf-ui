const React = require('react');
const expect = require('chai').expect;
const enzyme = require('enzyme');
const assertEqualJSX = require('assert-equal-jsx');
const FlexItem = require('../src/FlexItem');

describe('FlexItem', function() {

  it('should render', function() {
    assertEqualJSX(
      <FlexItem>Hello</FlexItem>,
      // should equal
      <div className="cf-flex__item">Hello</div>
    );
  });

  it('should render collapsed', function() {
    assertEqualJSX(
      <FlexItem collapse>Hello</FlexItem>,
      // should equal
      <div className="cf-flex__item cf-flex__item--collapse">Hello</div>
    );
  });

  it('should render flex item styles', function () {
    const wrapper = enzyme.render(
      <FlexItem
        order={1}
        grow={2}
        shrink={3}
        basis="auto"
        alignSelf="center">
        Hello
      </FlexItem>
    );

    const css = wrapper.find('div').first().css();
    expect(css['order']).to.equal('1');
    expect(css['flex-grow']).to.equal('2');
    expect(css['flex-shrink']).to.equal('3');
    expect(css['flex-basis']).to.equal('auto');
    expect(css['align-self']).to.equal('center');
  });

});
