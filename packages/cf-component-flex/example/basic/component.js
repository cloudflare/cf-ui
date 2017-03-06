import React from 'react';
import { render } from 'react-dom';
import { Flex, FlexItem } from '../../src/index';

class Component extends React.Component {
  render() {
    return (
      <div>
        <Flex spacing={false}>
          <FlexItem>FlexItem 1</FlexItem>
          <FlexItem>FlexItem 2</FlexItem>
          <FlexItem>FlexItem 3</FlexItem>
        </Flex>

        <Flex spacing="thin">
          <FlexItem>FlexItem 1</FlexItem>
          <FlexItem>FlexItem 2</FlexItem>
          <FlexItem collapse>Collapsed FlexItem</FlexItem>
        </Flex>

        <Flex spacing="wide">
          <FlexItem collapse>FlexItem 1</FlexItem>
          <FlexItem>FlexItem 2</FlexItem>
          <FlexItem collapse>Collapsed FlexItem</FlexItem>
        </Flex>
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-flex--basic'));
