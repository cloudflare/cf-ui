import React from 'react';
import { Flex, FlexItem } from 'cf-component-flex';

class FlexComponent extends React.Component {
  render() {
    return (
      <div>
        <Flex spacing="wide">
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

export default FlexComponent;
