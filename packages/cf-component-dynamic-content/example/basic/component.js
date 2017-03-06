import React from 'react';
import DynamicContent from 'cf-component-dynamic-content';

class DynamicContentComponent extends React.Component {
  render() {
    return (
      <DynamicContent
        dangerouslySetInnerHTML={{
          __html: '<p>Not an XSS attack, I swear.</p>'
        }}
      />
    );
  }
}

export default DynamicContentComponent;
