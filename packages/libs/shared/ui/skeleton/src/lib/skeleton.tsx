import JoySkeleton, { SkeletonProps } from '@mui/joy/Skeleton';

export const Skeleton = ({ children, ...rest }: SkeletonProps) => (
  <JoySkeleton {...rest}>{children}</JoySkeleton>
);
