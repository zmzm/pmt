import JoyTabs, { TabsProps as JoyTabsProps } from '@mui/joy/Tabs';

import { NoWrapTabs } from '../no-wrap-tabs/no-wrap-tabs';

type TabsProps = {
  noWrap?: boolean;
} & JoyTabsProps;

export const Tabs = ({ children, noWrap = true, ...rest }: TabsProps) =>
  noWrap ? (
    <NoWrapTabs {...rest}>{children}</NoWrapTabs>
  ) : (
    <JoyTabs {...rest}>{children}</JoyTabs>
  );
