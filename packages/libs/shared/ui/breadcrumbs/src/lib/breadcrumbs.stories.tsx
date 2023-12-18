import { Link } from '@task-flow/shared/ui/link';
import { Public } from '@mui/icons-material';
import { Typography } from '@task-flow/shared/ui/typography';
import IconButton from '@mui/joy/IconButton';

import { Breadcrumbs } from './breadcrumbs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Navigation/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A breadcrumb trail is a navigational tool that helps users keep track of their location within an app.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Primary: Story = {
  render: (args) => (
    <Breadcrumbs aria-label="breadcrumbs" {...args}>
      <Link
        onClick={(event) => event.preventDefault()}
        underline="hover"
        color="primary"
        fontSize="inherit"
        href="/"
      >
        <IconButton
          variant="plain"
          size="sm"
          sx={{ mr: '3.5' }}
          color="primary"
        >
          <Public fontSize="inherit" />
        </IconButton>
        Home
      </Link>
      {['TV Shows', 'Futurama', 'Characters'].map((item: string) => (
        <Link
          onClick={(event) => event.preventDefault()}
          key={item}
          underline="hover"
          color="neutral"
          fontSize="inherit"
          href="/"
        >
          {item}
        </Link>
      ))}
      <Typography fontSize="inherit">Dr. Zoidberg</Typography>
    </Breadcrumbs>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Breadcrumbs component acts as a wrapper for navigation links. It's designed to be used with the Link and Typography components, as shown below:`,
      },
    },
  },
};
