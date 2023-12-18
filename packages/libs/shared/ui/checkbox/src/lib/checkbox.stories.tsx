import React from 'react';
import { Stack } from '@task-flow/shared/ui/stack';

import { Checkbox, CheckboxProps } from './checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CheckboxProps> = {
  component: Checkbox,
  title: 'Inputs/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Checkbox toggles the state of a single setting on or off.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<CheckboxProps>;

export const Primary = {
  args: {
    label: 'Checkbox label',
  },
};

export const CheckboxExamples: Story = {
  render: (args) => (
    <Stack direction="column" gap={4}>
      <Stack direction="row" gap={3} alignItems={'center'}>
        <Checkbox {...args} checked size="sm" label="Checkbox small" />
        <Checkbox {...args} checked label="Checkbox default" />
        <Checkbox {...args} checked size="lg" label="Checkbox large" />
      </Stack>
      <Stack direction="row" gap={3} alignItems={'center'}>
        <Checkbox {...args} loading checked size="sm" label="Checkbox small" />
        <Checkbox {...args} loading checked label="Checkbox default" />
        <Checkbox {...args} loading checked size="lg" label="Checkbox large" />
      </Stack>
      <Stack direction="row" gap={3} alignItems={'center'}>
        <Checkbox {...args} size="sm" label="Checkbox small" />
        <Checkbox {...args} label="Checkbox default" />
        <Checkbox {...args} size="lg" label="Checkbox large" />
      </Stack>
      <Stack direction="row" gap={3} alignItems={'center'}>
        <Checkbox {...args} indeterminate size="sm" label="Checkbox small" />
        <Checkbox {...args} indeterminate label="Checkbox default" />
        <Checkbox {...args} indeterminate size="lg" label="Checkbox large" />
      </Stack>
      <Stack direction="row" gap={3} alignItems={'center'}>
        <Checkbox
          {...args}
          disabled
          label="Checkbox disabled"
          color="primary"
        />
        <Checkbox {...args} checked disabled label="Checkbox disabled" />
        <Checkbox
          {...args}
          checked
          disabled
          indeterminate
          label="Checkbox disabled"
        />
      </Stack>
      <Stack direction="row" gap={3} alignItems={'center'}>
        <Checkbox {...args} label="Checkbox" color="danger" />
        <Checkbox {...args} checked label="Checkbox" color="danger" />
        <Checkbox {...args} indeterminate label="Checkbox" color="danger" />
      </Stack>{' '}
    </Stack>
  ),
  parameters: {
    args: {
      checked: true,
    },
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};
