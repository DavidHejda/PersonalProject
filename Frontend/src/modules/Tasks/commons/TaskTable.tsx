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
import { ColorSchemeContext } from '../../../main';
import { ITaskTable, Task } from './_types';
import {
  CommonFieldName,
  useTaskFieldDefinitions,
} from '../useTaskFieldDefinitions';

//BoilerPlate -> the fields of Task are accessor in columns
const columnHelper = createColumnHelper<Task>();

const TaskTable: React.FC<ITaskTable> = (props) => {
  const { t } = useTranslation('Tasks');
  const { colorScheme } = useContext(ColorSchemeContext);
  const { commonFieldsDefinition } = useTaskFieldDefinitions();
  const { loading, error, data } = useQuery(props.graphqlQueryGetAllTasks);
  console.debug(commonFieldsDefinition);
  const columns = React.useMemo(
    () => [
      // columnHelper.accessor('subject', {
      //   header: t('Items.Subject'),
      //   cell: (info) => info.getValue(),
      // }),
      // columnHelper.accessor('description', {
      //   header: t('Items.Description'),
      //   cell: (info) => info.getValue(),
      // }),
      // columnHelper.accessor('notes', {
      //   header: t('Items.Notes'),
      //   cell: (info) => info.getValue(),
      // }),

      ...commonFieldsDefinition.map((field) => {
        return columnHelper.accessor(field.name as CommonFieldName, {
          header: t(field.labelKey),
          id: field.name,
          cell: (info) => info.getValue(),
        });
      }),
      ...(props.additionalColumns || []),
    ],

    [t, columnHelper]
  );

  const table = useReactTable({
    data: data ? data.getAllBusinessTasks : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
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
