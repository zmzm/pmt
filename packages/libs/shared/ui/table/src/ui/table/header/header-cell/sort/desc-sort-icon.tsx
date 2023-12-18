import {
  KeyboardArrowDownOutlined as DescSorting,
  KeyboardArrowDown as DescSortingActive,
} from '@mui/icons-material';

import { SortIcon } from './sort-icon';

export interface DescSortIconProps {
  active: boolean;
}

export function DescSortIcon({ active }: DescSortIconProps) {
  return (
    <SortIcon active={active}>
      {active ? <DescSortingActive /> : <DescSorting />}
    </SortIcon>
  );
}
