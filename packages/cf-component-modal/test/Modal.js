import React from 'react';
import renderer from 'react-test-renderer';
import { Modal } from 'cf-component-modal';
import { GatewayProvider, Gateway, GatewayDest } from 'react-gateway';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

class Application extends React.Component {
  render() {
    return (
      <GatewayProvider>
        <div>
          {this.props.children}
          <GatewayDest name="modal" />
        </div>
      </GatewayProvider>
    );
  }
}

test('should hide the modal when `isOpen` is `false`', () => {
  const component = renderer.create(
    <Application>
      <Modal isOpen={false} onRequestClose={() => {}} />
    </Application>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render the modal when `isOpen` is `true`', () => {
  const wrapper = shallow(
    <Application>
      <Modal isOpen={true} onRequestClose={() => {}} />
    </Application>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should add a `className` if `type` is `confirm`', () => {
  const wrapper = render(
    <Application>
      <Modal type="confirm" isOpen={true} onRequestClose={() => {}} />
    </Application>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should add a `className` if `width` is defined', () => {
  const wrapper = render(
    <Application>
      <Modal width="wide" isOpen={true} onRequestClose={() => {}} />
    </Application>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
