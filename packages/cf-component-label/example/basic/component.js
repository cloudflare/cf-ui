import React from 'react';
import Label from 'cf-component-label';

const LabelComponent = () => (
  <p>
    <Label type="default">Default</Label>
    <Label type="info">Info</Label>
    <Label type="success">Success</Label>
    <Label type="warning">Warning</Label>
    <Label type="error">Error</Label>
  </p>
);

export default LabelComponent;
