import SvgIcon, { SvgIconProps } from '@mui/joy/SvgIcon';

export const IndeterminateIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="4" y="4" width="8" height="8" rx="1" />
    </SvgIcon>
  );
};
