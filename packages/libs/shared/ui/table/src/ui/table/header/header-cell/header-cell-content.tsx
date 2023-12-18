import { flexRender, Header } from '@tanstack/react-table';
import { Box } from '@task-flow/shared/ui/box';
import { MouseEvent } from 'react';
import { Skeleton } from '@task-flow/shared/ui/skeleton';

import { Sort } from './sort/sort';

export interface HeaderCellContentProps<T extends object> {
  skeleton: boolean;
  hasData: boolean;
  header: Header<T, unknown>;
}

export const HeaderCellContent = <T extends object>({
  header,
  hasData,
  skeleton,
}: HeaderCellContentProps<T>) => {
  const isSortingAllowed = header.column.columnDef.sort && hasData && !skeleton;

  const handleColumnSorting =
    (header: Header<T, unknown>) => (event: MouseEvent<HTMLDivElement>) => {
      if (header.column.getCanSort() && isSortingAllowed) {
        const sortingHandler = header.column.getToggleSortingHandler();
        sortingHandler?.(event);
      }
    };

  return (
    <Box
      display="flex"
      alignItems="center"
      flex="1"
      justifyContent="space-between"
      onClick={handleColumnSorting(header)}
    >
      {skeleton ? (
        <Skeleton variant="text" />
      ) : (
        flexRender(header.column.columnDef.header, header.getContext())
      )}
      {isSortingAllowed && <Sort header={header} />}
    </Box>
  );
};
