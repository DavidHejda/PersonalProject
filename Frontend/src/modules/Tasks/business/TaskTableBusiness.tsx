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
import { BusinessTask } from './_types';
import {
  BusinessFieldName,
  useTaskFieldDefinitions,
} from '../useTaskFieldDefinitions';

const TaskTableBusiness = (
  CommonTaskTable: React.ComponentType<ITaskTable>
) => {
  const columnHelper = createColumnHelper<BusinessTask>();
  const { t } = useTranslation('Tasks');
  const { businessFieldsDefinition } = useTaskFieldDefinitions();
  const columns = React.useMemo(
    () => [
      // columnHelper.accessor('importance', {
      //   header: t('Items.Importance'),
      //   cell: (info) => info.getValue(),
      // }),
      // columnHelper.accessor('state', {
      //   header: t('Items.State'),
      //   cell: (info) => info.getValue(),
      // }),
      // columnHelper.accessor('author', {
      //   header: t('Items.Author'),
      //   cell: (info) => info.getValue(),
      // }),
      // columnHelper.accessor('modifiedBy', {
      //   header: t('Items.ModifiedBy'),
      //   cell: (info) => info.getValue(),
      // }),
      ...businessFieldsDefinition.map((field) => {
        return columnHelper.accessor(field.name as BusinessFieldName, {
          header: t(field.labelKey),
          id: field.name,
          cell: (info) => info.getValue(),
        });
      }),
    ],
    [columnHelper]
  );

  /*const WrappedTaskTableBusiness = */ return (props: any) => {
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

  // return WrappedTaskTableBusiness;
};

////*** Original ***/
//BoilerPlate -> the fields of Task are accessor in columns
// const columnHelper = createColumnHelper<Task>();

// const TaskTableBusiness = () => {
//   const { t } = useTranslation('Tasks');

//   // console.log(data);
//   const { colorScheme } = useContext(ColorSchemeContext);

//   const { loading, error, data } = useQuery(GET_ALL_TASKS);
//   const columns = React.useMemo(
//     () => [
//       //*** Author/Modified by will be added when the user module is done ***/
//       // columnHelper.accessor('author', {
//       //   header: 'Author',
//       //   cell: (info) => info.getValue(),
//       // }),
//       // columnHelper.accessor('modifiedBy', {
//       //   header: 'Modified By',
//       //   cell: (info) => info.getValue(),
//       // }),
//       columnHelper.accessor('subject', {
//         header: t('Items.Subject'),
//         cell: (info) => info.getValue(),
//       }),
//       columnHelper.accessor('description', {
//         header: t('Items.Description'),
//         cell: (info) => info.getValue(),
//       }),
//       columnHelper.accessor('deadline', {
//         header: t('Items.Deadline'),
//         cell: (info) => info.getValue(),
//       }),
//       columnHelper.accessor('importance', {
//         header: t('Items.Importance'),
//         cell: (info) => info.getValue(),
//       }),
//       columnHelper.accessor('assignee', {
//         header: t('Items.Assignee'),
//         cell: (info) => info.getValue(),
//       }),
//       columnHelper.accessor('state', {
//         header: t('Items.State'),
//         cell: (info) => info.getValue(),
//       }),
//       columnHelper.accessor('notes', {
//         header: t('Items.Notes'),
//         cell: (info) => info.getValue(),
//       }),
//     ],
//     [t, columnHelper]
//   );

//   const table = useReactTable({
//     data: data ? data.getAllTasks : [],
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center">
//       <Table variant="striped" colorScheme={colorScheme} size="sm">
//         <Thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <Tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <Th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </Th>
//               ))}
//             </Tr>
//           ))}
//         </Thead>
//         <Tbody>
//           {table.getRowModel().rows.map((row) => (
//             <Tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <Td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </Td>
//               ))}
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

export default TaskTableBusiness;
