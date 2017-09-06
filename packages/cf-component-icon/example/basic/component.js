import React from 'react';
import { Icon } from 'cf-component-icon';

import { createComponent } from 'cf-style-container';

const ColorWrapper = createComponent(
  () => ({
    backgroundColor: '#f1f1f1',
    paddingTop: '10px',
    paddingBottom: '10px'
  }),
  'div'
);

const IconComponent = () => (
  <div>
    <p>Types:</p>
    <p>
      <Icon label="bolt" type="bolt" />
      <Icon label="calendar" type="calendar" />
      <Icon label="caret-down" type="caret-down" />
      <Icon label="caret-left" type="caret-left" />
      <Icon label="caret-right" type="caret-right" />
      <Icon label="caret-up" type="caret-up" />
      <Icon label="chart" type="chart" />
      <Icon label="clipboard" type="clipboard" />
      <Icon label="close" type="close" />
      <Icon label="drive" type="drive" />
      <Icon label="exclamation-sign" type="exclamation-sign" />
      <Icon label="facebook" type="facebook" />
      <Icon label="file" type="file" />
      <Icon label="filter" type="filter" />
      <Icon label="flowchart" type="flowchart" />
      <Icon label="gear" type="gear" />
      <Icon label="googleplus" type="googleplus" />
      <Icon label="hamburger" type="hamburger" />
      <Icon label="happy" type="happy" />
      <Icon label="help" type="help" />
      <Icon label="info-sign" type="info-sign" />
      <Icon label="linkedin" type="linkedin" />
      <Icon label="list" type="list" />
      <Icon label="loading" type="loading" />
      <Icon label="lock" type="lock" />
      <Icon label="ok" type="ok" />
      <Icon label="ok-sign" type="ok-sign" />
      <Icon label="pause" type="pause" />
      <Icon label="plus" type="plus" />
      <Icon label="refresh" type="refresh" />
      <Icon label="remove" type="remove" />
      <Icon label="resize-horizontal" type="resize-horizontal" />
      <Icon label="sad" type="sad" />
      <Icon label="search" type="search" />
      <Icon label="shield" type="shield" />
      <Icon label="speech" type="speech" />
      <Icon label="time" type="time" />
      <Icon label="twitter" type="twitter" />
      <Icon label="upload" type="upload" />
      <Icon label="wrench" type="wrench" />
    </p>

    <p>Sizes:</p>
    <p>
      <Icon label="2x" size="2x" type="gear" />2x
      <Icon label="2.5x" size="2.5x" type="gear" />2.5x
      <Icon label="3x" size="3x" type="gear" />3x
      <Icon label="3.5x" size="3.5x" type="gear" />3.5x
      <Icon label="4x" size="4x" type="gear" />4x
    </p>

    <p>Colors:</p>
    <p>
      <ColorWrapper>
        <Icon label="default" size="3x" type="gear" color="default" />Default
        <Icon label="primary" size="3x" type="gear" color="primary" />Primary
        <Icon label="success" size="3x" type="gear" color="success" />Success
        <Icon label="warning" size="3x" type="gear" color="warning" />Warning
        <Icon label="danger" size="3x" type="gear" color="danger" />Danger
        <Icon label="black" size="3x" type="gear" color="black" />Black
        <Icon label="white" size="3x" type="gear" color="white" />White
      </ColorWrapper>
    </p>

  </div>
);

export default IconComponent;
