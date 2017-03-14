# cf-component-icon

> Cloudflare Icon Component

## Installation

```sh
$ npm install cf-component-icon
```

## Usage

```jsx
import React from 'react';
import Icon, { TYPES, SIZES } from 'cf-component-icon';

const IconComponent = () => (
  <div>
    <p>Types:</p>
    <p>
      {TYPES.map(type => <Icon label={type} type={type} key={type} />)}
    </p>

    <p>Sizes:</p>
    <p>
      {SIZES.map(size => (
        <Icon label={size} type="gear" size={size} key={size} />
      ))}
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
