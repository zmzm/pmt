import JoyTab, { TabProps } from '@mui/joy/Tab';

export const Tab = ({ children, ...rest }: TabProps) => (
  <JoyTab {...rest}>{children}</JoyTab>
);
