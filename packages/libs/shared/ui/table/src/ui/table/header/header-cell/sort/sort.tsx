import { Box } from '@task-flow/shared/ui/box';
import { Header } from '@tanstack/react-table';

import { SortDirections } from '../../../../../types/types';

import { AscSortIcon } from './asc-sort-icon';
import { DescSortIcon } from './desc-sort-icon';

export interface SortProps<T extends object> {
  header: Header<T, unknown>;
}

export function Sort<T extends object>({ header }: SortProps<T>) {
  const sortDirection = header.column.getIsSorted();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minWidth={14}
      minHeight={28}
    >
      <AscSortIcon active={sortDirection === SortDirections.asc} />
      <DescSortIcon active={sortDirection === SortDirections.desc} />
    </Box>
  );
}
