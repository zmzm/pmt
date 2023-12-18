import { Row } from '@tanstack/react-table';

export function freeTextFilter(
  row: Row<unknown>,
  columnId: string,
  filterValue: string
) {
  const testValue = row.getValue(columnId) as string;

  return testValue?.toLowerCase().includes(filterValue.toLowerCase());
}
