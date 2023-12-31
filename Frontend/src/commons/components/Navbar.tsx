import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import ColorPicker from './ColorPicker';
import { ColorSchemeContext } from '../../main';
import { LanguagePicker } from './LanguagePicker';
import { useTranslation } from 'react-i18next';
import { AppModeContext } from '../../AppModeContext';
import { getFromLocalStorage } from '../../utils/localStorage';
import { APP_MODE } from '../constants';
import { capitalize } from 'lodash';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorScheme } = useContext(ColorSchemeContext);
  const { t } = useTranslation();
  const appMode: string = getFromLocalStorage(APP_MODE);
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const textColor = colorMode === 'dark' ? 'white' : 'black';

  console.debug(appMode);
  return (
    <Flex
      as="nav"
      padding="1rem"
      bg={colorMode === 'dark' ? `${colorScheme}.800` : `${colorScheme}.500`} // Set background color to the chosen colorScheme
      color={colorMode === 'dark' ? 'white' : 'black'}
      boxShadow="sm"
      position="fixed" // Make the navbar fixed at the top of the screen
      top="0" // Position the navbar at the top
      width="100%" // Set the width to 100% of the screen
      zIndex="1000" // Ensure that the navbar is always on top of other elements
      justifyContent="space-between"
    >
      {/* Container for CRM */}
      <Flex flex="1" alignItems="center" justifyContent="flex-start">
        <Box ml="2rem">
          <Heading>{capitalize(appMode.slice(1))}</Heading>
        </Box>
      </Flex>

      <Flex alignItems="center" justifyContent="center">
        <Button
          as={RouterLink}
          to={`${appMode}`}
          mr={4}
          // variant="outline"
          // colorScheme={colorScheme}
        >
          {t('General:Home')}
        </Button>
        <Button
          as={RouterLink}
          to={`${appMode}/tasks`}
          mr={4}
          // variant="outline"
          // colorScheme={colorScheme}
        >
          {t('Tasks:Title')}
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            // variant="outline"
            mr={4}
            // colorScheme={colorScheme}
          >
            {t('Projects:Title')}
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to={`${appMode}/projects/ongoing`}>
              {t('Projects:Ongoing')}
            </MenuItem>
            <MenuItem as={RouterLink} to={`${appMode}/projects/completed`}>
              {t('Projects:Completed')}
            </MenuItem>
            <MenuItem as={RouterLink} to={`${appMode}/projects/upcoming`}>
              {t('Projects:Upcoming')}
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex gap={4} alignItems="center" justifyContent="flex-end" flex="1">
        <LanguagePicker />
        <ColorPicker />
        <Button onClick={toggleColorMode} mr={4}>
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
        {/* <Button colorScheme="teal" variant="outline">
      Sign Out
    </Button> */}
      </Flex>
    </Flex>
  );
};

export default Navbar;
