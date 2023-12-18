import { Box } from '@task-flow/shared/ui/box';
import { Stack } from '@task-flow/shared/ui/stack';
import { Typography } from '@task-flow/shared/ui/typography';
import { Cloud, WbSunny as Sun } from '@mui/icons-material';

import { Chip } from './chip/chip';
import { ChipDelete } from './chip-delete/chip-delete';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Data display/Chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Chip generates a compact element that can represent an input, attribute, or action.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip {...args}>This is a chip</Chip>
      <Chip variant="soft" startDecorator={<Sun />} {...args}>
        Today is sunny
      </Chip>
      <Chip variant="soft" startDecorator={<Cloud />} {...args}>
        Tomorrow is cloudy
      </Chip>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Chips are most frequently used in two main use cases: as pills of informative content or as filtering options.',
      },
    },
  },
};

export const Delete: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip
        size="sm"
        variant="outlined"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Remove
      </Chip>
      <Chip
        variant="soft"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Delete
      </Chip>
      <Chip
        size="lg"
        variant="solid"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Delete
      </Chip>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'To add a delete action inside a chip, use the complementary ChipDelete component.',
      },
    },
  },
};

export const Underlined: Story = {
  render: (args) => (
    <Stack direction={'column'} gap={2}>
      <Typography level="body-lg">Outlined</Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Chip
          size="sm"
          variant="outlined"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          underlined
        >
          Default-sm
        </Chip>
        <Chip
          size="md"
          variant="outlined"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          colorCode="blue"
          underlined
          onClick={() => {
            return;
          }}
        >
          Blue-md-clickable
        </Chip>
        <Chip
          size="lg"
          variant="outlined"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          colorCode="orange"
          underlined
        >
          Orange-lg
        </Chip>
      </Box>
      <Typography level="body-lg">Plain</Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Chip
          size="sm"
          variant="plain"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          underlined
        >
          Default-sm
        </Chip>
        <Chip
          size="md"
          variant="plain"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          colorCode="blue"
          underlined
          onClick={() => {
            return;
          }}
        >
          Blue-md-clickable
        </Chip>

        <Chip
          size="lg"
          variant="plain"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          colorCode="orange"
          underlined
        >
          Orange-lg
        </Chip>
      </Box>
      <Typography level="body-lg">Solid</Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Chip
          size="sm"
          variant="solid"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          underlined
        >
          Default-sm
        </Chip>
        <Chip
          size="md"
          variant="solid"
          color="primary"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          colorCode="blue"
          underlined
          onClick={() => {
            return;
          }}
        >
          Blue-md-clickable
        </Chip>
        <Chip
          size="lg"
          variant="solid"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
          colorCode="orange"
          underlined
          color="danger"
        >
          Orange-lg
        </Chip>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'To add a delete action inside a chip, use the complementary ChipDelete component.',
      },
    },
  },
};

export const Skeleton: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip
        skeleton
        size="sm"
        variant="outlined"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Remove
      </Chip>
      <Chip
        size="sm"
        variant="outlined"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Remove
      </Chip>
      <Chip
        skeleton
        variant="soft"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Delete
      </Chip>
      <Chip
        variant="soft"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Delete
      </Chip>
      <Chip
        skeleton
        size="lg"
        variant="solid"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Delete
      </Chip>

      <Chip
        size="lg"
        variant="solid"
        color="danger"
        endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
      >
        Delete
      </Chip>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'To use a chip skeleton set skeleton to true.',
      },
    },
  },
};
