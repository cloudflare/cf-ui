const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardMessages = require('../src/CardMessages');

describe('CardMessages', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardMessages messages={[
        { type: 'info', content: 'Message One' },
        { type: 'error', content: 'Message Two' }
      ]}/>,
      // should equal
      <div className="cf-card__messages">
        <div role="alert" className="cf-card__message cf-card__message--info">
          Message One
        </div>
        <div role="alert" className="cf-card__message cf-card__message--error">
          Message Two
        </div>
      </div>
    );
  });
});
