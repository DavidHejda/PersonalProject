import { Button, useColorMode } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { AppModeContext } from '../../AppModeContext';
import { getFromLocalStorage } from '../../utils/localStorage';
import { APP_MODE } from '../constants';

export const HomePage = () => {
  const { t } = useTranslation('Tasks');
  const appMode = getFromLocalStorage(APP_MODE);
  return (
    <div>
      <Button>
        <Link to={`${appMode}/tasks`}>{t('GoToTasks')}</Link>
        <Outlet />
      </Button>
    </div>
  );
};
