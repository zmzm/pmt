import { render } from '@testing-library/react';

import { Tabs } from '../tabs/tabs';

import { TabList } from './tab-list';

describe('TabList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tabs>
        <TabList>Tab list content</TabList>
      </Tabs>
    );
    expect(baseElement).toBeTruthy();
  });
});
