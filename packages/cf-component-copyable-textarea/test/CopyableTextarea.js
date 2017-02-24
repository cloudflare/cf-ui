const React = require('react');
const TestUtils = require('react-addons-test-utils');
const sinon = require('sinon');
const expect = require('chai').expect;
const assertEqualJSX = require('assert-equal-jsx');
const CopyableTextarea = require('../src/CopyableTextarea');

describe('CopyableTextarea', () => {
  it('should render', () => {
    assertEqualJSX(
      <CopyableTextarea
        name="example"
        value="content"
        clickToCopyText="click here"
        copiedTextToClipboardText="copied"
        pressCommandOrCtrlCToCopyText="press here"
      />,
      <div className="cf-copyable-textarea">
        <textarea
          className="cf-textarea cf-textarea--readonly"
          readOnly
          name="example"
          value="content"
          onChange={() => {}}
        />
        <p className="cf-copyable-textarea__help-text">click here</p>
      </div>
    );
  });

  it('should call onCopy on focus', () => {
    // because under Karma, document.execCommand('copy') always returns false
    sinon.stub(document, 'execCommand').returns(true);

    let clicked = false;

    const copyableTextarea = TestUtils.renderIntoDocument(
      <CopyableTextarea
        name="example"
        value="content"
        onCopy={() => clicked = true}
      />
    );
    const textarea = TestUtils.findRenderedDOMComponentWithClass(
      copyableTextarea,
      'cf-textarea'
    );

    TestUtils.Simulate.focus(textarea);
    expect(clicked).to.be.true;

    document.execCommand.restore();
  });

  it('should render copied help text after copying', () => {
    // because under Karma, document.execCommand('copy') always returns false
    sinon.stub(document, 'execCommand').returns(true);

    const copyableTextarea = TestUtils.renderIntoDocument(
      <CopyableTextarea
        name="example"
        value="content"
        copiedTextToClipboardText="copied"
      />
    );
    const textarea = TestUtils.findRenderedDOMComponentWithClass(
      copyableTextarea,
      'cf-textarea'
    );
    const helpText = TestUtils.findRenderedDOMComponentWithClass(
      copyableTextarea,
      'cf-copyable-textarea__help-text'
    );

    TestUtils.Simulate.focus(textarea);

    expect(helpText.innerText.trim()).to.be.equal('copied');

    document.execCommand.restore();
  });

  it('should render press help text if copying was not successful', () => {
    const copyableTextarea = TestUtils.renderIntoDocument(
      <CopyableTextarea
        name="example"
        value="content"
        pressCommandOrCtrlCToCopyText="press here"
      />
    );
    const textarea = TestUtils.findRenderedDOMComponentWithClass(
      copyableTextarea,
      'cf-textarea'
    );
    const helpText = TestUtils.findRenderedDOMComponentWithClass(
      copyableTextarea,
      'cf-copyable-textarea__help-text'
    );

    TestUtils.Simulate.focus(textarea);

    expect(helpText.innerText.trim()).to.be.equal('press here');
  });
});
