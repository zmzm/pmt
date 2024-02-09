import { Stack } from '@task-flow/shared/ui/stack';
import { Add, ThumbUp, KeyboardArrowRight } from '@mui/icons-material';

import { Button } from './button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Inputs/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Buttons let users take actions and make choices with a single tap.',
      },
    },
  },
  argTypes: {
    color: {
      description:
        'The color of the component. It supports both default MUI colors and custom colors defined in our Theme',
      table: {
        type: null,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    label: 'Click Me!',
  },
};

export const Colors: Story = {
  render: (args) => (
    <Stack direction="row" gap={2}>
      <Button color="primary" label="primary" />
      <Button color="neutral" label="neutral" />
      <Button color="danger" label="danger" />
      <Button color="success" label="success" />
      <Button color="warning" label="warning" />
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
  render: (args) => (
    <Stack direction="row" gap={2}>
      <Button variant="solid" {...args} />

      <Button variant="soft" {...args} />

      <Button variant="outlined" {...args} />

      <Button variant="plain" {...args} />
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Use the disabled prop to disable interaction and focus.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Loading',
  },
  render: (args) => (
    <Stack direction="row" gap={2}>
      <Button variant="solid" {...args} />

      <Button variant="soft" {...args} />

      <Button variant="outlined" {...args} />

      <Button variant="plain" {...args} />
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          "Add the loading prop to show the Button's loading state. The Button is disabled as long as it's loading. Use Loading indicator and Loading position for customization options.",
      },
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <Stack direction="row" gap={2}>
      <Button variant="solid" label="solid" {...args} />

      <Button variant="soft" label="soft" {...args} />

      <Button variant="outlined" label="outlined" {...args} />

      <Button variant="plain" label="plain" {...args} />
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'The Button component supports four global variants: solid (default), soft, outlined, and plain.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={2} sx={{ alignItems: 'center' }}>
      <Button size="sm" label="small" />

      <Button size="md" label="medium" />

      <Button size="lg" label="large" />
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'The Button component comes in three sizes: sm, md (default), and lg.',
      },
    },
  },
};

export const Decorators: Story = {
  render: () => (
    <Stack direction="row" gap={2} sx={{ alignItems: 'center' }}>
      <Button startDecorator={<Add />} label="Add to cart" />
      <Button
        aria-label="Like"
        variant="outlined"
        color="neutral"
        sx={{
          borderRadius: 8,
        }}
      >
        <ThumbUp />
      </Button>
      <Button
        variant="soft"
        endDecorator={<KeyboardArrowRight />}
        color="success"
        label="Checkout"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Use the startDecorator and endDecorator props to append actions and icons to either side of the Button.',
      },
    },
  },
};

export const Skeleton: Story = {
  render: () => (
    <Stack direction="row" gap={2} sx={{ alignItems: 'center' }}>
      <Button skeleton startDecorator={<Add />} label="Add to cart" />
      <Button skeleton skeletonPlaceholder="Some text for button placeholder" />
      <Button startDecorator={<Add />} label="Add to cart" />
    </Stack>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story:
          'Use the skeleton to create placeholder for button for loading states.',
      },
    },
  },
};
