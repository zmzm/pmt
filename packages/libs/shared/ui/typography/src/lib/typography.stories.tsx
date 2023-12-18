import { Stack } from '@task-flow/shared/ui/stack';

import { Typography } from './typography';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Data display/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The Typography component helps present design and content clearly and efficiently.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  render: (args) => (
    <Typography mb={2} lineHeight="lg" {...args}>
      Typography lets you create <Typography variant="soft">nested</Typography>{' '}
      typography. Use your{' '}
      <Typography variant="outlined" color="success">
        imagination
      </Typography>{' '}
      to build wonderful{' '}
      <Typography variant="solid" color="primary">
        user interface
      </Typography>
      .
    </Typography>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Typography component helps maintain a consistent design by providing a limited set of values to choose from and convenient props for building common designs faster.`,
      },
    },
  },
};

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonPlaceholder:
      'This placeholder text used by the skeleton while the actual text is loading',
  },
  render: (args) => <Typography {...args}>The actual text</Typography>,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Typography component can show a skeleton loading with placeholder lines.`,
      },
    },
  },
};

export const Levels: Story = {
  render: () => (
    <Stack gap={1}>
      <Typography
        sx={{
          color: 'text.tertiary',
        }}
        variant="solid"
      >
        Default
      </Typography>
      <Typography level="h1">h1</Typography>
      <Typography level="h2">h2</Typography>
      <Typography level="body-lg">body-lg</Typography>
      <Typography level="body-lg" fontWeight="medium">
        body-lg (medium)
      </Typography>
      <Typography level="body-md">body-md</Typography>
      <Typography level="body-md" fontWeight="medium">
        body-md (medium)
      </Typography>
      <Typography level="body-sm">body-sm</Typography>
      <Typography level="body-sm" fontWeight="medium">
        body-sm (medium)
      </Typography>
      <Typography level="body-xs">body-xs</Typography>
      <Typography level="body-xs" fontWeight="medium">
        body-xs (medium)
      </Typography>
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Typography component accepts a level prop to determine the style.`,
      },
    },
  },
};
