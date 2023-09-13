import React, { useContext } from 'react';
import TaskTable from '../../components/TaskTable';
import { Box, Button, Divider, Flex, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ColorSchemeContext } from '../../main';
import OverviewHeader from '../../components/OverviewHeader';
import { useTranslation } from 'react-i18next';
import SectionBox from '../../components/SectionBox';

export const TasksPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);
  const { t } = useTranslation('Tasks');

  return (
    <>
      {/* <SectionBox> */}
      <OverviewHeader name={t('Title')} createUrl="/create/task" />
      {/* </SectionBox> */}
      <Divider /> {/*Make it thicker and in the color of the theme */}
      {/* <SectionBox> */}
      <TaskTable />
      {/* </SectionBox> */}
    </>
  );
};
