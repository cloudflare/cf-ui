import React from 'react';
import { Box } from 'cf-component-box';

const BoxComponent = () => (
  <Box>
    <Box margin="1rem" backgroundColor="thistle">
      This is a box with a margin
    </Box>

    <Box padding="1rem" backgroundColor="blanchedalmond">
      This is a box with padding
    </Box>

    <Box
      padding="1rem"
      marginTop="1rem"
      borderTopColor="black"
      borderTopWidth={1}
      borderTopStyle="solid"
      borderBottomColor="blue"
      borderBottomWidth={1}
      borderBottomStyle="groove"
      borderLeftColor="teal"
      borderLeftWidth={2}
      borderLeftStyle="dashed"
      borderRightColor="purple"
      borderRightWidth={2}
      borderRightStyle="dotted"
    >
      All the borders!
    </Box>

    <Box
      display="inline-block"
      margin="1rem"
      padding="1rem"
      width="40%"
      textAlign="center"
      backgroundColor="#3dd"
    >
      inline block
    </Box>

    <Box
      margin="1rem"
      padding="2rem"
      backgroundColor="peachpuff"
      display="inline-flex"
      justifyContent="space-between"
      width="40%"
    >
      <Box backgroundColor="lightsalmon" margin="1rem" padding="1rem">Flex</Box>
      <Box backgroundColor="lightsalmon" margin="1rem" padding="1rem">Flex</Box>
      <Box backgroundColor="lightsalmon" margin="1rem" padding="1rem">Flex</Box>
    </Box>

    <Box marginLeft="1rem">
      <h4>Absolute Positioning</h4>
    </Box>

    <Box
      marginLeft="1rem"
      backgroundColor="aquamarine"
      position="relative"
      width={200}
      height={200}
      display="inline-block"
    >
      <Box
        backgroundColor="pink"
        position="absolute"
        width={50}
        height={50}
        top={10}
        left={10}
      />
      <Box
        margin="1rem"
        backgroundColor="azure"
        position="absolute"
        width={100}
        height={100}
        bottom={10}
        right={10}
      />
    </Box>

    <Box
      margin="1rem"
      padding="1rem"
      backgroundColor="lightsalmon"
      float="right"
    >
      Floated right
    </Box>

  </Box>
);

export default BoxComponent;
