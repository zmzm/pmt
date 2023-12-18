import { Typography } from '@task-flow/shared/ui/typography';

import { multiSelectFilter } from './utils/multi-select-filter';
import { numericRangefilter } from './utils/numeric-range-filter';
import { singleSelectFilter } from './utils/single-select-filter';
import { MultiSelectFilter } from './ui/filters/multi-select-filter';
import { NumbericRangeFilter } from './ui/filters/numeric-range-filter';
import { SingleSelectFilter } from './ui/filters/single-select-filter';
import { Table } from './ui/table/table';
import { freeTextFilter } from './utils/free-text-filter';
import { FreeTextFilter } from './ui/filters/free-text-filter';
import { FilterTypes } from './types/types';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Data display/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tables display sets of data organized in rows and columns.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Table>;

const columns = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    filter: {
      filterName: FilterTypes.singleSelectFilter,
      filterFunc: singleSelectFilter,
      filterComponent: SingleSelectFilter,
    },
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    filter: {
      filterName: FilterTypes.multiSelectFilter,
      filterFunc: multiSelectFilter,
      filterComponent: MultiSelectFilter,
    },
  },
  {
    accessorKey: 'age',
    header: 'Age',
    filter: {
      filterName: FilterTypes.numericRangeFilter,
      filterFunc: numericRangefilter,
      filterComponent: NumbericRangeFilter,
    },
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    filter: {
      filterName: FilterTypes.freeTextFilter,
      filterFunc: freeTextFilter,
      filterComponent: FreeTextFilter,
    },
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
  },
];

const data = [
  {
    firstName: 'Kelley',
    lastName: 'Leannon',
    age: 2,
    visits: 688,
    progress: 0,
    status: 'complicated',
  },
  {
    firstName: 'Cristina',
    lastName: 'Keebler',
    age: 16,
    visits: 209,
    progress: 92,
    status: 'relationship',
  },
  {
    firstName: 'Emile',
    lastName: 'Kling',
    age: 23,
    visits: 523,
    progress: 80,
    status: 'single',
  },
  {
    firstName: 'Abigayle',
    lastName: 'Graham-Cronin',
    age: 40,
    visits: 782,
    progress: 53,
    status: 'complicated',
  },
  {
    firstName: 'Frieda',
    lastName: 'Ritchie',
    age: 25,
    visits: 982,
    progress: 42,
    status: 'complicated',
  },
  {
    firstName: 'Davion',
    lastName: 'Schneider',
    age: 15,
    visits: 438,
    progress: 20,
    status: 'complicated',
  },
  {
    firstName: 'Coy',
    lastName: "O'Hara",
    age: 14,
    visits: 688,
    progress: 56,
    status: 'single',
  },
  {
    firstName: 'Brett',
    lastName: 'Will',
    age: 1,
    visits: 191,
    progress: 27,
    status: 'complicated',
  },
  {
    firstName: 'Ramiro',
    lastName: 'Rutherford',
    age: 21,
    visits: 16,
    progress: 72,
    status: 'relationship',
  },
  {
    firstName: 'Birdie',
    lastName: 'Romaguera',
    age: 6,
    visits: 112,
    progress: 14,
    status: 'relationship',
  },
  {
    firstName: 'Otho',
    lastName: 'Hermann',
    age: 29,
    visits: 456,
    progress: 40,
    status: 'relationship',
  },
  {
    firstName: 'Freida',
    lastName: 'Hills-Yost',
    age: 20,
    visits: 431,
    progress: 38,
    status: 'single',
  },
  {
    firstName: 'German',
    lastName: 'Gleason',
    age: 5,
    visits: 98,
    progress: 11,
    status: 'relationship',
  },
  {
    firstName: 'Einar',
    lastName: 'Murphy-Collier',
    age: 36,
    visits: 54,
    progress: 14,
    status: 'relationship',
  },
  {
    firstName: 'Brendan',
    lastName: 'Ward',
    age: 33,
    visits: 768,
    progress: 23,
    status: 'complicated',
  },
  {
    firstName: 'Alek',
    lastName: 'Pagac',
    age: 24,
    visits: 709,
    progress: 18,
    status: 'relationship',
  },
  {
    firstName: 'Zachary',
    lastName: 'Blanda',
    age: 34,
    visits: 449,
    progress: 23,
    status: 'complicated',
  },
  {
    firstName: 'Maude',
    lastName: 'Leuschke',
    age: 9,
    visits: 571,
    progress: 37,
    status: 'single',
  },
  {
    firstName: 'Leda',
    lastName: 'Durgan',
    age: 37,
    visits: 179,
    progress: 90,
    status:
      'relationship relationship relationship relationship relationship relationship',
  },
  {
    firstName: 'Aric',
    lastName: 'Morar',
    age: 14,
    visits: 329,
    progress: 17,
    status: 'relationship',
  },
];

