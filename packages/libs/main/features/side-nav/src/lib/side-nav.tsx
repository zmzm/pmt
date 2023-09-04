import * as React from 'react';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { mainListItems, secondaryListItems } from './listItems';
import { Drawer, Toolbar } from './styled';

export const SideNav = ({ open = false }: { open?: boolean }) => (
  <Drawer variant="permanent" open={open}>
    <Toolbar>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Workspace name
      </Typography>
    </Toolbar>
    <Divider />
    <List component="nav">
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      {secondaryListItems}
    </List>
  </Drawer>
);
