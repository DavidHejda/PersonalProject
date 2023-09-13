import { Box, Button, Divider, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { HeaderProps } from './_types';
import { FlagComponent } from './FlagComponent';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC<HeaderProps> = ({ name, createUrl }) => {
  const { t } = useTranslation('General');

  return (
    <>
      <Flex mb="3" justifyContent="space-between" alignItems="center">
        <Flex flex="1" alignItems="center">
          <Input maxWidth="200" mr="5" alignSelf="center"></Input>
          <Button alignSelf="center">{t('Search')}</Button>{' '}
          {/*Make the filling the same color as background (because it is in the section box and it does not look the greatest) */}
        </Flex>
        <Box flex="1" textAlign="center">
          <Heading>{name}</Heading>
        </Box>
        <Box flex="1" display="flex" justifyContent="flex-end">
          <Button as={Link} to={createUrl} mr="2">
            {t('Create')}
          </Button>
        </Box>
      </Flex>
      {/* <Divider /> */}
    </>
  );
};

export default Header;
