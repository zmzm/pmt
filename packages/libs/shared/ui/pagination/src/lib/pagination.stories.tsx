import { Stack } from '@task-flow/shared/ui/stack';
import { Box } from '@task-flow/shared/ui/box';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { useState } from 'react';

import { Pagination } from './pagination/pagination';
import { PaginationItem } from './pagination-item/pagination-item';
import { TablePagination } from './table-pagination/table-pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Navigation/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Pagination component enables the user to select a specific page from a range of pages.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowLeft, next: ArrowRight }}
            {...item}
          />
        )}
      />
    </Stack>
  ),
};

export const PaginationRanges: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Pagination count={11} defaultPage={6} />
      <Pagination
        count={11}
        defaultPage={6}
        siblingCount={0}
        boundaryCount={2}
      />
      <Pagination count={11} defaultPage={6} boundaryCount={2} />
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'You can specify how many digits to display either side of current page with the siblingCount prop, and adjacent to the start and end page number with the boundaryCount prop.',
      },
    },
  },
};

function TablePaginationDemo() {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export const TablePaginationExample: Story = {
  render: () => (
    <Box display="flex" alignItems="center" justifyContent="center">
      <TablePaginationDemo />
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'For the pagination of a large set of tabular data, you should use the TablePagination component.',
      },
    },
  },
};