export const Primary: Story = {
  render: (args) => (
    <Table
      {...args}
      color="neutral"
      variant="plain"
      enablePagination
      size={args.size || 'lg'}
      aria-label="basic table"
      data={data}
      columns={columns}
      onRowClick={() => <span>Hello</span>}
    />
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `Table has a few predefined filters: <b>First Name colum</b> (single select filter), Last Name column (multi select filter), Age column (numeric filter), Status column (free text filter) they can be activated through the column config.`,
      },
    },
  },
};

export const TableLoadingState: Story = {
  render: (args) => (
    <Table
      size={args.size || 'lg'}
      aria-label="loading-table"
      data={data}
      columns={columns}
      skeleton
    />
  ),
};

export const ColumnConfiguration: Story = {
  render: () => (
    <>
      <Typography level="body-lg">
        <Typography variant="outlined" color="primary">
          accessorKey
        </Typography>
        - the key of the row object to use when extracting the value for the
        column
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="primary">
          accessorFn
        </Typography>
        - the accessor function to use when extracting the value for the column
        from each row (the accessed value is what is used to sort, filter, etc.)
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="primary">
          header
        </Typography>{' '}
        - defines column header, can be plain string{' '}
        <Typography variant="soft">Header name</Typography> or function{' '}
        <Typography variant="soft">{`() => <span>Header name</span>`}</Typography>
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="primary">
          cell
        </Typography>{' '}
        - can be used to specify a custom cell renderer function{' '}
        <Typography variant="soft">{`({ table, row, column, getValue, renderValue }) => <span>Custom cell content</span>`}</Typography>
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="primary">
          size
        </Typography>
        - the desired size for the column
      </Typography>
      <br />
      <Typography level="body-lg">
        Filtering is disabled by default, but it can be enabled via the column
        configuration within a specific{' '}
        <Typography variant="outlined" color="primary">
          filter
        </Typography>{' '}
        object with the following keys:
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="success">
          filterName
        </Typography>{' '}
        - unique filter name
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="success">
          filterFunc
        </Typography>{' '}
        - specific filtering function
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="success">
          filterComponent
        </Typography>{' '}
        - component which will be used for filter render
      </Typography>
      <br />
      <Typography level="body-lg">
        Sorting, like filtering, is disabled by default but can be enabled
        within specific{' '}
        <Typography variant="outlined" color="primary">
          sort
        </Typography>{' '}
        object with following keys:
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="success">
          direction
        </Typography>{' '}
        - sorting direction asc/desc, if provided - column will be sorted by
        default (max default columns 1)
      </Typography>
      <Typography level="body-lg">
        <Typography variant="outlined" color="success">
          sortFunc
        </Typography>{' '}
        - specific custom sorting function or one of built-in functions{' '}
        <Typography variant="soft">
          "text" | "auto" | "alphanumeric" | "alphanumericCaseSensitive"
          |"textCaseSensitive" | "datetime" | "basic"
        </Typography>
      </Typography>
    </>
  ),
};
