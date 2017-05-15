# cf-component-icon

> Cloudflare Icon Component

## Installation

```sh
$ npm install cf-component-icon
```

## Usage

```jsx
import React from 'react';
import Icon from 'cf-component-icon';

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
      <Icon label="chevron-down" type="chevron-down" />
      <Icon label="chevron-left" type="chevron-left" />
      <Icon label="chevron-right" type="chevron-right" />
      <Icon label="chevron-up" type="chevron-up" />
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
      <Icon label="remove-sign" type="remove-sign" />
      <Icon label="resize-horizontal" type="resize-horizontal" />
      <Icon label="sad" type="sad" />
      <Icon label="search" type="search" />
      <Icon label="shield" type="shield" />
      <Icon label="speech" type="speech" />
      <Icon label="time" type="time" />
      <Icon label="twitter" type="twitter" />
      <Icon label="upload" type="upload" />
      <Icon label="widen" type="widen" />
      <Icon label="wrench" type="wrench" />
    </p>

    <p>Sizes:</p>
    <p>
      <Icon label="2x" type="gear" />
      <Icon label="3x" type="gear" />
      <Icon label="4x" type="gear" />
      <Icon label="large" type="gear" />
      <Icon label="xlarge" type="gear" />
    </p>

    <p>Border:</p>
    <p><Icon label="border" type="gear" border /></p>

    <p>Spin:</p>
    <p><Icon label="border" type="gear" spin /></p>

    <p>Muted:</p>
    <p><Icon label="border" type="gear" muted /></p>

    <p>White:</p>
    <p><Icon label="border" type="gear" white /></p>
  </div>
);

export default IconComponent;
```

Other options:

```js
<Icon border spin muted white/>
```

If you specifically don't want to use a `label` then you must pass `false`.
