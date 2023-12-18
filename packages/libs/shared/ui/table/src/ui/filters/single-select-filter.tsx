import { List, ListItemButton } from '@task-flow/shared/ui/list';
import { Stack } from '@task-flow/shared/ui/stack';
import { Typography } from '@task-flow/shared/ui/typography';
import { MouseEvent, useEffect, useState } from 'react';

import { BaseFilterProps } from '../../types/types';
import { filterStringValues } from '../../utils/filter-string-values';
import { Search } from '../../shared-ui/search';

export function SingleSelectFilter<T extends object>({
  column,
  values,
  closeFilter,
}: BaseFilterProps<T>) {
  const filterValue = column.getFilterValue() as string;
  const columnSetFilterValue = column.setFilterValue;
  const [searchItems, setSearchItems] = useState(values || []);

  useEffect(() => {
    const items = filterStringValues(values, filterValue || '');
    setSearchItems(items);
  }, [filterValue, values]);

  const handleClearValue = () => {
    columnSetFilterValue(undefined);
  };

  const handleSearch = (searchTerm: string) => {
    const items = filterStringValues(values, searchTerm);
    setSearchItems(items);
  };

  const handleItemClick =
    (item: string) => (event: MouseEvent<HTMLDivElement>) => {
      columnSetFilterValue(item);
      closeFilter && closeFilter();
    };

  return (
    <Stack>
      <Search
        showClearButton
        searchValue={filterValue}
        onClear={handleClearValue}
        onChange={handleSearch}
      />
      {!searchItems.length ? (
        <Typography
          noWrap
          fontSize="md"
          sx={{
            color: (theme) => theme.vars.palette.common.black,
            lineHeight: 'md',
          }}
        >
          No matches found
        </Typography>
      ) : (
        <List
          size="sm"
          sx={{
            mt: 3,
            maxHeight: 200,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {searchItems.map((item) => (
            <ListItemButton
              key={item}
              active={item === filterValue}
              onClick={handleItemClick(item)}
              sx={{
                px: 0,
                cursor: 'pointer',
                fontSize: 'md',
                lineHeight: 'sm',
              }}
            >
              <Typography
                noWrap
                sx={{ color: (theme) => theme.vars.palette.common.black }}
              >
                {item}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      )}
    </Stack>
  );
}
