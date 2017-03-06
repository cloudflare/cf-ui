import React from 'react';
import { render } from 'react-dom';
import { TooltipRegion, Tooltip } from '../../src/index';

class Component extends React.Component {
  render() {
    return (
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
  }
}

render(<Component />, document.getElementById('cf-component-tooltip--basic'));
