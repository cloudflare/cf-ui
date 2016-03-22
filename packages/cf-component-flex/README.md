# cf-component-flex

> CloudFlare Flex Component

## Installation

```sh
$ npm install cf-component-flex
```

## Usage

```js
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
```
