import { Box } from '@mui/material';
import { SideNav } from '@pmt/main/features/side-nav';
import { TopBar } from '@pmt/main/features/top-bar';
import { useState } from 'react';

export function AppLayout() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <header>
        <TopBar toggleDrawer={toggleDrawer} />
      </header>
      <nav>
        <SideNav open={open} />
      </nav>
    </Box>
  );
}
