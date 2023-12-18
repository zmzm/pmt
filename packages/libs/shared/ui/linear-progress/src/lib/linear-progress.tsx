import JoyLinearProgress, {
  LinearProgressProps,
} from '@mui/joy/LinearProgress';

export const LinearProgress = ({ children, ...rest }: LinearProgressProps) => (
  <JoyLinearProgress {...rest}>{children}</JoyLinearProgress>
);
