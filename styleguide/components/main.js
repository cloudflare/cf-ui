import React from 'react';
import { ThemeProvider } from 'react-fela';
import ButtonExample
  from '../../packages/cf-component-button/example/basic/component';
import highlightedButtonExample
  from '!highlight-loader?raw=true&lang=jsx!../../packages/cf-component-button/example/basic/component';
import '../assets/base.css';
import '../assets/styles.css';
import logo from '../assets/logo.png';

const Main = () => (
  <div>
    <header className="cf-example-header">
      <a href="https://github.com/cloudflare/cf-ui">
        <img src={logo} alt="cf-ui" height="50" />
      </a>
    </header>
    <nav className="cf-example-sidebar">
      <a href="#cf-component-button">
        cf-component-button
      </a>
    </nav>
    <div className="cf-example-content">
      <h2 className="cf-example__heading" id="cf-component-button">
        cf-component-button
      </h2>
      <div className="cf-example">
        <div className="cf-example__content">
          <ButtonExample />
        </div>
        <div className="cf-example__code">
          <pre dangerouslySetInnerHTML={{ __html: highlightedButtonExample }} />
        </div>
      </div>
    </div>
  </div>
);

Main.displayName = 'Main';
export default Main;
