import JoyTable, { TableProps as JoyTableProps } from '@mui/joy/Table';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getSortedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  useReactTable,
  RowData,
  ColumnDef,
  SortingFnOption,
  SortingState,
  ColumnFiltersState,
  FilterFn,
  AccessorFn,
  Row,
} from '@tanstack/react-table';
import { Sheet } from '@task-flow/shared/ui/sheet';
import { Stack } from '@task-flow/shared/ui/stack';
import { ComponentType, useEffect, useState } from 'react';
import { isNil } from 'lodash';

import { BaseFilterProps } from '../../types/types';
import { getColumnsData } from '../../utils/get-columns-data';

import { TableHeader } from './header/header';
import { TableBody } from './table-body';
import { Pagination } from './pagination';
import { TableRowsSkeleton } from './table-rows-skeleton';

declare module '@tanstack/table-core' {
  interface ColumnDefBase<TData extends RowData, TValue = unknown> {
    accessorKey?: string;
    accessorFn?: AccessorFn<TData, TValue>;
    filter?: {
      filterName: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      filterFunc: (...args: any) => boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      filterComponent: ComponentType<BaseFilterProps<any>>;
      filterValueGetter?: (rowData: TData) => unknown;
    };
    sort?: {
      direction?: string;
      sortFunc: SortingFnOption<TData> | string;
    };
  }
}

export interface TableProps<T extends object> extends JoyTableProps {
  columns: ColumnDef<T>[];
  data?: T[];
  skeleton?: boolean;
  skeletonRowsNumber?: number;
  skeletonColumnsNumber?: number;
  enablePagination?: boolean;
  onRowClick?: (data: Row<T>) => void;
}

export const Table = <T extends object>({
  data = [],
  columns,
  onRowClick,
  skeleton = false,
  skeletonRowsNumber,
  skeletonColumnsNumber,
  hoverRow = false,
  enablePagination = false,
  ...other
}: TableProps<T>) => {
  const [transformedColumns, setTransformedColumns] = useState<
    ColumnDef<T, unknown>[]
  >([]);
  const [columnFiltersFns, setColumnFiltersFns] =
    useState<Record<string, FilterFn<unknown>>>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns: transformedColumns,
    state: {
      sorting,
      columnFilters,
      ...(!enablePagination && {
        pagination: {
          pageSize: data.length,
          pageIndex: 0,
        },
      }),
    },
    filterFns: {
      ...columnFiltersFns,
    },
    defaultColumn: {
      minSize: 0,
      size: Number.MAX_SAFE_INTEGER,
      maxSize: Number.MAX_SAFE_INTEGER,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  useEffect(() => {
    const {
      columnFiltersFns,
      columns: transformedColumns,
      columnsSort,
    } = getColumnsData(columns);

    setSorting(columnsSort);
    setColumnFilters([]);
    setTransformedColumns(transformedColumns);
    setColumnFiltersFns(columnFiltersFns);
  }, [columns]);

  return (
    <Stack>
      <Sheet
        sx={{
          borderRadius: 'md',
          overflowX: 'scroll',
        }}
      >
        <JoyTable
          noWrap
          hoverRow={!skeleton && (!isNil(onRowClick) || hoverRow)}
          {...other}
        >
          <TableHeader table={table} skeleton={skeleton} />
          {skeleton ? (
            <TableRowsSkeleton
              columnsNum={skeletonColumnsNumber || columns.length}
              rowsNum={skeletonRowsNumber}
            />
          ) : (
            <TableBody
              table={table}
              hoverRow={hoverRow}
              onRowClick={onRowClick}
            />
          )}
        </JoyTable>
      </Sheet>
      {enablePagination && !skeleton && <Pagination table={table} />}
    </Stack>
  );
};
