import { Box } from '@task-flow/shared/ui/box';
import { Stack } from '@task-flow/shared/ui/stack';
import { Typography } from '@task-flow/shared/ui/typography';
import Option from '@mui/joy/Option';

import { Select } from './select';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Inputs/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Select components are used for collecting user provided information from a list of options.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ height: '300px' }}>
      <Select {...args} />
    </Box>
  ),
  args: {
    placeholder: 'Select',
    children: (
      <>
        <Option value={'first'}>First</Option>
        <Option value={'second'}>Second</Option>
        <Option value={'third'}>Third</Option>
      </>
    ),
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <Stack gap={3}>
      <Box>
        <Typography>Outlined Primary Variant: </Typography>
        <Select variant="outlined" color="primary" {...args} />
      </Box>
      <Box>
        <Typography>Outlined Neutral Variant: </Typography>
        <Select variant="outlined" color="neutral" {...args} />
      </Box>
      <Box>
        <Typography>Solid Primary Variant: </Typography>
        <Select variant="solid" color="primary" {...args} />
      </Box>
      <Box>
        <Typography>Solid Neutral Variant: </Typography>
        <Select variant="solid" color="neutral" {...args} />
      </Box>
      <Box>
        <Typography>Plain Primary Variant: </Typography>
        <Select variant="plain" color="primary" {...args} />
      </Box>

      <Box>
        <Typography>Plain Neutral Variant: </Typography>
        <Select variant="plain" color="neutral" {...args} />
      </Box>

      <Box>
        <Typography>Soft Primary Variant: </Typography>
        <Select variant="soft" color="primary" {...args} />
      </Box>

      <Box>
        <Typography>Soft Neutral Variant: </Typography>
        <Select variant="soft" color="neutral" {...args} />
      </Box>
    </Stack>
  ),
  args: {
    defaultValue: 'first',
    children: (
      <>
        <Option value={'first'}>First</Option>
        <Option value={'second'}>Second</Option>
        <Option value={'third'}>Third</Option>
      </>
    ),
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};

export const Multiple: Story = {
  render: (args) => (
    <Box sx={{ height: '300px' }}>
      <Select {...args} />
    </Box>
  ),
  args: {
    placeholder: 'Select',
    defaultValue: ['first'],
    multiple: true,
    children: (
      <>
        <Option value={'first'}>First</Option>
        <Option value={'second'}>Second</Option>
        <Option value={'third'}>Third</Option>
      </>
    ),
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Allow to select multiple options',
      },
    },
  },
};
