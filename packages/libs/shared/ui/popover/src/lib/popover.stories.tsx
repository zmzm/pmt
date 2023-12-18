import React from 'react';
import { Box } from '@task-flow/shared/ui/box';
import { Button } from '@task-flow/shared/ui/button';
import { PopoverProps } from '@mui/material/Popover';
import { Typography } from '@task-flow/shared/ui/typography';
import { AddOutlined } from '@mui/icons-material';

import { Popover } from './popover';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Utils/Popover',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A Popover can be used to display some content on top of another.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Popover>;

const PrimaryPopover = (args: PopoverProps) => {
  const [parentEl, setParentEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handlebuttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setParentEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setParentEl(null);
  };

  const open = Boolean(parentEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box display="flex" justifyContent="center">
      <Button
        color="primary"
        variant="solid"
        startDecorator={<AddOutlined />}
        label="Open popover"
        onClick={handlebuttonClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={parentEl}
        onClose={handlePopoverClose}
      >
        <Box
          sx={{
            button: {
              width: '100%',
              height: '100px',
            },
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Box>
      </Popover>
    </Box>
  );
};

export const Primary: Story = {
  render: (args) => PrimaryPopover(args),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
};
