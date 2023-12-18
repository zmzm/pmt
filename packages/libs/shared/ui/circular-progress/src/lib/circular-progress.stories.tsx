import { Box } from '@task-flow/shared/ui/box';
import { Button } from '@task-flow/shared/ui/button';
import { Link } from '@task-flow/shared/ui/link';
import {
  Warning as WarningIcon,
  Report as ReportIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/joy';

import { CircularProgress } from './circular-progress';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CircularProgress> = {
  component: CircularProgress,
  title: 'Feedback/CircularProgress',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The Circular Progress component showcases the duration of a process or an indefinite wait period.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ width: '100%' }}>
      <CircularProgress {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `A circular progress indicator, often referred to as a spinner, is a visual representation of the progress of an operation or task.c`,
      },
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <CircularProgress variant="solid" />
      <CircularProgress variant="soft" />
      <CircularProgress variant="outlined" />
      <CircularProgress variant="plain" />
      <CircularProgress color="warning">
        <WarningIcon color="warning" />
      </CircularProgress>
      <CircularProgress size="lg" determinate value={66.67}>
        2 / 3
      </CircularProgress>
      <CircularProgress
        color="danger"
        sx={{ '--CircularProgress-size': '80px' }}
      >
        <ReportIcon color="error" />
      </CircularProgress>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
};

export const WithButton: Story = {
  render: () => (
    <Box
      sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Button
        startDecorator={<CircularProgress variant="solid" thickness={2} />}
        label="Loading..."
      />
      <IconButton>
        <CircularProgress thickness={2} />
      </IconButton>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        component="button"
        variant="outlined"
        startDecorator={
          <CircularProgress
            variant="plain"
            thickness={2}
            sx={{ '--CircularProgress-size': '16px' }}
          />
        }
        sx={{ p: 1 }}
      >
        Submitting...
      </Link>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Circular Progress component can be used as a decorator to show loading on a button.
        The size of the Circular Progress is controlled by a button, an icon button, or a link unless the size prop is explicitly specified on the progress.`,
      },
    },
  },
};
