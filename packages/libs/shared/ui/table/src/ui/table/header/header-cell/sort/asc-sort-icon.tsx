import {
  KeyboardArrowUpOutlined as AscSorting,
  KeyboardArrowUp as AscSortingActive,
} from '@mui/icons-material';

import { SortIcon } from './sort-icon';

export interface AscSortIconProps {
  active: boolean;
}

export function AscSortIcon({ active }: AscSortIconProps) {
  return (
    <SortIcon active={active}>
      {active ? <AscSortingActive /> : <AscSorting />}
    </SortIcon>
  );
}
