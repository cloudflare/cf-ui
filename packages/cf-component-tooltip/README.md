# cf-component-tooltip

> Cloudflare Tooltip Component

## Installation

```sh
$ npm install cf-component-tooltip
```

## Usage

```jsx
import React from 'react';
import { TooltipRegion, Tooltip } from 'cf-component-tooltip';

const TooltipComponent = () => (
  <div>
    <TooltipRegion>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ipsam
        {' '}
        <a href="#" title="Title of link">nice link</a>
        {' '}
        quae sint totam dolor distinctio quia eos ipsum porro quam nulla aut sapiente sed quasi aspernatur sit nisi provident, aliquid?
      </p>
    </TooltipRegion>

    <TooltipRegion position="bottom left">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ipsam quae sint totam dolor distinctio quia eos ipsum porro quam nulla aut sapiente
        {' '}
        <a href="#" title="Title of link">nice link</a>
        {' '}sed quasi aspernatur sit nisi provident, aliquid?
      </p>
    </TooltipRegion>

    <Tooltip content="This is a button">
      <button>A nice button</button>
    </Tooltip>
  </div>
);

export default TooltipComponent;
```

You can specify an optional `position` to either component.
