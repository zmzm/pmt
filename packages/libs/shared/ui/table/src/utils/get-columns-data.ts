import {
  BuiltInFilterFn,
  BuiltInSortingFn,
  ColumnDef,
  ColumnSort,
  FilterFn,
} from '@tanstack/react-table';

import { SortDirections } from '../types/types';

export function getColumnsData<T extends object>(
  columns: ColumnDef<T, unknown>[]
) {
  const newColumns: ColumnDef<T, unknown>[] = [];
  const columnFilters: Record<string, FilterFn<unknown>> = {};
  const columnsSort: ColumnSort[] = [];

  columns.forEach((column) => {
    let tempColumn = { ...column };

    if (column.filter) {
      columnFilters[column.filter.filterName] = column.filter.filterFunc;
      tempColumn = {
        ...tempColumn,
        filterFn: column.filter.filterName as BuiltInFilterFn,
      };
    }

    if (column.sort) {
      tempColumn = {
        ...tempColumn,
        sortingFn:
          typeof column.sort.sortFunc === 'string'
            ? (column.sort.sortFunc as BuiltInSortingFn)
            : column.sort.sortFunc,
      };

      if (column.sort.direction && columnsSort.length === 0) {
        columnsSort.push({
          id: column.accessorKey as string,
          desc: column.sort.direction === SortDirections.desc,
        });
      }
    }

    newColumns.push(tempColumn);
  }, {});

  return {
    columnFiltersFns: columnFilters,
    columns: newColumns,
    columnsSort: columnsSort,
  };
}
