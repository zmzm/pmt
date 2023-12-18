import { Table } from '@tanstack/react-table';

import { HeaderCell } from './header-cell/header-cell';

export interface TableHeaderProps<T extends object> {
  table: Table<T>;
  skeleton: boolean;
}

export const TableHeader = <T extends object>({
  table,
  skeleton,
}: TableHeaderProps<T>) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <HeaderCell
              key={header.id}
              header={header}
              table={table}
              skeleton={skeleton}
            />
          ))}
        </tr>
      ))}
    </thead>
  );
};
