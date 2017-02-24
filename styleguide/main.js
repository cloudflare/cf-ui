import React from 'react';
import { ThemeProvider } from 'react-fela';
import ButtonExample
  from '../packages/cf-component-button/example/basic/component';
import highlightedButtonExample
  from '!highlight-loader?raw=true&lang=jsx!../packages/cf-component-button/example/basic/component';

const Main = () => (
  <div>
    <p>
      This is just a rough preview. Styleguide is a standalone app using webpack.
      Thanks to aliasing, we can directly import components from the other parts of repo
      while using "real-world" non-relative paths. <strong>
        Everything is hot
        reloaded.
      </strong> Code example is using a webpack loader (hot reloaded as well).
      I will have to create a loader that extracts propTypes to match the current docs.
      This way I'm moving code from gulp tasks into loaders.
    </p>
    <p>
      The ultimate goal is to autogenerate the whole /styleguide folder with a CLI tool called
      cf-styleguide, so it can be easily used/shared for our internal themed cf-ui as well.
    </p>
    <p>
      I also want to add example codes for Themes and ability to live update themed
      through a textarea.
    </p>
    <hr />
    <h1>cf-component-button</h1>
    <ButtonExample />
    <h2>Example Code</h2>
    <pre dangerouslySetInnerHTML={{ __html: highlightedButtonExample }} />
  </div>
);

Main.displayName = 'Main';
export default Main;
