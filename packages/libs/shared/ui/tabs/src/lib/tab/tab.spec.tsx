import { render } from '@testing-library/react';

import { Tabs } from '../tabs/tabs';
import { TabList } from '../tab-list/tab-list';

import { Tab } from './tab';

describe('Tab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tabs defaultValue={0}>
        <TabList>
          <Tab>First tab</Tab>
        </TabList>
      </Tabs>
    );
    expect(baseElement).toBeTruthy();
  });
});
