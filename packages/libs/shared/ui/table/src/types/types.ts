import { Column } from '@tanstack/react-table';
import { DebouncedFunc } from 'lodash';

export type BaseFilterProps<T extends object> = {
  column: Column<T, unknown>;
  values?: string[];
  closeFilter?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debouncedSetFilterValue?: DebouncedFunc<(updater: any) => void>;
};

export enum SortDirections {
  asc = 'asc',
  desc = 'desc',
}

export enum FilterTypes {
  singleSelectFilter = 'singleSelectFilter',
  multiSelectFilter = 'multiSelectFilter',
  numericRangeFilter = 'numericRangeFilter',
  freeTextFilter = 'freeTextFilter',
}
