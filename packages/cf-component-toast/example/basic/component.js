import React from 'react';
import { Toast } from 'cf-component-toast';

class ToastComponent extends React.Component {
  render() {
    return (
      <div>
        <Toast type="success">
          Something very successful happened!!!
        </Toast>
        <Toast type="error">
          Something failed horribly
        </Toast>
        <Toast type="info">
          Please be advised
        </Toast>
      </div>
    );
  }
}

export default ToastComponent;
