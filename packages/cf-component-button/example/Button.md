Button example:

```
const { StyleProvider } = require('cf-style-provider');
const { applyTheme } = require('cf-style-container');

const ButtonTheme = require('../src/ButtonTheme').default;

const StyledButton = applyTheme(Button, ButtonTheme);

<StyleProvider
  cssNode={document.querySelector('#fela-style')}
  fontNode={document.querySelector('#fela-fonts')}
  dev={true}
  selectorPrefix="cf-"
>
  <StyledButton onClick={() => console.log('clicked')}>
    Hello world
  </StyledButton>
</StyleProvider>
```
