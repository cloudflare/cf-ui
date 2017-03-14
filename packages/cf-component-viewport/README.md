# cf-component-viewport

> Cloudflare Viewport Component

## Installation

```sh
$ npm install cf-component-viewport
```

## Usage

```jsx
import React from 'react';
import Viewport from 'cf-component-viewport';

const ViewportComponent = () => (
  <div>
    <p>Resize the window</p>

    <Viewport size="mobile">
      <p className="cf-viewport--is">size="mobile"</p>
    </Viewport>
    <Viewport not size="mobile">
      <p className="cf-viewport--not">not size="mobile"</p>
    </Viewport>

    <Viewport size="mobileWide">
      <p className="cf-viewport--is">size="mobileWide"</p>
    </Viewport>
    <Viewport not size="mobileWide">
      <p className="cf-viewport--not">not size="mobileWide"</p>
    </Viewport>

    <Viewport size="tablet">
      <p className="cf-viewport--is">size="tablet"</p>
    </Viewport>
    <Viewport not size="tablet">
      <p className="cf-viewport--not">not size="tablet"</p>
    </Viewport>

    <Viewport size="desktop">
      <p className="cf-viewport--is">size="desktop"</p>
    </Viewport>
    <Viewport not size="desktop">
      <p className="cf-viewport--not">not size="desktop"</p>
    </Viewport>

    <Viewport size="desktopLarge">
      <p className="cf-viewport--is">size="desktopLarge"</p>
    </Viewport>
    <Viewport not size="desktopLarge">
      <p className="cf-viewport--not">not size="desktopLarge"</p>
    </Viewport>
  </div>
);

export default ViewportComponent;
```
