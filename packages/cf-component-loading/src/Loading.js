import React from 'react';
import Icon from 'cf-component-icon';

export default class Loading extends React.Component {
  render() {
    return <Icon type="refresh" label="Refresh" role="status" />;
  }
}
