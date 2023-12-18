import { render } from '@testing-library/react';

import { Tabs } from '../tabs/tabs';
import { Tab } from '../tab/tab';
import { TabList } from '../tab-list/tab-list';

import { TabPanel } from './tab-panel';

describe('TabPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tabs defaultValue={0}>
        <TabList>
          <Tab>First tab</Tab>
        </TabList>
        <TabPanel value={0}>Tab panel content</TabPanel>
      </Tabs>
    );
    expect(baseElement).toBeTruthy();
  });
});
