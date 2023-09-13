import { Box, useColorMode } from '@chakra-ui/react';
import React from 'react';
interface SectionBoxProps {
  children: React.ReactNode;
}

const SectionBox: React.FC<SectionBoxProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.700' };
  const borderColor = { light: 'gray.300', dark: 'gray.600' };
  const boxShadow = { light: 'md', dark: 'lg' };

  return (
    <Box
      mt={2}
      mb={2}
      p={4}
      bg={bgColor[colorMode]}
      borderWidth="1px"
      borderColor={borderColor[colorMode]}
      borderRadius="lg"
      boxShadow={boxShadow[colorMode]}
    >
      {children as any}
    </Box>
  );
};

export default SectionBox;
