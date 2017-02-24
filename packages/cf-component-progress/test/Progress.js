const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Progress = require('../src/Progress');
const Link = require('cf-component-link');

describe('Progress', function() {
  it('should render', function() {
    assertEqualJSX(
      <Progress
        active="foo"
        onChange={() => {}}
        steps={[
          { id: 'foo', label: 'Foo', disabled: false },
          { id: 'bar', label: 'Bar', disabled: false },
          { id: 'baz', label: 'Baz', disabled: true }
        ]}
      />,
      // should equal:
      <div className="cf-progress">
        <progress className="cf-progress__bar" max={3} value={1} />
        <ol className="cf-progress__items">
          <li
            className="cf-progress__item cf-progress__item--active"
            style={{ width: '33.3333%' }}
          >
            <Link onClick={() => {}}>Foo</Link>
          </li>
          <li className="cf-progress__item" style={{ width: '33.3333%' }}>
            <Link onClick={() => {}}>Bar</Link>
          </li>
          <li
            className="cf-progress__item cf-progress__item--disabled"
            style={{ width: '33.3333%' }}
          >
            <Link onClick={() => {}} disabled>Baz</Link>
          </li>
        </ol>
      </div>
    );
  });
});
