# cf-component-tooltip

> Cloudflare Tooltip Component

## Installation

```sh
$ npm install cf-component-tooltip
```

## Usage

```js
const React = require('react');
const {
  Tooltip,
  TooltipRegion
} = require('cf-component-tooltip');

class Application extends React.Component {
  render() {
    return (
      <div>
        <TooltipRegion>
          <p>
            Here is some content that will have tooltips applied to any
            children that have a <code>title</code> attribute. Like
            <a title="This will be shown in a tooltip">this one</a>.
          </p>
          <p>
            This is useful for dynamic content from translations or markdown.
          </p>
        </TooltipRegion>

        <Tooltip content="This will be shown when the element is hovered">
          <p>
            Alternatively, you can wrap an element in a <code>Tooltip</code>
            and it will have a tooltip directly applied to it.
          </p>
        </Tooltip>
      </div>
    );
  }
}
```

You can specify an optional `position` to either component.
