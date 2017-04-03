Button example:

```
const { createRenderer } = require('fela');
const { Provider } = require('react-fela');

const renderer = createRenderer();

<Provider renderer={renderer}>
  <Button>hello world</Button>
</Provider>
```
