import { Header, Table } from '@tanstack/react-table';
import { Box } from '@task-flow/shared/ui/box';
import { isNumber } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Filter } from './filter/filter';
import { HeaderCellContent } from './header-cell-content';

const MIN_HEADER_WIDTH = 100;

export interface HeaderCellProps<T extends object> {
  table: Table<T>;
  skeleton: boolean;
  header: Header<T, unknown>;
}

export const HeaderCell = <T extends object>({
  header,
  table,
  skeleton,
}: HeaderCellProps<T>) => {
  const [width, setWidth] = useState<string | number>();
  const headerElementRef = useRef<HTMLTableCellElement>(null);
  const hasData = table.getCoreRowModel().rows.length > 0;

  const headerSize =
    header.getSize() === Number.MAX_SAFE_INTEGER ? width : header.getSize();

  const headerMinSize = header.column.columnDef.minSize || MIN_HEADER_WIDTH;

  const headerMaxSize =
    header.column.columnDef.maxSize === Number.MAX_SAFE_INTEGER
      ? headerSize
      : header.column.columnDef.maxSize || headerSize;

  const setHeaderSize = useCallback(
    (size?: number) => {
      const currentWidth =
        size || headerElementRef?.current?.getBoundingClientRect().width || 0;

      setWidth(currentWidth <= headerMinSize ? headerMinSize : 'auto');
    },
    [headerMinSize]
  );

  useEffect(() => {
    if (!headerElementRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      setHeaderSize();
    });

    resizeObserver.observe(headerElementRef.current);

    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [setHeaderSize]);

  useEffect(() => {
    setHeaderSize();
  }, [setHeaderSize]);

  return (
    <th
      key={header.id}
      ref={headerElementRef}
      {...(isNumber(header.colSpan) &&
        header.colSpan > 1 && { colSpan: header.colSpan })}
      style={{
        width: headerSize,
        minWidth: headerMinSize,
        maxWidth: headerMaxSize,
      }}
    >
      {header.isPlaceholder ? null : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            height: '100%',
            cursor: header.column.columnDef.sort ? 'pointer' : 'default',
          }}
        >
          <HeaderCellContent
            header={header}
            hasData={hasData}
            skeleton={skeleton}
          />

          {header.column.columnDef.filter && !skeleton && hasData && (
            <Filter
              table={table}
              column={header.column}
              headerElementRef={headerElementRef}
            />
          )}
        </Box>
      )}
    </th>
  );
};
