import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Modal from '../src/Modal';
import {GatewayDest, GatewayProvider} from 'react-gateway';

describe('Modal', function() {
  it('should hide the modal when `isOpen` is `false`', function() {
    assertEqualJSX(
      <GatewayProvider>
        <div>
          <Modal isOpen={false} onRequestClose={function() {}}/>
          <GatewayDest name="modal"/>
        </div>
      </GatewayProvider>,
      // should be equal to
      <div>
        <noscript/>
        <div>
          <span></span>
        </div>
      </div>
    );
  });

  it('should render the modal when `isOpen` is `true`', function() {
    assertEqualJSX(
      <GatewayProvider>
        <div>
          <Modal isOpen={true} onRequestClose={function() {}}/>
          <GatewayDest name="modal"/>
        </div>
      </GatewayProvider>,
      // should be equal to
      <div>
        <noscript/>
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
      <GatewayProvider>
        <div>
          <Modal type="confirm" isOpen={true} onRequestClose={function() {}}/>
          <GatewayDest name="modal"/>
        </div>
      </GatewayProvider>,
      // should be equal to
      <div>
        <noscript/>
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
});
