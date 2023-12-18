import { render } from '@testing-library/react';

import { TablePagination } from './table-pagination';

describe('TablePagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TablePagination
        component="div"
        count={100}
        page={10}
        onPageChange={jest.fn()}
        rowsPerPage={20}
        onRowsPerPageChange={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
