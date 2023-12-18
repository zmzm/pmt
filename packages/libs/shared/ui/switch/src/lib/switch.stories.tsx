import React from 'react';
import { Stack } from '@task-flow/shared/ui/stack';

import { Switch } from './joyswitch';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Inputs/Switch',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Switch toggles the state of a single setting on or off.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: (args) => <Switch {...args} />,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};

export const WithDecorators: Story = {
  render: (args) => (
    <Switch
      startDecorator={'Start Decorator'}
      endDecorator={'End Decorator'}
      {...args}
    />
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'With decorators on both sides.',
      },
    },
  },
};

export const WithSkeleton: Story = {
  render: (args) => (
    <Stack direction="row" gap={2}>
      <Switch {...args} skeleton />
      <Switch {...args} checked />
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'With skeleton.',
      },
    },
  },
};
