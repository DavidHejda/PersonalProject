import React, { useContext } from 'react';
import { Box, Divider } from '@chakra-ui/react';
import OverviewHeader from '../../../commons/components/OverviewHeader';
import { useTranslation } from 'react-i18next';
import TaskTableBusiness from '../business/TaskTableBusiness';
import { getFromLocalStorage } from '../../../utils/localStorage';
import { APP_MODE } from '../../../commons/constants';
import TaskTable from './TaskTable';
import TaskTablePersonal from '../personal/TaskTablePersonal';
import SectionBox from '../../../commons/components/SectionBox';

export const TasksPage = () => {
  const { t } = useTranslation('Tasks');
  const appMode = getFromLocalStorage(APP_MODE);
  // const EnhancedTaskTable = TaskTableBusiness(TaskTable);
  const EnhancedTaskTable =
    appMode === '/business'
      ? TaskTableBusiness(TaskTable)
      : TaskTablePersonal(TaskTable);
  return (
    <>
      {/* <SectionBox> */}
      <OverviewHeader name={t('Title')} createUrl={`${appMode}/create/task`} />
      {/* </SectionBox> */}
      <Divider />
      {/*Make it thicker and in the color of the theme */}
      {/* <SectionBox> */}
      <EnhancedTaskTable someRandomProps="Hello" />
      {/* </SectionBox> */}
    </>
  );
};
