import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { ColorSchemeContext } from '../../main';
import { AppModeContext } from '../../AppModeContext';
import { saveToLocalStorage } from '../../utils/localStorage';

const LandingPage = () => {
  const navigate = useNavigate();
  // const { setAppMode } = useContext(AppModeContext);
  const { colorScheme } = useContext(ColorSchemeContext);

  const handleTileClick = (path: string) => {
    // setAppMode(path);
    saveToLocalStorage('appMode', path);
    navigate(path);
  };

  return (
    <Flex
      className="landing-container"
      flexDirection="row"
      justifyContent="center"
      alignItems="center" // Added this to align vertically
      textAlign="center"
      gap="10rem"
      height="90vh" // Full height of the viewport
    >
      <Box
        onClick={() => handleTileClick('/business')}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="500px"
        width="500px"
        bg={`${colorScheme}.600`}
        borderRadius={10}
        cursor="pointer"
        _hover={{
          transform: 'scale(1.02) translateY(-0.75rem)',
          bg: `${colorScheme}.400`,
        }}
        transition="all 0.4s"
      >
        <FontAwesomeIcon icon={faBuilding} size="3x" />
        <p>Business</p>
      </Box>
      <Box
        onClick={() => handleTileClick('/personal')}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="500px"
        width="500px"
        bg={`${colorScheme}.600`}
        borderRadius={10}
        cursor="pointer"
        _hover={{
          transform: 'scale(1.02) translateY(-0.75rem)',
          bg: `${colorScheme}.400`,
        }}
        transition="all 0.4s"
      >
        <FontAwesomeIcon icon={faUser} size="3x" />
        <p>Personal</p>
      </Box>
    </Flex>
  );
};

export default LandingPage;
