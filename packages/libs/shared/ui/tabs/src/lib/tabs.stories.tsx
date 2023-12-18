import { Phone, Favorite, Person } from '@mui/icons-material';

import { Tabs } from './tabs/tabs';
import { TabList } from './tab-list/tab-list';
import { Tab } from './tab/tab';
import { TabPanel } from './tab-panel/tab-panel';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Navigation/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Tabs make it easy to explore and switch between different views.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs
      aria-label="Basic tabs"
      defaultValue={0}
      orientation={args.orientation}
      variant={args.variant}
    >
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel value={0} sx={{ p: 2 }}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1} sx={{ p: 2 }}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2} sx={{ p: 2 }}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The tabs structure follows WAI ARIA design pattern. To target the initially selected tab, specify the value prop to the TabPanel and use Tabs's defaultValue.`,
      },
    },
  },
};

export const Icon: Story = {
  render: () => (
    <Tabs aria-label="Icon tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}>
      <TabList>
        <Tab>
          <Phone />
        </Tab>
        <Tab>
          <Favorite />
        </Tab>
        <Tab>
          <Person />
        </Tab>
      </TabList>
    </Tabs>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `Since TabList uses the same style as the List component, you can use the icon directly as a child or use ListItemDecorator with a text.`,
      },
    },
  },
};

export const NoWrap: Story = {
  render: (args) => (
    <Tabs
      aria-label="Basic tabs"
      defaultValue={4}
      orientation={args.orientation}
      variant={args.variant}
      noWrap
    >
      <TabList>
        <Tab>1 tab with long name</Tab>
        <Tab>2 tab with long name</Tab>
        <Tab>3 tab with long name</Tab>
        <Tab>4 tab with long name</Tab>
        <Tab>5 tab with long name</Tab>
        <Tab>6 tab with long name</Tab>
        <Tab>7 tab with long name</Tab>
        <Tab>8 tab with long name</Tab>
        <Tab>9 tab with long name</Tab>
        <Tab>10 tab with long name</Tab>
        <Tab>11 tab with long name</Tab>
        <Tab>12 tab with long name</Tab>
        <Tab>13 tab with long name</Tab>
        <Tab>14 tab with long name</Tab>
      </TabList>
      <TabPanel value={0} sx={{ p: 2 }}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1} sx={{ p: 2 }}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2} sx={{ p: 2 }}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The tabs structure follows WAI ARIA design pattern. To target the initially selected tab, specify the value prop to the TabPanel and use Tabs's defaultValue.`,
      },
    },
  },
};
