import { Typography } from '@task-flow/shared/ui/typography';
import { Grid } from '@task-flow/shared/ui/grid';

import { AspectRatio } from './aspect-ratio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  title: 'Data display/AspectRatio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Aspect Ratio component resizes its contents to match the desired ratio.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Primary: Story = {
  args: {
    variant: 'outlined',
    sx: { width: 320, height: 320 },
    children: (
      <Typography level="h2" component="div">
        16/9
      </Typography>
    ),
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Aspect Ratio is a wrapper component for quickly resizing content to conform to your preferred ratio of width to height. Media content like images can be stretched, resized, and cropped based on the CSS object-fit property. The default ratio is 16/9.',
      },
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid xs={6} md>
        <AspectRatio variant="solid" {...args}>
          <Typography level="inherit" fontWeight="lg">
            Solid
          </Typography>
        </AspectRatio>
      </Grid>
      <Grid xs={6} md>
        <AspectRatio variant="soft" {...args}>
          <Typography level="inherit" fontWeight="lg">
            Soft
          </Typography>
        </AspectRatio>
      </Grid>
      <Grid xs={6} md>
        <AspectRatio variant="outlined" {...args}>
          <Typography level="inherit" fontWeight="lg">
            Outlined
          </Typography>
        </AspectRatio>
      </Grid>
      <Grid xs={6} md>
        <AspectRatio variant="plain" {...args}>
          <Typography level="inherit" fontWeight="lg">
            Plain
          </Typography>
        </AspectRatio>
      </Grid>
    </Grid>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Aspect Ratio component supports Joy UI's four global variants: solid, soft (default), outlined, and plain.`,
      },
    },
  },
};
