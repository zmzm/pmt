import {
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
} from '@task-flow/shared/ui/list';
import { Box } from '@task-flow/shared/ui/box';
import { Stack } from '@task-flow/shared/ui/stack';
import { Typography } from '@task-flow/shared/ui/typography';
import { Divider } from '@task-flow/shared/ui/divider';
import { Button } from '@task-flow/shared/ui/button';
import React from 'react';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import { DrawerProps } from '@mui/material/Drawer';

import { Drawer } from './drawer/drawer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Navigation/Drawer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Drawer>;
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const PrimaryDrawer = (args: DrawerProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemDecorator>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemDecorator>
              <Typography>{text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemDecorator>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemDecorator>
              <Typography>{text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Stack direction="row" gap={2}>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            {...{
              ...args,
              onClose: toggleDrawer(anchor, false),
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Stack>
  );
};

export const Primary: Story = {
  render: (args) => PrimaryDrawer(args),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is selected, handled by controlling the open prop.',
      },
    },
  },
};
