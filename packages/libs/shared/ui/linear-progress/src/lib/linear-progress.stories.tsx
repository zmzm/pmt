import { Box } from '@task-flow/shared/ui/box';

import { LinearProgress } from './linear-progress';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinearProgress> = {
  component: LinearProgress,
  title: 'Feedback/LinearProgress',
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
type Story = StoryObj<typeof LinearProgress>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ width: '100%' }}>
      <LinearProgress {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `Linear Progress indicators, commonly known as loaders, express an unspecified wait time or display the length of a process.`,
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
        flexDirection: 'column',
      }}
    >
      <LinearProgress thickness={1} />
      <LinearProgress variant="solid" />
      <LinearProgress variant="soft" />
      <LinearProgress variant="outlined" />
      <LinearProgress variant="plain" />
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
};
