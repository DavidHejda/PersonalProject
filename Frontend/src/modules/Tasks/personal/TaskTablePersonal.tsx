import React, { useContext } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

import { useQuery } from '@apollo/client/react';

import { useTranslation } from 'react-i18next';
import { GET_ALL_TASKS } from '../_api';
import { ColorSchemeContext } from '../../../main';
import { ITaskTable } from '../commons/_types';
import { TaskPersonal } from './_types';

const TaskTablePersonal = (
  CommonTaskTable: React.ComponentType<ITaskTable>
) => {
  const columnHelper = createColumnHelper<TaskPersonal>();
  const { t } = useTranslation('Tasks');
  const columns = React.useMemo(
    () => [
      columnHelper.accessor('taskCreated', {
        header: t('Items.CreationDate'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('taskFinished', {
        header: t('Items.FinishDate'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('timeEstimate', {
        header: t('Items.TimeEstimate'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('timeSpent', {
        header: t('Items.TimeSpent'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('isFinished', {
        header: t('Items.IsFinished'),
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );
  return (props: any) => {
    console.debug(columns);
    console.debug('props inside WrappedTaskTable', props);
    console.debug('Debugging from TaskTableBusiness');
    //Here i can add additional components to render with CommonTaskTable
    return (
      <CommonTaskTable
        additionalColumns={columns}
        graphqlQueryGetAllTasks={GET_ALL_TASKS}
        {...props}
      />
    );
  };
};

export default TaskTablePersonal;
