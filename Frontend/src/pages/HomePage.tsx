import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import TaskTable from '../components/TaskTable';

export const HomePage = () => {
  const { t } = useTranslation('Tasks');

  return (
    <div>
      <Button>
        <Link to={'/tasks'}>{t('GoToTasks')}</Link>
      </Button>
    </div>
  );
};
