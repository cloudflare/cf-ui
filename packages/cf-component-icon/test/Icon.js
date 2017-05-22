import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Icon, { IconUnstyled } from '../../cf-component-icon/src/index';
import felaTestContext from '../../../felaTestContext';

test('should render type', () => {
  const component = renderer.create(
    felaTestContext(<Icon type="info-sign" label="Info-Sign" />)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type/size', () => {
  const component = renderer.create(
    felaTestContext(<Icon type="info-sign" label="Info-Sign" size="xlarge" />)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type/border/spin/muted/white', () => {
  const component = renderer.create(
    felaTestContext(
      <Icon type="info-sign" label="Info-Sign" border spin muted white />
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render type with no label', () => {
  const wrapper = shallow(felaTestContext(<IconUnstyled type="info-sign" />));
  const domNode = wrapper.find('Icon');
  expect(domNode.prop('label')).toBe.undefined;
});

test('should render role', () => {
  const wrapper = shallow(
    felaTestContext(<IconUnstyled type="loading" role="status" />)
  );
  const domNode = wrapper.find('Icon');
  expect(domNode.prop('role')).toBe('status');
});

test('should not render role if not provided', () => {
  const wrapper = shallow(felaTestContext(<IconUnstyled type="loading" />));
  const domNode = wrapper.find('Icon');
  expect(domNode.prop('role')).toBe.undefined;
});
