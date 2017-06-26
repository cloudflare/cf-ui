import React from 'react';
import { Box } from '../src/index';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';

test('should render all props as styles', () => {
  const snapshot = felaSnapshot(
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
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
