import { Box } from '@task-flow/shared/ui/box';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { get, isNil } from 'lodash';

import { BaseFilterProps } from '../../types/types';
import { NumericInput } from '../../shared-ui/numeric-input';

export function NumbericRangeFilter<T extends object>({
  column,
  debouncedSetFilterValue,
}: BaseFilterProps<T>) {
  const filterValue = column.getFilterValue() as number[];
  const [value, setValue] = useState<(number | undefined)[] | undefined>([]);
  const minValue = Number(get(column.getFacetedMinMaxValues(), [0], 0));
  const maxValue = Number(get(column.getFacetedMinMaxValues(), [1], 0));

  useEffect(() => {
    setValue(filterValue);
  }, [filterValue]);

  const handleMinValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const updater = (old: (number | undefined)[] | undefined) => [
        +value,
        old?.[1],
      ];
      setValue(updater);
      debouncedSetFilterValue && debouncedSetFilterValue(updater);
    },
    [debouncedSetFilterValue]
  );

  const handleMaxValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const updater = (old: (number | undefined)[] | undefined) => [
        old?.[0],
        +value,
      ];
      setValue(updater);
      debouncedSetFilterValue && debouncedSetFilterValue(updater);
    },
    [debouncedSetFilterValue]
  );

  const handleClearMinValue = useCallback(() => {
    const updater = (old: (number | undefined)[] | undefined) => {
      if (isNil(old?.[1])) {
        return undefined;
      }
      return [undefined, old?.[1]];
    };
    setValue(updater);
    debouncedSetFilterValue && debouncedSetFilterValue(updater);
  }, [debouncedSetFilterValue]);

  const handleClearMaxValue = useCallback(() => {
    const updater = (old: (number | undefined)[] | undefined) => {
      if (isNil(old?.[0])) {
        return undefined;
      }
      return [old?.[0], undefined];
    };
    setValue(updater);
    debouncedSetFilterValue && debouncedSetFilterValue(updater);
  }, [debouncedSetFilterValue]);

  return (
    <Box display="flex" gap={2}>
      <NumericInput
        value={value?.[0] || ''}
        min={minValue}
        max={maxValue}
        onClear={handleClearMinValue}
        onChange={handleMinValueChange}
        placeholder={`Min (${minValue})`}
      />
      <NumericInput
        value={value?.[1] || ''}
        min={minValue}
        max={maxValue}
        onClear={handleClearMaxValue}
        onChange={handleMaxValueChange}
        placeholder={`Max (${maxValue})`}
      />
    </Box>
  );
}
