import { Children } from 'react';
import { TabsProps as JoyTabsProps } from '@mui/joy/Tabs';

import { ScrollableTabList } from './scrollable-tablist';
import { HorizonalTabs } from './styled';
import { TabListElement } from './types/tab-list-element';

type TabsProps = {
  noWrap?: boolean;
} & JoyTabsProps;

export const NoWrapTabs = ({ children, ...rest }: TabsProps) => {
  const originalTabList = Children.toArray(children)[0] as TabListElement;

  return (
    <HorizonalTabs {...rest}>
      <ScrollableTabList
        value={rest.value}
        defaultValue={rest.defaultValue}
        originalTabList={originalTabList}
      />
      {Children.toArray(children).slice(1)}
    </HorizonalTabs>
  );
};
