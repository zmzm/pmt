import { Box } from '@task-flow/shared/ui/box';

import { Avatar } from './avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Data display/Avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `An avatar is a graphical representation of a user's identity.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar {...args} />
      <Avatar {...args}>UK</Avatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `By default, the Avatar component displays a generic Person Icon. You can replace this icon with a text string or an image.`,
      },
    },
  },
};

export const Skeleton: Story = {
  args: {
    skeleton: true,
  },
  render: (args) => <Avatar {...args}>RM</Avatar>,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `Avatar can show a skeleton placeholder when loading`,
      },
    },
  },
};
