import { styled } from '@mui/joy/styles';
import { keyframes } from '@emotion/react';
import { Box } from '@task-flow/shared/ui/box';

const ldsLoader = keyframes`
  0% {
    top: 6px;
    height: 51px;
  }
  50%,
  100% {
    top: 19px;
    height: 26px;
  }
`;

export const LoaderContent = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  width: theme.spacing(8),
  height: theme.spacing(8),
  left: '-16px',
}));

export const LoaderItem = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  position: 'absolute',
  left: '6px',
  width: '13px',
  background: theme.vars.palette.primary.solidBg,
  animation: `${ldsLoader} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite`,
  '&:nth-of-type(1)': {
    animationDelay: '-0.24s',
  },
  '&:nth-of-type(2)': {
    left: '26px',
    animationDelay: '-0.12s',
  },
  '&:nth-of-type(3)': {
    left: '45px',
    animationDelay: 0,
  },
}));
