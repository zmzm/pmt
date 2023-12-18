import { Row } from '@tanstack/react-table';
import { isNil } from 'lodash';

export function numericRangefilter(
  row: Row<unknown>,
  columnId: string,
  values: number[]
) {
  const [minValue, maxValue] = values;
  const testValue = row.getValue(columnId) as number;

  if (isNil(minValue) && isNil(maxValue)) {
    return true;
  }
  if (isNil(minValue)) {
    return testValue <= maxValue;
  }
  if (isNil(maxValue)) {
    return testValue >= minValue;
  }

  return testValue >= minValue && testValue <= maxValue;
}
