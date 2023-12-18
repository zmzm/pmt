/* eslint-disable jsx-a11y/accessible-emoji */
import { Typography } from '@task-flow/shared/ui/typography';
import { Box } from '@task-flow/shared/ui/box';
import { Sheet } from '@task-flow/shared/ui/sheet';
import { Home, Person } from '@mui/icons-material';

import { List } from './list/list';
import { ListItem } from './list-item/list-item';
import { ListItemButton } from './list-item-button/list-item-button';
import { ListItemDecorator } from './list-item-decorator/list-item-decorator';
import { ListSubheader } from './list-subheader/list-subheader';
import { ListDivider } from './list-divider/list-divider';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof List> = {
  component: List,
  title: 'Data display/List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Lists are continuous, vertical indexes of text or images.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof List>;

export const Primary: Story = {
  render: (args) => (
    <div>
      <Typography
        id="basic-list-demo"
        level="body-xs"
        textTransform="uppercase"
        fontWeight="lg"
      >
        Ingredients
      </Typography>
      <List aria-labelledby="basic-list-demo" {...args}>
        <ListItem>1 red onion</ListItem>
        <ListItem>2 red peppers</ListItem>
        <ListItem>120g bacon</ListItem>
      </List>
    </div>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Use the List and ListItem components to create a basic, non-interactive, list.',
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: 6,
        flexWrap: 'wrap',
        '& > *': { minWidth: 0, flexBasis: 200 },
      }}
    >
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Box key={size}>
          <Typography level="body-xs" mb={2}>
            <code>size=&quot;{size}&quot;</code>
          </Typography>
          <List
            size={size}
            variant="outlined"
            sx={{
              borderRadius: 'sm',
              maxWidth: 300,
              boxShadow: 'sm',
              bgcolor: 'background.body',
            }}
            {...args}
          >
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <Home />
                </ListItemDecorator>
                Home
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Projects</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Settings</ListItemButton>
            </ListItem>
          </List>
        </Box>
      ))}
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Use the size prop to control font-size and general list density.',
      },
    },
  },
};

export const Decorator: Story = {
  render: (args) => (
    <div>
      <Typography
        id="decorated-list-demo"
        level="body-xs"
        textTransform="uppercase"
        fontWeight="lg"
        mb={1}
      >
        Ingredients
      </Typography>
      <List
        aria-labelledby="decorated-list-demo"
        sx={{ '--ListItemDecorator-size': '32px' }}
        {...args}
      >
        <ListItem>
          <ListItemDecorator>🧅</ListItemDecorator> 1 red onion
        </ListItem>
        <ListItem>
          <ListItemDecorator>🍤</ListItemDecorator> 2 Shrimps
        </ListItem>
        <ListItem>
          <ListItemDecorator>🥓</ListItemDecorator> 120g bacon
        </ListItem>
      </List>
    </div>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Use the size prop to control font-size and general list density.',
      },
    },
  },
};

export const StickyList: Story = {
  render: (args) => (
    <Sheet
      variant="outlined"
      sx={{
        width: 320,
        maxHeight: 300,
        overflow: 'auto',
        borderRadius: 'sm',
      }}
    >
      <List {...args}>
        {[...Array(5)].map((_, categoryIndex) => (
          <ListItem nested key={categoryIndex}>
            <ListSubheader sticky>Category {categoryIndex + 1}</ListSubheader>
            <List>
              {[...Array(10)].map((__, index) => (
                <ListItem key={index}>
                  <ListItemButton>Subitem {index + 1}</ListItemButton>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Sheet>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `To have a sticky list item, use a List as a child of the Sheet component. Then, on the item you wish to stick, add the sticky prop.
          The Sheet component automatically adjusts the sticky list item to have the same background so that the content does not overflow when scroll. It works by default on both light and dark modes.`,
      },
    },
  },
};

export const HorizontalList: Story = {
  render: (args) => (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal" {...args}>
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
            <Home />
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Products
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Blog
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `To show a list in a horizontal direction, use the orientation="horizontal" prop on the List component.`,
      },
    },
  },
};
