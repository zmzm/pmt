import { Stack } from '@task-flow/shared/ui/stack';
import { Typography } from '@task-flow/shared/ui/typography';
import { Button } from '@task-flow/shared/ui/button';
import { Box } from '@task-flow/shared/ui/box';
import { Divider } from '@task-flow/shared/ui/divider';
import { Skeleton } from '@task-flow/shared/ui/skeleton';
import { Input } from '@task-flow/shared/ui/input';
import { Autocomplete } from '@task-flow/shared/ui/autocomplete';

import { Sheet } from './sheet';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sheet> = {
  component: Sheet,
  title: 'Surfaces/Sheet',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Sheet is a generic container that supports Joy UI's global variants.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Primary: Story = {
  args: {
    children: 'Hello World',
    variant: 'outlined',
    sx: {
      width: 320,
      height: 320,
    },
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Sheet container is a generic container. It's a sibling to the Box component, and equivalent to Material UI's Paper, with the difference being that it supports Joy UI's global variants out of the box.`,
      },
    },
  },
};
