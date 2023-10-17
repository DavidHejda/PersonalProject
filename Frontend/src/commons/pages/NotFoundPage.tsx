import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ColorSchemeContext } from '../../main';
import { useContext, useEffect } from 'react';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { colorScheme } = useContext(ColorSchemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // redirects after 5 seconds

    return () => clearTimeout(timer); // cleanup the timeout if the component unmounts before timeout finishes
  }, [navigate]);

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
    >
      <Heading as="h1" size="2xl" color="red.500">
        404
      </Heading>
      <Text fontSize="xl" marginY={4}>
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Text fontSize="md" marginY={2}>
        Redirecting you in a few seconds...
      </Text>
      <Button onClick={() => navigate('/')} colorScheme={colorScheme}>
        Go Home Now
      </Button>
    </Box>
  );
};
