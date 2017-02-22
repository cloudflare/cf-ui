const React = require('react');
const {PropTypes} = React;

const Progress = require('cf-component-progress');
const {Button} = require('cf-component-button');
const {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalActions
} = require ('cf-component-modal');

class Wizard extends React.Component {

  constructor(props) {
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  // The Progress component expectes a similar set of steps
  // with a few less fields
  extractProgressSteps(wizardSteps) {
    return wizardSteps.map((step) => {
      const {id, label, disabled} = step;
      return {id, label, disabled};
    });
  }

  handleNextClick() {
    const {steps, activeStep, onStepChange} = this.props;
    const curIdx = steps.findIndex(s => s.id === activeStep);
    const nextStep = steps[curIdx + 1];
    onStepChange(nextStep);
  }

  handleBackClick() {
    const {steps, activeStep, onStepChange} = this.props;
    const curIdx = steps.findIndex(s => s.id === activeStep);
    const nextStep = steps[curIdx - 1];
    onStepChange(nextStep);
  }

  render() {
    const {
      steps,
      activeStep,
      isOpen,
      onStepChange,
      onClose,
      title
    } = this.props;

    const step = steps.find((s) => s.id === activeStep);
    const isLastStep = steps.indexOf(step) === (steps.length - 1);
    const isFirstStep = steps.indexOf(step) === 0;

    return (
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className="cf-wizard">
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose onClick={onClose}/>
          </ModalHeader>
          <ModalBody>
            <div className="cf-wizard__body">
              <Progress active={activeStep}
                onChange={onStepChange}
                steps={this.extractProgressSteps(steps)} />
              <div className="cf-wizard__step-content">
                {step.content}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            {!isFirstStep && (
              <Button
                type="default"
                onClick={this.handleBackClick}>Back a Step</Button>
            )}
            <ModalActions>
              <Button
                type="default"
                onClick={onClose}>Cancel</Button>
              {!isLastStep && (
                <Button type="primary" onClick={this.handleNextClick}>
                  Next
                </Button>
              )}
              {step.buttons || null}
            </ModalActions>
          </ModalFooter>
        </div>
      </Modal>
    );
  }
}

Wizard.propTypes = {
  title: PropTypes.string.isRequired,
  activeStep: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onStepChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired
};

Wizard.defaultProps = {
  steps: []
};

module.exports = Wizard;
