import { Table } from '@tanstack/react-table';
import { TablePagination } from '@task-flow/shared/ui/pagination';
import { MouseEvent, ChangeEvent, useCallback } from 'react';

export interface PaginationProps<T extends object> {
  table: Table<T>;
}

export const Pagination = <T extends object>({ table }: PaginationProps<T>) => {
  const handleChangePage = useCallback(
    (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      table.setPageIndex(newPage);
    },
    [table]
  );

  const handleChangeRowsPerPage = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      table.setPageSize(parseInt(event.target.value, 10));
      table.setPageIndex(0);
    },
    [table]
  );

  return (
    <TablePagination
      component="div"
      count={table.getFilteredRowModel().rows.length}
      page={table.getState().pagination.pageIndex}
      rowsPerPage={table.getState().pagination.pageSize}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{
        '.MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel': {
          my: 'inherit',
        },
      }}
    />
  );
};
