import { Typography } from '@task-flow/shared/ui/typography';
import { List, ListItemButton } from '@task-flow/shared/ui/list';
import { Stack } from '@task-flow/shared/ui/stack';
import { Checkbox } from '@task-flow/shared/ui/checkbox';
import { MouseEvent, useCallback, useState } from 'react';
import { flatten, isNil, xor, uniq } from 'lodash';

import { BaseFilterProps } from '../../types/types';
import { filterStringValues } from '../../utils/filter-string-values';
import { Search } from '../../shared-ui/search';

export function MultiSelectFilter<T extends object>({
  column,
  values: filterValues,
}: BaseFilterProps<T>) {
  const filterValue = column.getFilterValue() as string[];
  const columnSetFilterValue = column.setFilterValue;
  const values = uniq(flatten(filterValues)).sort();
  const totalItemsCount = values.length;
  const [searchItems, setSearchItems] = useState(values || []);

  const isSelectAllIndeterminate = () => {
    if (column.getIsFiltered()) {
      if (searchItems.length !== totalItemsCount) {
        const checkedSearchItems = filterValue.filter((val) =>
          searchItems.includes(val)
        );
        return (
          searchItems.length !== checkedSearchItems.length &&
          checkedSearchItems.length !== 0
        );
      }

      return Array.isArray(filterValue) && filterValue?.length !== 0;
    }
  };

  const isSelectAllChecked = useCallback(() => {
    if (searchItems.length !== totalItemsCount && Array.isArray(filterValue)) {
      const checkedSearchItems = filterValue.filter((val) =>
        searchItems.includes(val)
      );
      return checkedSearchItems.length !== 0;
    }

    return (
      isNil(filterValue) ||
      (Array.isArray(filterValue) && filterValue?.length !== 0)
    );
  }, [filterValue, searchItems, totalItemsCount]);

  const handleSelectAllClick = useCallback(() => {
    if (searchItems.length !== totalItemsCount) {
      if (isSelectAllChecked()) {
        const initialValues = filterValue || values;
        const filteredValues = initialValues.filter(
          (val) => !searchItems.includes(val)
        );
        columnSetFilterValue(filteredValues);
      } else {
        columnSetFilterValue(xor(filterValue, searchItems));
      }
      return;
    }

    if (Array.isArray(filterValue)) {
      if (filterValue.length === 0 || filterValue.length !== totalItemsCount) {
        columnSetFilterValue(undefined);
        return;
      }
    }

    columnSetFilterValue([]);
  }, [
    values,
    totalItemsCount,
    filterValue,
    searchItems,
    columnSetFilterValue,
    isSelectAllChecked,
  ]);

  const handleItemClick = (selectedItem: string) => {
    return (e: MouseEvent<HTMLDivElement>) => {
      if (filterValue == null) {
        const filteredValues = values.filter((item) => item !== selectedItem);
        columnSetFilterValue(filteredValues);

        return;
      }

      const newFilterValue = xor(filterValue, [selectedItem]);

      if (newFilterValue.length === totalItemsCount) {
        columnSetFilterValue(undefined);
        return;
      }

      columnSetFilterValue(newFilterValue);
    };
  };

  const isChecked = (item: string) => {
    if (filterValue == null) {
      return true;
    }

    return filterValue.includes(item);
  };

  const handleSearch = (searchTerm: string) => {
    const items = filterStringValues(values, searchTerm);
    setSearchItems(items);
  };

  return (
    <Stack>
      <Search onChange={handleSearch} />
      {!searchItems.length ? (
        <Typography
          noWrap
          fontSize="md"
          lineHeight="42px"
          sx={{
            color: (theme) => theme.vars.palette.common.black,
          }}
        >
          No matches found
        </Typography>
      ) : (
        <>
          <ListItemButton
            sx={{
              p: 0,
              cursor: 'pointer',
              fontSize: 'md',
              gap: '0.5rem',
            }}
            onClick={handleSelectAllClick}
          >
            <Checkbox
              size="sm"
              checked={isSelectAllChecked()}
              indeterminate={isSelectAllIndeterminate()}
              sx={{
                mr: 2,
                height: '100%',
              }}
            />
            <Typography
              noWrap
              fontSize="md"
              sx={{ color: (theme) => theme.vars.palette.common.black }}
            >
              Select all
            </Typography>
          </ListItemButton>
          <List
            size="sm"
            sx={{
              maxHeight: 200,
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {searchItems.map((value) => (
              <ListItemButton
                key={value}
                sx={{
                  px: 0,
                  cursor: 'pointer',
                  fontSize: 'md',
                  lineHeight: 'sm',
                }}
                onClick={handleItemClick(value)}
              >
                <Checkbox
                  size="sm"
                  checked={isChecked(value)}
                  sx={{
                    mr: 2,
                    height: '100%',
                  }}
                />
                <Typography
                  noWrap
                  sx={{ color: (theme) => theme.vars.palette.common.black }}
                >
                  {value}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </>
      )}
    </Stack>
  );
}
