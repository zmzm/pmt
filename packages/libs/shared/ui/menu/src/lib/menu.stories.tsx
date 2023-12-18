import React from 'react';
import { Button, IconButton } from '@task-flow/shared/ui/button';
import { ListDivider, ListItemDecorator } from '@task-flow/shared/ui/list';
import { Apps, MoreVert, Edit, DeleteForever } from '@mui/icons-material';

import { Menu } from './menu/menu';
import { MenuItem } from './menu-item/menu-item';
import { Dropdown } from './dropdown/dropdown';
import { MenuButton } from './menu-button/menu-button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: 'Navigation/Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Menus display a list of choices on temporary surfaces.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Menu>;

const SelectedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const createHandleClose = (index: number) => () => {
    setAnchorEl(null);
    if (typeof index === 'number') {
      setSelectedIndex(index);
    }
  };

  return (
    <div>
      <Button
        id="selected-demo-button"
        aria-controls={open ? 'selected-demo-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        startDecorator={<Apps />}
      >
        Apps
      </Button>
      <Menu
        id="selected-demo-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={createHandleClose(-1)}
        aria-labelledby="selected-demo-button"
      >
        <MenuItem
          {...(selectedIndex === 0 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(0)}
        >
          Random project
        </MenuItem>
        <MenuItem
          {...(selectedIndex === 1 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(1)}
        >
          Production - web
        </MenuItem>
        <MenuItem
          {...(selectedIndex === 2 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(2)}
        >
          Staging - web
        </MenuItem>
      </Menu>
    </div>
  );
};

const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="positioned-demo-button"
        aria-controls={open ? 'positioned-demo-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        sx={{ transform: 'rotate(90deg)' }}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="positioned-demo-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="positioned-demo-button"
        placement="bottom-end"
      >
        <MenuItem onClick={handleClose}>
          <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit post
        </MenuItem>
        <MenuItem disabled onClick={handleClose}>
          <ListItemDecorator />
          Draft post
        </MenuItem>
        <ListDivider />
        <MenuItem onClick={handleClose} variant="soft" color="danger">
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => (
    <Dropdown>
      <MenuButton>Dashboard</MenuButton>
      <Menu {...args}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The basic version of the menu opens over the anchor element by default. You can change this via specific positioning props.
        When close to the screen's edge, the menu vertically realigns to make sure that all menu items are completely visible. Choosing an option should immediately, and ideally, commit the option and close the menu.`,
      },
    },
  },
};

export const Positioned: Story = {
  render: () => PositionedMenu(),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Menu is based on the Base UI Popper component, which exposes a few placement props. For example, this is how you'd go for displaying the menu on the bottom-end of the anchor button.`,
      },
    },
  },
};

export const Selected: Story = {
  render: () => SelectedMenu(),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `Use the selected prop to signal whether a MenuItem is selected or not.`,
      },
    },
  },
};
