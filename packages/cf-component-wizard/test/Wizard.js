const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Wizard = require('../src/Wizard');
const {GatewayProvider, GatewayDest} = require('react-gateway');

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

describe('Wizard', function() {
  it('should render', function() {
    assertEqualJSX(
      <Application>
        <Wizard
          activeStep="step1"
          onStepChange={() => {}}
          onClose={() => {}}
          isOpen={true}
          title="Create a thing"
          steps={[
            { id: 'step1', label: 'Step 1', content: <div>step1 body</div>},
            { id: 'step2', label: 'Step 2', content: <div>step2 body</div>},
            { id: 'step3', label: 'Step 3', content: <div>step3 body</div>}
          ]} />
      </Application>,
      <div>
        <div>
          <span>
            <div className="cf-modal__backdrop-scroller">
              <div className="cf-modal__backdrop-outer">
                <div className="cf-modal__backdrop">
                  <div className="cf-modal" tabIndex="-1">
                    <div className="cf-wizard">
                      <header className="cf-modal__header">
                        <div className="cf-modal__title">
                          <h3 className="cf-heading cf-heading--3">Create a thing</h3>
                        </div>
                        <span className="cf-modal__close">
                          <i className="cf-icon cf-icon--close cf-icon--2x"></i>
                        </span>
                      </header>
                      <div className="cf-modal__body">
                        <div className="cf-wizard__body">
                          <div className="cf-progress">
                            <progress className="cf-progress__bar" max="3" value="1"></progress>
                            <ol className="cf-progress__items">
                              <li className="cf-progress__item cf-progress__item--active" style={{width:'33.3333%'}}>
                                <a href="#!" role="button" className="cf-link">Step 1</a>
                              </li>
                              <li className="cf-progress__item" style={{width:'33.3333%'}}>
                                <a href="#!" role="button" className="cf-link">Step 2</a>
                              </li>
                              <li className="cf-progress__item" style={{width:'33.3333%'}}>
                                <a href="#!" role="button" className="cf-link">Step 3</a>
                              </li>
                            </ol>
                          </div>
                          <div className="cf-wizard__step-content">
                            <div>step1 body</div>
                          </div>
                        </div>
                      </div>
                      <div className="cf-modal__footer">
                        <div className="cf-modal__actions">
                          <button type="button" className="cf-btn cf-btn--default">Cancel</button>
                          <button type="button" className="cf-btn cf-btn--primary">Next</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  });
});




