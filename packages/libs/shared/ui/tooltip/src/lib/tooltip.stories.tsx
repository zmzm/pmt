import { Box } from '@task-flow/shared/ui/box';
import { Grid } from '@task-flow/shared/ui/grid';
import { Button } from '@task-flow/shared/ui/button';

import { Tooltip } from './tooltip';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Data display/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tooltips display informative text when users hover over, focus on, or tap an element.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  render: (args) => (
    <Box
      sx={{ display: 'flex', gap: 4, width: '100%', justifyContent: 'center' }}
    >
      <Tooltip variant="solid" {...{ ...args, title: 'Tooltip text' }}>
        <Button label="Solid" variant="solid" />
      </Tooltip>
      <Tooltip variant="soft" {...{ ...args, title: 'Tooltip text' }}>
        <Button label="Soft" variant="soft" />
      </Tooltip>
      <Tooltip variant="outlined" {...{ ...args, title: 'Tooltip text' }}>
        <Button label="Outlined" variant="outlined" />
      </Tooltip>
      <Tooltip variant="plain" {...{ ...args, title: 'Tooltip text' }}>
        <Button label="Plain" variant="plain" />
      </Tooltip>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
};

export const Position: Story = {
  render: (args) => (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Grid container justifyContent="center">
        <Grid>
          <Tooltip title="Add" placement="top-start">
            <Button label="top-start" variant="plain" />
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button label="top" variant="plain" />
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button label="top-end" variant="plain" />
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid xs={6}>
          <Tooltip title="Add" placement="left-start">
            <Button label="left-start" variant="plain" />
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button label="left" variant="plain" />
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button label="left-end" variant="plain" />
          </Tooltip>
        </Grid>
        <Grid container xs={6} alignItems="flex-end" direction="column">
          <Grid>
            <Tooltip title="Add" placement="right-start">
              <Button label="right-start" variant="plain" />
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Add" placement="right">
              <Button label="right" variant="plain" />
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Add" placement="right-end">
              <Button label="right-end" variant="plain" />
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid>
          <Tooltip title="Add" placement="bottom-start">
            <Button label="bottom-start" variant="plain" />
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button label="bottom" variant="plain" />
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button label="bottom-end" variant="plain" />
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Tooltip has 12 placement choices. They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction.`,
      },
    },
  },
};
