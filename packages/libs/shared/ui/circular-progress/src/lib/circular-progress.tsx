import JoyCircularProgress, {
  CircularProgressProps,
} from '@mui/joy/CircularProgress';

export const CircularProgress = ({
  children,
  ...rest
}: CircularProgressProps) => (
  <JoyCircularProgress {...rest}>{children}</JoyCircularProgress>
);
