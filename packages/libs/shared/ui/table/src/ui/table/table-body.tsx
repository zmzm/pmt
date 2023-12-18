import { Typography } from '@task-flow/shared/ui/typography';
import { Box } from '@task-flow/shared/ui/box';
import { flexRender, Row, Table } from '@tanstack/react-table';

export interface TableBodyProps<T extends object> {
  table: Table<T>;
  hoverRow: boolean;
  onRowClick?: (data: Row<T>) => void;
}

export const TableBody = <T extends object>({
  table,
  hoverRow,
  onRowClick,
}: TableBodyProps<T>) => {
  return (
    <tbody>
      {table.getRowModel().rows.length > 0 ? (
        table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            onClick={() => onRowClick?.(row)}
            style={{
              cursor: onRowClick || hoverRow ? 'pointer' : 'default',
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={table.getAllColumns().length}>
            <Box display="flex" justifyContent="center" alignContent="center">
              <Typography level="body-lg">No data</Typography>
            </Box>
          </td>
        </tr>
      )}
    </tbody>
  );
};
