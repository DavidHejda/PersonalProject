import React, { useContext } from 'react';
import {
  Box,
  Button,
  Circle,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  VStack,
} from '@chakra-ui/react';
import { ColorSchemeContext } from '../../main';
import { useTranslation } from 'react-i18next';
import { saveToLocalStorage } from '../../utils/localStorage';
import { COLOR_SCHEME } from '../constants';

const ColorPicker = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);
  const { t } = useTranslation();
  const colorSchemes = [
    'red',
    'blue',
    'green',
    'purple',
    'pink',
    'orange',
    'yellow',
    'teal',
    'cyan',
  ];

  const handleColorSchemeChange = (scheme: string) => {
    setColorScheme(scheme);
    saveToLocalStorage(COLOR_SCHEME, scheme);
  };

  const chunkArray = (array: string[], size: number): string[][] => {
    const chunked: string[][] = [];
    let index = 0;
    while (index < array.length) {
      chunked.push(array.slice(index, size + index));
      index += size;
    }
    return chunked;
  };

  const colorChunks = chunkArray(colorSchemes, 3);

  return (
    <VStack spacing={2} align="start">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Circle size="24px" bg={`${colorScheme}.500`} />}
        >
          {t('General:ColorScheme')}
        </MenuButton>
        <MenuList minW="auto">
          {colorChunks.map((chunk, i) => (
            <MenuItem
              key={i}
              onClick={() => {}}
              py={0}
              _focus={{ bg: 'none' }}
              _active={{ bg: 'none' }}
              _hover={{ bg: 'none' }}
            >
              <Flex justifyContent="center" w="100%">
                {chunk.map((scheme) => (
                  <Box
                    key={scheme}
                    mr={2}
                    _hover={{ backgroundColor: 'transparent' }}
                  >
                    <Circle
                      size="24px"
                      bg={`${scheme}.500`}
                      onClick={() => handleColorSchemeChange(scheme)}
                      cursor="pointer"
                      _hover={{
                        boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
                      }}
                    />
                  </Box>
                ))}
              </Flex>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </VStack>
  );
};

export default ColorPicker;
