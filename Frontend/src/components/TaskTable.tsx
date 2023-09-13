import React, { useContext } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Task } from '../modules/Tasks/_types';
import { useQuery } from '@apollo/client/react';
import { GET_ALL_TASKS } from '../modules/Tasks/_api';
import { ColorSchemeContext } from '../main';
import { useTranslation } from 'react-i18next';

//BoilerPlate -> the fields of Task are accessor in columns
const columnHelper = createColumnHelper<Task>();

const TaskTable = () => {
  const { t } = useTranslation('Tasks');

  // console.log(data);
  const { colorScheme } = useContext(ColorSchemeContext);

  const { loading, error, data } = useQuery(GET_ALL_TASKS);
  const columns = React.useMemo(
    () => [
      // columnHelper.accessor('author', {
      //   header: 'Author',
      //   cell: (info) => info.getValue(),
      // }),
      // columnHelper.accessor('modifiedBy', {
      //   header: 'Modified By',
      //   cell: (info) => info.getValue(),
      // }),
      columnHelper.accessor('subject', {
        header: t('Items.Subject'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('description', {
        header: t('Items.Description'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('deadline', {
        header: t('Items.Deadline'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('importance', {
        header: t('Items.Importance'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('assignee', {
        header: t('Items.Assignee'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('state', {
        header: t('Items.State'),
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('notes', {
        header: t('Items.Notes'),
        cell: (info) => info.getValue(),
      }),
    ],
    [t, columnHelper]
  );

  const table = useReactTable({
    data: data ? data.getAllTasks : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box>
      <Table variant="striped" colorScheme={colorScheme} size="sm">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TaskTable;

// export default TaskTable;

// Table component with Chakra UI
// Here is where you put the code that builds the table using Chakra UI components

// return <Box>{/* Render table here */}</Box>;
