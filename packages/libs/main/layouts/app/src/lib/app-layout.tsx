import { Box, Stack } from '@mui/material';
import { SideNav } from '@pmt/main/features/side-nav';
import { TopBar } from '@pmt/main/features/top-bar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Stack>
      <Box>
        <TopBar toggleDrawer={toggleDrawer} />
      </Box>
      <Stack direction="row">
        <SideNav open={open} />
        <Box sx={{ width: '100%' }}>
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
}
