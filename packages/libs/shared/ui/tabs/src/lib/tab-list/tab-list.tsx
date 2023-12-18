import JoyTabList, { TabListProps } from '@mui/joy/TabList';

export const TabList = ({ children, ...rest }: TabListProps) => (
  <JoyTabList {...rest}>{children}</JoyTabList>
);
