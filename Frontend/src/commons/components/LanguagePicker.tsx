import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FlagComponent } from './FlagComponent';
import i18n from '../../i18n/i18n';
import { changeLanguage } from 'i18next';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/localStorage';
import { LANGUAGE } from '../constants';

export const LanguagePicker = () => {
  const [currentLang, setCurrentLang] = useState(
    getFromLocalStorage(LANGUAGE) ? getFromLocalStorage(LANGUAGE) : 'gb'
  );

  const languages = ['gb', 'cz', 'hu'];
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang); // Setting state will cause re-render
    saveToLocalStorage(LANGUAGE, lang);
  };

  return (
    <VStack spacing={2} align="center">
      <Menu>
        <MenuButton as={Button}>
          <FlagComponent countryCode={i18n.language} />
        </MenuButton>
        <MenuList minW="auto">
          <MenuItem
            onClick={() => {}}
            py={0}
            _focus={{ bg: 'none' }}
            _active={{ bg: 'none' }}
            _hover={{ bg: 'none' }}
          >
            {languages.map((language) => (
              <Box
                key={language}
                mr={2}
                _hover={{ backgroundColor: 'transparent' }}
                onClick={() => changeLanguage(language)}
              >
                <FlagComponent countryCode={language} />
              </Box>
            ))}
          </MenuItem>
        </MenuList>
      </Menu>
    </VStack>
  );
};
