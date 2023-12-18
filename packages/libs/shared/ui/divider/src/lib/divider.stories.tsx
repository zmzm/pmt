import { Box } from '@task-flow/shared/ui/box';
import { Chip } from '@task-flow/shared/ui/chip';
import { Stack } from '@task-flow/shared/ui/stack';

import { Divider } from './divider';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Data display/Divider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A divider is a thin line that groups content in lists and layouts.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Divider>;

const content = (
  <Box sx={{ fontSize: 'sm', color: 'text.tertiary' }}>
    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
 Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
 Sed malesuada lobortis pretium.`}
  </Box>
);

export const Primary: Story = {
  render: (args) => (
    <Stack spacing={1}>
      {content}
      <Divider {...args}>Visual indicator</Divider>
      {content}
      <Divider sx={{ '--Divider-childPosition': '20%' }} {...args}>
        <Chip variant="soft" color="neutral" size="sm">
          Visual indicator
        </Chip>
      </Divider>
      {content}
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Dividers separate content into clear groups.',
      },
    },
  },
};
