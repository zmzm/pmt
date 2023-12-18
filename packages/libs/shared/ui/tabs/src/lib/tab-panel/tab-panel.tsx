import JoyTabPanel, { TabPanelProps } from '@mui/joy/TabPanel';

export const TabPanel = ({ children, ...rest }: TabPanelProps) => (
  <JoyTabPanel {...rest}>{children}</JoyTabPanel>
);
