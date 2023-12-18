import { Typography } from '@task-flow/shared/ui/typography';
import { Stack } from '@task-flow/shared/ui/stack';
import { AspectRatio } from '@task-flow/shared/ui/aspect-ratio';

import { Card } from './card/card';
import { CardOverflow } from './card-overflow/card-overflow';
import { CardCover } from './card-cover/card-cover';
import { CardContent } from './card-content/card-content';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Surfaces/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A card is a generic container for grouping related UI elements and content.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    variant: 'outlined',
    sx: { width: 320, height: 320 },
    children: (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: '100%',
          backgroundColor: '#EBEBEF',
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#000">
          Card
        </Typography>
      </Stack>
    ),
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Card is a surface-level container for grouping related components.',
      },
    },
  },
};

export const Overflow: Story = {
  args: {
    variant: 'outlined',
    sx: { width: 320, height: 320 },
  },
  render: (args) => (
    <Card {...args}>
      <CardOverflow>
        <AspectRatio ratio="4/3">
          <Typography level="h1" fontSize="lg" textColor="#000">
            Card overflow
          </Typography>
        </AspectRatio>
      </CardOverflow>
      <div />
    </Card>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `By default, the Card component adds padding around the outer edges of its contents. To eliminate this white space, add the Card Overflow component inside the Card as a wrapper around the content to be expanded.
        Note that Card Overflow only works when it's the first and/or last child of the parent Card.`,
      },
    },
  },
};

export const Layers: Story = {
  args: {
    variant: 'outlined',
    sx: { width: 320, height: 320 },
  },
  render: (args) => (
    <Card {...args}>
      <Typography level="h2" fontSize="lg" textColor="#000">
        Card
      </Typography>
      <CardCover
        sx={{
          background: 'linear-gradient(to top, #EBEBEF, rgba(0,0,0,0))',
          backdropFilter: 'blur(1px)',
        }}
      >
        <Typography level="h2" fontSize="lg">
          Card Cover
        </Typography>
      </CardCover>
      <CardContent
        sx={{
          alignItems: 'self-end',
          justifyContent: 'flex-end',
          background:
            'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
          backdropFilter: 'blur(1px)',
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#fff" m={2}>
          Card Content
        </Typography>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The default Card provides a single flat surface for other components to sit on top of. Use the Card Cover and Card Content components to expose multiple layers between a Card and the UI elements on its surface.
        Card Cover makes it possible to add images, videos, and color and gradient overlays underneath the Card Content.`,
      },
    },
  },
};
