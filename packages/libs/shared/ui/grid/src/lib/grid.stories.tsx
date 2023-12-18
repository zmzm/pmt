import { Sheet } from '@task-flow/shared/ui/sheet';

import { Grid } from './grid';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Layout/Grid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Grid acts as a generic container, wrapping around the elements to be arranged. Stack is concerned with one-dimensional layouts, while Grid handles two-dimensional layouts.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Primary: Story = {
  args: {
    container: true,
    spacing: 2,
  },
  render: (args) => (
    <Grid {...args}>
      <Grid xs={8}>
        <Sheet variant="solid">xs=8</Sheet>
      </Grid>
      <Grid xs={4}>
        <Sheet variant="solid">xs=4</Sheet>
      </Grid>
      <Grid xs={4}>
        <Sheet variant="solid">xs=4</Sheet>
      </Grid>
      <Grid xs={8}>
        <Sheet variant="solid">xs=8</Sheet>
      </Grid>
    </Grid>
  ),
};
