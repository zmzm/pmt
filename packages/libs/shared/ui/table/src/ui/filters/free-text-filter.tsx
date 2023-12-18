import { Search } from '../../shared-ui/search';
import { BaseFilterProps } from '../../types/types';

export function FreeTextFilter<T extends object>({
  column,
}: BaseFilterProps<T>) {
  const filterValue = column.getFilterValue() as string;

  const handleChange = (searchTerm: string) => {
    column.setFilterValue(searchTerm);
  };

  const handleClearValue = () => {
    column.setFilterValue(undefined);
  };

  return (
    <Search
      showClearButton
      searchValue={filterValue}
      onClear={handleClearValue}
      onChange={handleChange}
    />
  );
}
