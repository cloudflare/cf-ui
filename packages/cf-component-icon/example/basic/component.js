import React from 'react';
import Icon from 'cf-component-icon';

const IconComponent = () => (
  <div>
    <p>Types (hover for type prop value):</p>
    <div
      style={{
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: 'repeat(auto-fill, minmax(10px, 1fr))'
      }}
    >
      <Icon label="api" type="api" />
      <Icon label="bolt" type="bolt" />
      <Icon label="calendar" type="calendar" />
      <Icon label="caret-down" type="caret-down" />
      <Icon label="caret-left" type="caret-left" />
      <Icon label="caret-right" type="caret-right" />
      <Icon label="caret-up" type="caret-up" />
      <Icon label="chart" type="chart" />
      <Icon label="chevron-down" type="chevron-down" />
      <Icon label="chevron-left" type="chevron-left" />
      <Icon label="chevron-right" type="chevron-right" />
      <Icon label="chevron-up" type="chevron-up" />
      <Icon label="clipboard" type="clipboard" />
      <Icon label="credit-card" type="credit-card" />
      <Icon label="door" type="door" />
      <Icon label="download" type="download" />
      <Icon label="drive" type="drive" />
      <Icon label="exclamation-sign" type="exclamation-sign" />
      <Icon label="facebook" type="facebook" />
      <Icon label="file" type="file" />
      <Icon label="filter" type="filter" />
      <Icon label="firebolt" type="firebolt" />
      <Icon label="flowchart" type="flowchart" />
      <Icon label="gear" type="gear" />
      <Icon label="googleplus" type="googleplus" />
      <Icon label="hamburger" type="hamburger" />
      <Icon label="happy" type="happy" />
      <Icon label="help" type="help" />
      <Icon label="info-sign" type="info-sign" />
      <Icon label="linkedin" type="linkedin" />
      <Icon label="list" type="list" />
      <Icon label="lock" type="lock" />
      <Icon label="mail" type="mail" />
      <Icon label="network" type="network" />
      <Icon label="ok" type="ok" />
      <Icon label="ok-sign" type="ok-sign" />
      <Icon label="pause" type="pause" />
      <Icon label="plus" type="plus" />
      <Icon label="refresh" type="refresh" />
      <Icon label="remove" type="remove" />
      <Icon label="remove-sign" type="remove-sign" />
      <Icon label="reorder" type="reorder" />
      <Icon label="resize-horizontal" type="resize-horizontal" />
      <Icon label="resize-vertical" type="resize-vertical" />
      <Icon label="sad" type="sad" />
      <Icon label="search" type="search" />
      <Icon label="shield" type="shield" />
      <Icon label="sppech" type="speech" />
      <Icon label="time" type="time" />
      <Icon label="twitter" type="twitter" />
      <Icon label="upload" type="upload" />
      <Icon label="widen" type="widen" />
      <Icon label="wrench" type="wrench" />
    </div>

    <p>Spin:</p>
    <p><Icon label="gear" type="gear" spin /></p>

    <p>Sizes (hover for the size prop value):</p>
    <p>
      <Icon label="1.5x" type="gear" size="1.5x" />
      <Icon label="2x" type="gear" size="2x" />
      <Icon label="2.5x" type="gear" size="2.5x" />
      <Icon label="3x" type="gear" size="3x" />
      <Icon label="3.5x" type="gear" size="3.5x" />
      <Icon label="4x" type="gear" size="4x" />
      <Icon label="large" type="gear" size="large" />
      <Icon label="xlarge" type="gear" size="xlarge" />
      <Icon label="huge" type="gear" size="huge" />
    </p>
  </div>
);

export default IconComponent;
