# cf-component-icon

> Cloudflare Icon Component

## Installation

```sh
$ npm install cf-component-icon
```

## Usage

```jsx
import React from 'react';
import { Icon } from 'cf-component-icon';

import { createComponent } from 'cf-style-container';

const ColorWrapper = createComponent(
  () => ({
    backgroundColor: '#f1f1f1',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '15px',
    maxWidth: 750,
    display: 'block'
  }),
  'span'
);

const TextWrapper = createComponent(
  () => ({
    paddingRight: '20px',
    paddingLeft: '5px'
  }),
  'span'
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
      <Icon label="drive" type="drive" />
      <Icon label="exclamation-sign" type="exclamation-sign" />
      <Icon label="facebook" type="facebook" />
      <Icon label="file" type="file" />
      <Icon label="filter" type="filter" />
      <Icon label="flowchart" type="flowchart" />
      <Icon label="gear" type="gear" />
      <Icon label="google-plus" type="google-plus" />
      <Icon label="hamburger" type="hamburger" />
      <Icon label="happy" type="happy" />
      <Icon label="help" type="help" />
      <Icon label="info-sign" type="info-sign" />
      <Icon label="linkedin" type="linkedin" />
      <Icon label="list" type="list" />
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
      <Icon label="2x" size="2x" type="gear" />
      <TextWrapper>2x</TextWrapper>
      <Icon label="2.5x" size="2.5x" type="gear" />
      <TextWrapper>2.5x</TextWrapper>
      <Icon label="3x" size="3x" type="gear" />
      <TextWrapper>3x</TextWrapper>
      <Icon label="3.5x" size="3.5x" type="gear" />
      <TextWrapper>3.5x</TextWrapper>
      <Icon label="4x" size="4x" type="gear" />
      <TextWrapper>4x</TextWrapper>
    </p>

    <p>Colors:</p>
    <p>
      <ColorWrapper>
        <Icon label="default" size="2x" type="search" color="default" />
        <TextWrapper>Default</TextWrapper>
        <Icon label="primary" size="2x" type="caret-right" color="primary" />
        <TextWrapper>Primary</TextWrapper>
        <Icon label="success" size="2x" type="ok" color="success" />
        <TextWrapper>Success</TextWrapper>
        <Icon label="warning" size="2x" type="info-sign" color="warning" />
        <TextWrapper>Warning</TextWrapper>
        <Icon label="danger" size="2x" type="exclamation-sign" color="danger" />
        <TextWrapper>Danger</TextWrapper>
        <Icon label="black" size="2x" type="remove" color="black" />
        <TextWrapper>Black</TextWrapper>
        <Icon label="white" size="2x" type="shield" color="white" />
        <TextWrapper>White</TextWrapper>
      </ColorWrapper>
    </p>
  </div>
);

export default IconComponent;

```

If you specifically don't want to use a `label` then you must pass `false`.
