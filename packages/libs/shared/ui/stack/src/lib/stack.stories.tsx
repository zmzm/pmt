import { Sheet } from '@task-flow/shared/ui/sheet';

import { Stack } from './stack';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: 'Layout/Stack',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stack is a container component for arranging elements vertically or horizontally. Stack is concerned with one-dimensional layouts, while Grid handles two-dimensional layouts. The default direction is column which stacks children vertically.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Primary: Story = {
  args: {
    gap: 1,
  },
  render: (args) => (
    <Stack {...args}>
      <Sheet variant="solid">Item 1</Sheet>
      <Sheet variant="solid">Item 2</Sheet>
    </Stack>
  ),
};
