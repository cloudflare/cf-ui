import React from 'react';
import { Box } from '../../cf-component-box/src/index';
import renderer from 'react-test-renderer';
import felaTestContext from '../../../felaTestContext';

test('should render all props as styles', () => {
  const component = renderer.create(
    felaTestContext(
      <Box
        borderWidth={1}
        borderStyle="solid"
        borderColor="black"
        margin="1rem"
        padding="1rem"
        display="inline-block"
        position="relative"
        top={1}
        bottom={1}
        minWidth={100}
        width={100}
        minHeight={100}
        height={100}
      >
        Box
      </Box>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
