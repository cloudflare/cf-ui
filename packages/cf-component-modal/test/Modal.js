const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Modal = require('../src/Modal');
const {GatewayProvider, Gateway, GatewayDest} = require('react-gateway');

class Application extends React.Component {
  render() {
    return (
      <GatewayProvider>
        <div>
          {this.props.children}
          <GatewayDest name="modal"/>
        </div>
      </GatewayProvider>
    );
  }
}

describe('Modal', function() {
  it('should hide the modal when `isOpen` is `false`', function() {
    assertEqualJSX(
      <Application>
        <Modal isOpen={false} onRequestClose={function() {}}/>
      </Application>,
      // should equal
      <div>
        <div>
          <span></span>
        </div>
      </div>
    );
  });

  it('should render the modal when `isOpen` is `true`', function() {
    assertEqualJSX(
      <Application>
        <Modal isOpen={true} onRequestClose={function() {}}/>
      </Application>,
      // should equal
      <div>
        <div>
          <span>
            <div className="cf-modal__backdrop-scroller">
              <div className="cf-modal__backdrop-outer">
                <div className="cf-modal__backdrop">
                  <div className="cf-modal" tabIndex="-1"></div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  });

  it('should add a `className` if `type` is `confirm`', function() {
    assertEqualJSX(
      <Application>
        <Modal type="confirm" isOpen={true} onRequestClose={function() {}}/>
      </Application>,
      // should equal
      <div>
        <div>
          <span>
            <div className="cf-modal__backdrop-scroller">
              <div className="cf-modal__backdrop-outer">
                <div className="cf-modal__backdrop">
                  <div className="cf-modal cf-modal--confirm" tabIndex="-1"></div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  });

  it('should add a `className` if `width` is defined', function() {
    assertEqualJSX(
      <Application>
        <Modal width="wide" isOpen={true} onRequestClose={function() {}}/>
      </Application>,
      // should equal
      <div>
        <div>
          <span>
            <div className="cf-modal__backdrop-scroller">
              <div className="cf-modal__backdrop-outer">
                <div className="cf-modal__backdrop">
                  <div className="cf-modal cf-modal--wide" tabIndex="-1"></div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  });
});
