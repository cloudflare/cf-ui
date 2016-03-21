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
        <Flex>
          <FlexItem>FlexItem 1</FlexItem>
          <FlexItem>FlexItem 2</FlexItem>
          <FlexItem collapse>Collapsed FlexItem</FlexItem>
        </Flex>
      </div>
    );
  }
}
```
