import SvgIcon, { SvgIconProps } from '@mui/joy/SvgIcon';

export const CheckIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="16" height="16" viewBox="0 0 32 32" fill="none">
      <path
        fill="currentColor"
        d="M11 27.829L1.171 18 4 15.171l7 7 18-18L31.829 7 11 27.829z"
        style={{ transformOrigin: '50%', transform: 'scale(0.6, 0.7)' }}
      ></path>
    </SvgIcon>
  );
};
