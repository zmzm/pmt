import { Box } from '@task-flow/shared/ui/box';
import { Badge } from '@task-flow/shared/ui/badge';
import { Dropdown, Menu, MenuButton } from '@task-flow/shared/ui/menu';
import { Column, Table } from '@tanstack/react-table';
import { debounce, flatten, isNil } from 'lodash';
import { RefObject, useCallback, useMemo, useState } from 'react';
import { ClickAwayListener } from '@mui/base';

import { FilterTypes } from '../../../../../types/types';

import { FilterIcon } from './filter-icon';

const DEBOUNCE_TIME = 500;

export interface FilterProps<T extends object> {
  column: Column<T, unknown>;
  table: Table<T>;
  headerElementRef: RefObject<HTMLTableCellElement>;
}

export const Filter = <T extends object>({
  column,
  table,
  headerElementRef,
}: FilterProps<T>) => {
  const columnFacetedUniqueValues = column.getFacetedUniqueValues();
  const columnSetFilterValue = column.setFilterValue;
  const [open, setOpen] = useState(false);

  const columnWidth = headerElementRef?.current?.clientWidth || 0;

  const popupWidth = useMemo(() => {
    if (
      column.columnDef.filter?.filterName === FilterTypes.numericRangeFilter
    ) {
      return 300;
    }
    return columnWidth > 200 ? columnWidth : 200;
  }, [columnWidth, column]);

  const handleOpenChange = useCallback(
    (event: React.SyntheticEvent | null, isOpen: boolean) => {
      setOpen(isOpen);
    },
    []
  );

  const exampleValue = useMemo(() => {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id);

    if (firstValue != null) {
      return firstValue;
    }

    return Array.from(columnFacetedUniqueValues.keys()).find(
      (value) => value != null
    );
  }, [column.id, columnFacetedUniqueValues, table]);

  const sortedUniqueValues = useMemo(() => {
    const columnValues = Array.from(columnFacetedUniqueValues.keys()).sort();

    if (typeof exampleValue === 'number') {
      return [];
    }
    if (exampleValue instanceof Date) {
      return [];
    }

    return columnValues;
  }, [columnFacetedUniqueValues, exampleValue]);

  const debouncedSetFilterValue = useMemo(() => {
    return debounce(columnSetFilterValue, DEBOUNCE_TIME);
  }, [columnSetFilterValue]);

  const handleFilterClose = () => {
    setOpen(false);
  };

  if (
    isNil(column.columnDef.filter) ||
    isNil(column.columnDef.filter?.filterComponent) ||
    isNil(column.columnDef.filter?.filterFunc) ||
    !flatten(sortedUniqueValues)?.length
  ) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={handleFilterClose}>
      <Box
        display="flex"
        sx={{
          ml: 2,
        }}
      >
        <Dropdown open={open} onOpenChange={handleOpenChange}>
          <MenuButton
            variant="plain"
            sx={{
              ml: 'auto',
              p: 0,
              minHeight: (theme) => theme.spacing(3),
              minWidth: (theme) => theme.spacing(3),
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {column.getIsFiltered() ? (
              <Badge>
                <FilterIcon />
              </Badge>
            ) : (
              <FilterIcon />
            )}
          </MenuButton>
          <Menu
            placement="bottom-end"
            size="lg"
            sx={{
              p: 2,
              width: popupWidth,
              zIndex: (theme) => theme.zIndex.modal,
            }}
          >
            <column.columnDef.filter.filterComponent
              column={column}
              values={sortedUniqueValues}
              closeFilter={handleFilterClose}
              debouncedSetFilterValue={debouncedSetFilterValue}
            />
          </Menu>
        </Dropdown>
      </Box>
    </ClickAwayListener>
  );
};
