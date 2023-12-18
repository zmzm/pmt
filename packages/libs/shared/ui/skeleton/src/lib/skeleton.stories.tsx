import { Box } from '@task-flow/shared/ui/box';
import Typography from '@mui/joy/Typography';

import { Skeleton } from './skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Feedback/Skeleton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Skeletons are preview placeholders for components that haven't loaded yet, reducing load-time frustration.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ m: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
      <Skeleton variant="circular" width={48} height={48} {...args} />
      <div>
        <Skeleton
          variant="rectangular"
          width={200}
          height="1em"
          sx={{ mb: 1 }}
          {...args}
        />
        <Skeleton variant="rectangular" width={140} height="1em" {...args} />
      </div>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
};

export const InlineWithTypography: Story = {
  args: {
    loading: true,
  },
  render: (args) => (
    <Box sx={{ m: 'auto', maxWidth: '60ch' }}>
      <Typography
        sx={{ position: 'relative', overflow: 'hidden' }}
        level="h1"
        fontSize="xl"
      >
        <Skeleton loading={args.loading} variant="inline">
          A heading
        </Skeleton>
      </Typography>
      <Typography
        level="body-xs"
        sx={{ mt: 1, mb: 2, position: 'relative', overflow: 'hidden' }}
      >
        <Skeleton loading={args.loading} variant="inline">
          HISTORY, PURPOSE AND USAGE
        </Skeleton>
      </Typography>
      <Typography sx={{ position: 'relative', overflow: 'hidden' }}>
        <Skeleton loading={args.loading} variant="inline">
          <i>Lorem ipsum</i> is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual
          mockups.
        </Skeleton>
      </Typography>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Insert the Skeleton between the Typography component and the text to display placeholder lines.',
      },
    },
  },
};
