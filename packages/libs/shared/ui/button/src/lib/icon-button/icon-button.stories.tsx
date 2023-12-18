import { Stack } from '@task-flow/shared/ui/stack';
import { FavoriteBorder } from '@mui/icons-material';

import { IconButton } from './icon-button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Inputs/IconButton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Use the Icon Button component for a square button to house an icon with no text content.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary = {
  args: {
    children: <FavoriteBorder />,
  },
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap={2}>
      <IconButton variant="solid">
        <FavoriteBorder />
      </IconButton>

      <IconButton variant="soft">
        <FavoriteBorder />
      </IconButton>

      <IconButton variant="outlined">
        <FavoriteBorder />
      </IconButton>

      <IconButton variant="plain">
        <FavoriteBorder />
      </IconButton>
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'The Icon Button component supports four global variants: solid, soft (default), outlined, and plain.',
      },
    },
  },
};
