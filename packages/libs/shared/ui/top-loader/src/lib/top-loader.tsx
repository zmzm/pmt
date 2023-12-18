import JoyLinearProgress, {
  LinearProgressProps,
} from '@mui/joy/LinearProgress';

export function TopLoader(props: LinearProgressProps) {
  return (
    <JoyLinearProgress
      sx={{
        '@keyframes top-loader-animation': {
          from: {
            left: '-300px',
            width: '30%',
          },
          '50%': {
            width: '30%',
          },
          '70%': {
            width: '70%',
          },
          '80%': {
            left: '50%',
          },
          '95%': {
            left: '120%',
          },
          to: {
            left: '100%',
          },
        },
        backgroundColor: 'transparent',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',

        [`&:before`]: {
          display: 'block',
          position: 'absolute',
          content: '""',
          height: '100%',
          animation: 'top-loader-animation 2s linear infinite',
        },
      }}
      thickness={2}
      {...props}
    />
  );
}

export default TopLoader;
