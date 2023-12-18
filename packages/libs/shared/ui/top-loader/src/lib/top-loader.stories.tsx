import { Box } from '@task-flow/shared/ui/box';

import { TopLoader } from './top-loader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TopLoader> = {
  component: TopLoader,
  title: 'Feedback/TopLoader',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'TopLoader component is used to render an animated bar on top of the page that indicates an action in' +
          ' progress.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof TopLoader>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ position: 'relative' }}>
      <TopLoader {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};
