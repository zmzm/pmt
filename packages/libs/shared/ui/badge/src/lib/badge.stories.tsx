import { Home } from '@mui/icons-material';
import { Box } from '@task-flow/shared/ui/box';

import { Badge } from './badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Data display/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The Badge component generates a small label that is attached to its child element.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Badge {...args}>
        <Home />
      </Badge>
      <Badge badgeContent={99} {...args}>
        <Home />
      </Badge>
      <Badge badgeContent="❕" {...args}>
        <Home />
      </Badge>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Badge component wraps around the UI element that it's attached to. Its default appearance is a dot in the app's primary color that sits on the top-right corner of the element that it's attached to.`,
      },
    },
  },
};
