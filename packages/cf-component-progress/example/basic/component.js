import React from 'react';
import {render} from 'react-dom';

import Progress from '../../src/index';

class Component extends React.Component {
  state = {
    activeStep: 'foo'
  };

  handleStepChange = step => {
    this.setState({
      activeStep: step
    });
  };

  render() {
    return (
      <Progress
        active={this.state.activeStep}
        onChange={this.handleStepChange}
        steps={[
          { id: 'foo', label: 'Foo', disabled: false },
          { id: 'bar', label: 'Bar', disabled: false },
          { id: 'baz', label: 'Baz', disabled: true  }
        ]}/>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-progress--basic')
);
