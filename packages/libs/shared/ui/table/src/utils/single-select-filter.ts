import { Row } from '@tanstack/react-table';

export function singleSelectFilter(
  row: Row<unknown>,
  columnId: string,
  value: unknown
) {
  const testValue = row.getValue(columnId);

  return value === testValue;
}
