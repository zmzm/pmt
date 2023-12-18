import { Row } from '@tanstack/react-table';
import { isArray, isEmpty } from 'lodash';

export function multiSelectFilter(
  row: Row<unknown>,
  columnId: string,
  filterValues: unknown[]
) {
  const rowValue = row.getValue(columnId);

  if (isEmpty(filterValues)) {
    return false;
  }

  if (isArray(rowValue)) {
    return rowValue.some((value) => filterValues.includes(value));
  }

  return filterValues.includes(rowValue);
}
